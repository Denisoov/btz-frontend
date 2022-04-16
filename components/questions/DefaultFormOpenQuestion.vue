<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    question: {
      type: Object,
      required: true
    }
  }
})
</script>

<template>
  <div>
    <h4 class="default-title">{{ question.question }}</h4>
  </div>
</template>

<style scoped>
  .default-title {
  }
</style>