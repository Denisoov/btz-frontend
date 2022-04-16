<script>
import Vue from 'vue';

import DefaultFormOpenQuestion from '@/components/questions/DefaultFormOpenQuestion'
// import ActivedFormOpenQuestion from '@/components/questions/ActivedFormOpenQuestion'

export default Vue.extend({
  components: {
    DefaultFormOpenQuestion,
    ActivedFormOpenQuestion: () =>(import('@/components/questions/ActivedFormOpenQuestion'))
},
  props: {
    question: {
      type: Object,
      required: true
    }
  }
})
</script>

<template>
  <div class="question">
    <default-form-open-question :question="question" />
    <!-- <actived-form-open-question /> -->
  </div>
</template>

<style scoped lang="scss">
  .question {
    width: 100%;
    height: inherit;
    padding: 20px 30px;
    box-shadow: 0px 2px 21px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
  }
</style>