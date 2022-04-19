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
  <section class="questions">
    <card-question
      v-for="(question, index) in questions"
      :key="index"
      :question="question"
      class="questions__question"
    />
  </section>
</template>

<style lang="scss">
.questions {
  @include flex-mix(flex, flex-start);
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;

  &__question {
    cursor: pointer;
    position: relative;
    width: 100%;
    height: inherit;
    background-color: $active-card;
    border-radius: 10px;
    padding: 20px 30px;
    margin-bottom: 30px;
    box-shadow: 0px 4px 4px rgb(149 149 149 / 22%);
    font-family: 'Montserrat-SemiBold', 'sans-serif';

    &:focus {
      width: 50%;
      outline: none;
      padding: 6px 10px;
      background-color: #ebf0ff;
      border-bottom: 2px solid #000;
      overflow-y: hidden;
      transition: all 50ms ease-in-out;
    }
  }
}
</style>
