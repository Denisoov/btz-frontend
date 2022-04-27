<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    AppButton: () => import('@/components/base/AppButton.vue'),
  },
  data: () => ({ newTitleBank: null }),
  methods: {
    closeDialog() {
      this.$emit('input', false)
    },
    async createNewBank() {
      await this.$store.dispatch(
        'bank/createNewBank',
        { name: this.newTitleBank }
      )

      this.newTitleBank = null;

      await this.closeDialog()
    }
  },
})
</script>

<template>
  <div>
    <h3>Новый банк тестовых заданий</h3>
    <v-text-field placeholder="Наименование банка" v-model="newTitleBank" />
    <div class="control-buttons">
      <app-button 
        :title="'Создать'" 
        @click="createNewBank" 
        class="create mini" 
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-input {
    width: 100%;
    max-width: 100%;
}
.control-buttons {
  @include flex-mix(flex, flex-end)
}
.create {
  background: $background-button-red;
}
</style>
