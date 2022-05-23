<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    questionName: {
      get() {
        return this.$store.state.question.activeQuestion.question
      },
      set(value) {
        this.extractLatex(value)
        this.$store.commit('question/SET_QUESTION_NAME', value)
      },
    },
    questionType() {
      return this.$store.state.question.activeQuestion.type_question_id
    }
  },
  methods: {
    getAnswer() {
      if (this.$store.state.question.activeQuestion.type_question_id === 2) {
        const question = this.questionName
        const answers = this.extractWords(question)

        this.$store.commit(
          'question/REVIEW_CLOSED_QUESTION_ANSWERS', 
          answers || []
        )
      }
    },
    extractWords(str) {
      let segment, 
          regStart = /@.*?@/ig;

      segment = regStart.exec(str)

      if (segment) {
        // обрезаем спецсимволы, и двойные проблемы, разбиваем на массив слов
        segment = segment[0].replace(/\s+/g, ' ')
                              .replace(/^.|.$/g,"")
                                .trim()
                                  .split(/[,]+/);
        return segment
      }
    },
    extractLatex(str) {
      // запрещаем латех для второго типа вопроса
      if (this.questionType === 2) return

      let segment, 
          regStart = /(\${2})((?:\\.|.)*)\1/;

      segment = regStart.exec(str)
      
      if (segment) {
        this.formula = segment[0]       
        console.log(segment)
      }
      else this.formula = ''
    }
  },
  data: () => ({
    formula: ''
  }),
  updated() {
    this.getAnswer()
  },
})
</script>

<template>
  <div>
    <v-textarea
      filled
      auto-grow
      placeholder="Вопрос без заголовка"
      rows="2"
      hide-details
      row-height="20"
      class="input-title"
      v-model="questionName"
    />
    <math-jax :latex="formula" />
  </div>
</template>

<style lang="scss">
  .input-title {
    width: 500px;
    max-width: 500px;
    font-family: 'Montserrat-SemiBold', 'sans-serif';
    resize: none;
    overflow-y: hidden;
  }
  .MathJax {
    font-size: 160%;
    top: 10px;
  }
</style>