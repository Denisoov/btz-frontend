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
    activeQuestion() {
      return this.$store.getters['question/activeQuestion']
    },
  },
  methods: {
    setActiveQuestion(question) {
      if (this.activeQuestion.id !== question.id) 
        this.$store.commit('question/SET_ACTIVE_QUESTION', question)
    },
    determinantQuestionId(id) {
      return this.activeQuestion.id === id
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
  <div @click="setActiveQuestion(question)">
    <div>
      <div v-if="activeQuestion.id !== question.id" >{{ question.question }}</div>
      <component
        v-if="determinantQuestionId(question.id)"
        :is="determinantTypeQuestion(activeQuestion.type_question_id)"
      ></component>
    </div>
  </div>
</template>

<style lang="scss">

</style>
