<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    AppButton: () => import('@/components/base/AppButton.vue'),
  },
  props: {
    idBank: {
      type: Number,
      required: true
    }
  },
  async mounted() {
      const file = await this.$store.dispatch('bank/unloadBank', this.idBank)

      let excel = new Blob([file.data])
        let url = URL.createObjectURL(excel)
        let a = document.createElement("a")
        a.href = url
        a.download = "hello.gift"
        a.click()

        this.closeDialog();

  },
  methods: {
    closeDialog() {
      this.$emit('closeDialogUnloadBank')
    },
  },
})
</script>

<template>
  <div class="dialog-content">
    <h3>Подготовка файла, подождите...</h3>
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog-content {
  @include flex-mix(flex, center, center);
  flex-direction: column;
  height: 120px;
}
.loading {
  color: rgba(255, 255, 255, 0);

  span {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: $dark-blue;
    display: inline-block;
    animation: loading 0.5s infinite linear alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}
@keyframes loading {
  to {
    opacity: 0.5;
    transform: translateY(-10px);
  }
}
</style>
