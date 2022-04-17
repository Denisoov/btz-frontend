<script>
import Vue from 'vue'

import CardQuestion from '@/components/questions/CardQuestion'

export default Vue.extend({
  components: {
    CardQuestion,
  },
  props: {
    questions: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<template>
  <div class="questions">
    <!-- <component
      @click="setActiveQuestion(question)"
      v-for="(question, index) in questions"
      :key="index"
      :question="question"
      class="questions__question"
      :is="determinantTypeQuestion(question.type_question_id)"
    ></component> -->
    <card-question
      v-for="(question, index) in questions"
      :key="index"
      :question="question"
      class="question"
    />
  </div>
</template>

<style lang="scss">
.questions {
  @include flex-mix(flex, flex-start);
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;

  .question {
    cursor: pointer;
    position: relative;
    width: 100%;
    height: inherit;
    background-color: $active-card;
    border-radius: 10px;
    padding: 20px 30px;
    margin-bottom: 30px;
    box-shadow: 0px 4px 4px rgb(149 149 149 / 22%);
  }
}
</style>
