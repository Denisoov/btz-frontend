<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    AppButton: () => import('@/components/base/AppButton.vue'),
  },
  data: () => ({ newTitleBank: null }),
  methods: {
    async createNewBank() {
      await this.$store.dispatch(
        'bank/addSectionInBank',
        { name: this.newTitleBank }
      )
      await this.$emit('closeDialog')

      this.newTitleBank = null;
    }
  },
})
</script>

<template>
  <div>
    <h3>Добавление раздела из списка</h3>
    <v-text-field
      placeholder="Наименование банка" 
      v-model="newTitleBank" 
    />
    <div class="control-buttons">
      <app-button 
        :title="'Создать'" 
        @click="createNewBank" 
        class="add mini" 
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
.add {
  background: $backgorund-birch;
}
</style>
