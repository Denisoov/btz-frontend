<script>
import Vue from "vue";

export default Vue.extend({
  computed: {
    questionName: {
      get() {
        return this.$store.state.question.activeQuestion.question
      },
      set(value) {
        this.$store.commit('question/SET_QUESTION_NAME', value)
      },
    },
  },
  methods: {
    getAnswer() {
      if (this.$store.state.question.activeQuestion.type_question_id === 2) {
        const question = this.questionName
        const answers = this.extractAnswer(question)

        this.$store.commit(
          'question/REVIEW_CLOSED_QUESTION_ANSWERS', 
          answers || []
        )
      }
    },
    extractAnswer(str){
      let answer, positionStart, positionEnd;
      let regStart = /@/ig, regEnd = /@/ig;

      positionStart = regStart.exec(str)
      positionEnd = regEnd.exec(str)

      if (positionStart && positionEnd) {
        // str =  str.replace(/\s+/g, ' ').trim()

        answer = str.slice(positionStart.index + 1, positionEnd.index)
                      .replace(/[^a-zа-яё0-9\s]/gi, ' ')
                        .split(',');
        console.log(answer)
        return answer
      }
    },
  },
  updated() {
    this.getAnswer()
  }
})
</script>

<template>
  <v-textarea
    filled
    auto-grow
    placeholder="Вопрос без заголовка"
    rows="2"
    hide-details
    row-height="20"
    class="input-title"
    v-model="questionName"
  ></v-textarea>
</template>

<style lang="scss">
  .input-title {
    width: 500px;
    max-width: 500px;
    font-family: 'Montserrat-SemiBold', 'sans-serif';
    resize: none;
    overflow-y: hidden;


  }
</style>