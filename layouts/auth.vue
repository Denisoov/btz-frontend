<template>
  <v-app>
    <div class="layout">
      <nuxt />
    </div>
  </v-app>
</template>

<style lang="scss">
.layout {
  @include flex-mix(flex);
  min-height: 100vh;
  background: linear-gradient(270deg, transparent 50%, #171b94 50%, #171b94);
}
</style>
