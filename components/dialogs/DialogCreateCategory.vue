<script>
import Vue from 'vue'

import AppButton from '@/components/base/AppButton.vue'

export default Vue.extend({
  components: {
    AppButton
  },
  methods: {
    closeDialog() {
      this.$emit('input', false)
    },
  }
})
</script>

<template>
  <div>
    <h2>Новая категория</h2>
    <v-text-field />
    <app-button 
      :title="'Создать'" 
      @click="closeDialog" 
      class="create middle" 
    />
  </div>
</template>

<style scoped lang="scss">
.create {
  background: $primary;
}
</style>
