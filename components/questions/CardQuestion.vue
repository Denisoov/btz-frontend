<script>
import Vue from 'vue'

import OpenQuestion from '@/components/questions/OpenQuestion'
import ClosedQuestion from '@/components/questions/ClosedQuestion'

import IconDelete from '@/components/icons/IconDelete'

export default Vue.extend({
  components: {
    OpenQuestion,
    ClosedQuestion,
    IconDelete,
    TitleFormQuestion: () => 
      import('@/components/questions/TitleFormQuestion'),
    SelectTypeQuestion: () =>
      import('@/components/questions/SelectTypeQuestion'),
    OrderingQuestion: () =>
      import('@/components/questions/OrderingQuestion'),
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
        case 3:
          return 'OrderingQuestion'
      }
    },
  },
})
</script>

<template>
  <div @click="setActiveQuestion(question)">
    <div v-if="activeQuestion.id !== question.id" >{{ question.question }}</div>

    <form v-else class="constructor">
      <div class="header">
        <title-form-question />
        <select-type-question />
      </div>
      <component
        v-if="determinantQuestionId(question.id)"
        :is="determinantTypeQuestion(activeQuestion.type_question_id)"
    ></component>
      <div class="footer">
        <hr class="footer__line">
        <div class="footer__container">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
              <icon-delete />
              </v-btn>
            </template>
            <span>Удалить</span>
          </v-tooltip>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
  .header {
    margin-bottom: 20px;
    @include flex-mix(flex, space-between);
  }
  .footer {
    height: 46px;

    &__line {
      margin: 20px 0 10px 0;
      background: $light-gray;
    }
    &__container {
      @include flex-mix(flex, flex-end)
    }
  }
</style>
