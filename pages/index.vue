<script>
import Vue from 'vue'

import Menu from '@/components/Menu.vue'

export default Vue.extend({
  layout: 'default',
  components: {
    Menu,
  },
})
</script>

<template>
  <div class="content">
    <h2>Главное меню</h2>
    <section class="wrapper-menu">
      <Menu />
    </section>
  </div>
</template>

<style lang="scss">
.wrapper-menu {
  height: 70vh;
  @include flex-mix(flex);
}
</style>
