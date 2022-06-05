<template>
  <section class="page-header">
    <button @click="$router.go(-1)" class="page-header__comback ripple">Назад</button>
    <h2 v-if="$attrs['content-title']" > {{ $attrs['content-title']}} </h2>
  </section>
</template>

<style lang="scss">
.page-header {

  @include flex-mix(flex, flex-start);

  &__comback {
    @include flex-mix(flex, flex-start);
    width: inherit;
    padding: 6px 20px;
    margin-right: 20px;
    border-radius: 15px;
    color: $background-content;
    font-family: 'Montserrat-SemiBold', 'sans-serif';
    text-align: center;
    font-size: 14px;
    background: linear-gradient(180deg, #1d22af 0%, #2228c7 100%)
  }
}
</style>
