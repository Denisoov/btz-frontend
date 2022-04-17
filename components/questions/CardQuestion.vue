<script>
import Vue from 'vue'

import OpenQuestion from '@/components/questions/OpenQuestion'
import ClosedQuestion from '@/components/questions/ClosedQuestion'

export default Vue.extend({
  components: {
    OpenQuestion,
    ClosedQuestion,
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    title: '',
  }),
  computed: {
    questionName: {
      get() {
        return this.$store.state.question.activeQuestion?.question
          ? this.$store.state.question.activeQuestion?.question
          : ''
      },
      set() {
        this.$store.commit('question/SET_QUESTION_NAME', this.title)
      },
    },
    activeQuestionId() {
      return this.$store.getters['question/activeQuestionId']
    },
  },
  methods: {
    setActiveQuestion(question) {
      this.$store.commit('question/SET_ACTIVE_QUESTION', question)
      console.log(this.activeQuestionId)
    },
    determinantQuestionId(id) {
      return this.activeQuestionId === id
    },
    determinantTypeQuestion(type) {
      switch (type) {
        case 1:
          return 'OpenQuestion'
        case 2:
          return 'ClosedQuestion'
      }
    },
  },
})
</script>

<template>
  <div @click="setActiveQuestion(question)" class="title-question">
    <div>
      <!-- <textarea v-if="activeQuestionId === question.id" v-model="questionName" cols="30" rows="10"></textarea> -->
      <div v-if="activeQuestionId !== question.id" >{{ question.question }}</div>

      <component
        v-if="determinantQuestionId(question.id)"
        :question="question"
        class="questions__question"
        :is="'OpenQuestion'"
      ></component>
    </div>
  </div>
</template>

<style lang="scss">
.title-question {
  width: 100%;
  font-family: 'Montserrat-SemiBold', 'sans-serif';
  resize: none;
  height: inherit;

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
</style>
