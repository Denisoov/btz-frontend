<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    AppSnackbar: () => (import('@/components/base/AppSnackbar'))
  }
})
</script>

<template>
  <div class="layout">
    <nuxt />
    <app-snackbar />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  @include flex-mix(flex);
  min-height: 100vh;
  background: linear-gradient(270deg, transparent 50%, #171b94 50%, #171b94);
}
</style>
