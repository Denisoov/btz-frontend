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
  <div class="type-closed">
    <div class="header">
      <title-form-question />
      <select-type-question />
    </div>
  </div>
</template>

<style>

</style>
