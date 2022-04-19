<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    TitleFormQuestion: () => import('@/components/questions/TitleFormQuestion'),
    SelectTypeQuestion: () =>
      import('@/components/questions/SelectTypeQuestion'),
  },
})
</script>

<template>
  <div class="type-open">
    <div class="heaader">
      <title-form-question />
      <select-type-question />
    </div>
  </div>
</template>

<style lang="scss">
.type-open {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 6px;
    background-color: $dark-blue;
    border-radius: 15px;
  }
  .heaader {
    @include flex-mix(flex, space-between);
  }
}
</style>
