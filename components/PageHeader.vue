<template>
  <section class="page-header">
    <button class="page-header__comback ripple">Назад</button>
    <h2> {{ $attrs['content-title']}} </h2>
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
    color: #f9faff;
    font-family: 'Montserrat-SemiBold', 'sans-serif';
    text-align: center;
    font-size: 14px;
    background: linear-gradient(180deg, #1b20a6 0%, #1c21ac 100%);
    box-shadow: inset 0px 0px 12px rgb(23 27 150);
  }
}
</style>
