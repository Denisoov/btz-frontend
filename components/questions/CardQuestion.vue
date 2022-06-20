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
    activeQuestion: {
      type: Object
    }
  },
  data: () => ({ title: '' }),
  methods: {
    setActiveQuestion(question) {
        this.$store.dispatch('question/changeActiveQuestion', question)
    },
    //Проверка на схождение id вопроса и активного вопроса
    determinantQuestionId(id) {
      return this.activeQuestion.id === id
    },
    //определяем тип вопроса
    determinantTypeQuestion(type) {
      switch (type) {
        case 1:
          return 'OpenQuestion'
        case 2:
          return 'ClosedQuestion'
        case 3:
          return 'СomplianceQuestion'
        case 4:
          return 'OrderingQuestion'
      }
    },
    preColor(type) {
      switch (type) {
        case 1:
          return { borderLeft: '6px solid #45cdec' }
        case 2:
          return { borderLeft: '6px solid #f3467e' }
        case 4:
          return { borderLeft: '6px solid #46f380' }
      }
    },
    deleteCurrentQuestion(idQuestion) {
      this.$store.dispatch('question/deleteCurrentQuestion', idQuestion)
    }
  },
})
</script>

<template>
    <div 
      :style="preColor(question.type_question_id)"
      v-if="!determinantQuestionId(question.id)" 
      @click="setActiveQuestion(question)" 
    >
      {{ question.question }}
    </div>

    <form v-else class="constructor">
      <div class="header">
        <title-form-question />
        <select-type-question />
      </div>
      <component
        v-if="determinantQuestionId(question.id)"
        :is="determinantTypeQuestion(activeQuestion.type_question_id)"
        :active-question="activeQuestion"
    ></component>
      <div class="footer">
        <hr class="footer__line">
        <div class="footer__container">
          <div class="footer__container-message">*Конструкт на стадии разработки</div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                @click="deleteCurrentQuestion(activeQuestion.id)"
              >
              <icon-delete />
              </v-btn>
            </template>
            <span>Удалить</span>
          </v-tooltip>
        </div>
      </div>
    </form>
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
      @include flex-mix(flex, space-between);

      &-message {
        font-family: "Montserrat-Regular";
        font-size: 13px;
        color: #ff2e2e;
      }
    }
  }
</style>
