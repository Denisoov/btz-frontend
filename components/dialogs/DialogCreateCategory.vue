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
    <v-text-field />
    <app-button 
      :title="'Создать'" 
      @click="closeDialog" 
      class="create" 
    />
  </div>
</template>

<style scoped lang="scss">
.create {
  background: $primary;
}
</style>
