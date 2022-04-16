<script>
import Vue from 'vue';

import OpenQuestion from '@/components/questions/OpenQuestion';
import ClosedQuestion from '@/components/questions/ClosedQuestion';

export default Vue.extend({
  components: {
    OpenQuestion,
    ClosedQuestion
  },
  props: {
    questions: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    determinantTypeQuestion(type) {
      switch(type) {
        case 1: return 'OpenQuestion'
        case 2: return 'ClosedQuestion'
      }
    } 
  }
})
</script>

<template>
    <section class="questions">
        <component 
          v-for="(question) in questions"
          :key="question.id"
          :question="question"
          :is="determinantTypeQuestion(question.type_question_id)"
        ></component>
    </section>
</template>

<style scoped lang="scss">
  .questions {
    height: 100%;
    border: 2px solid #000;
  }
</style>