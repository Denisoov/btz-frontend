<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    AppButton: () => import('@/components/base/AppButton.vue'),
  },
  computed: {
    checkChartsOfTitle() {
      return this.newTitleCategory && this.newTitleCategory.length !== 0
    }
  },
  data: () => ({ newTitleCategory: null }),
  methods: {
    async createNewCategory() {
      await this.$store.dispatch('category/createNewCategory',{ name: this.newTitleCategory })
      await this.$emit('closeDialog')
      
      this.newTitleCategory = null;
    }
  },
})
</script>

<template>
  <div>
    <h3>Новая категория</h3>
    <v-text-field 
      v-model="newTitleCategory"
      placeholder="Наименование категории" 
      autofocus
    />
    <div class="control-buttons">
      <app-button 
        :disabled="!checkChartsOfTitle"
        :title="'Создать'" 
        @click="createNewCategory" 
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
