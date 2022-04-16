<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
})
</script>

<template>
  <div>2 тип {{ question.question }}</div>
</template>

<style>

</style>
