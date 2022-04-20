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
  mounted() {
    if (this.active) {
      this.$refs["textarea"].focus()
    }
  }
})
</script>

<template>
  <v-textarea
    filled
    auto-grow
    label="Вопрос"
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