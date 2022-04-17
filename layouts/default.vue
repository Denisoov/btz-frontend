<script>
import Vue from 'vue'

import TheHeader from '@/components/TheHeader.vue'

export default Vue.extend({
  components: {
    TheHeader,
  },
})
</script>
<template>
  <v-app class="layout">
    <the-header></the-header>
    <div class="page">
      <nuxt />
    </div>
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
    // box-shadow: 0 6px 37px rgb(0 0 0 / 10%);
    box-shadow: 10px 10px 0px rgb(239 239 239);
    border-radius: 15px;
    background: #f9faff;
  }
}
</style>
