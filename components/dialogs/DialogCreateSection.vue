<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    AppButton: () => import('@/components/base/AppButton.vue'),
  },
  data: () => ({ newTitleSection: null }),
  methods: {
    async createNewSection() {
      await this.$store.dispatch(
        'section/createNewSection',
        { name: this.newTitleSection }
      )

      this.$emit('closeDialogCreateSection')

      this.newTitleBank = null;
    }
  },
})
</script>

<template>
  <div>
    <h3>Новый раздел</h3>
    <v-text-field
      placeholder="Наименование раздела" 
      v-model="newTitleSection" 
      autofocus
    />
    <div class="control-buttons">
      <app-button 
        :title="'Создать'" 
        @click="createNewSection" 
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
