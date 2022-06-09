<script>
import Vue from 'vue'

import NotMobile from '@/components/NotMobile.vue'
import TheHeader from '@/components/TheHeader.vue'

export default Vue.extend({
  components: {
    NotMobile,
    TheHeader,
    AppSnackbar: () => (import('@/components/base/AppSnackbar'))
  },
})
</script>
<template>
  <v-app v-if="!$device.isMobile && !$device.isTablet" class="layout">
    <the-header></the-header>
    <main class="page">
      <transition name="view">
        <nuxt />
      </transition>
      <app-snackbar />
    </main>
  </v-app>
  <v-app  v-else >
    <main class="page--mobile">
      <not-mobile />
    </main>
  </v-app>
</template>
<style lang="scss" scoped>
.v-application {
  width: 100%;
  height: 100%;
  display: block;

  .page {
    z-index: 20;
    max-width: 1200px;
    min-width: 1200px;
    height: initial;
    min-height: 800px;
    padding: 30px;
    margin: 100px auto 0 auto;
    box-shadow: 10px 10px 0px rgb(239 239 239);
    border-radius: 15px;
    background: $background-content;
  }
  &--mobile {
    position: relative;
    width: 100%;
    height: 100vh;
    display: block;
  }
}
.view-enter-active,
view-active {
  transition: all 0.4s ease-in-out;
}
.view-enter,
view-leave-to,
view-preview {
  opacity: 0;
}
</style>
