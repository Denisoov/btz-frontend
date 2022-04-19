<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    typesQuestion: [
      {
        type: 1,
        typeName: 'Открытый вопрос',
      },
      {
        type: 2,
        typeName: 'Закрытый вопрос',
      },
    ],
  }),
  computed: {
    questionType: {
      get() {
        return this.$store.state.question.activeQuestion.type_question_id
      },
      set(value) {
        this.$store.commit('question/SET_QUESTION_TYPE', value)
      },
    },
  },
})
</script>

<template>
  <div>
    <v-select
      :items="typesQuestion"
      label="Тип вопроса"
      item-text="typeName"
      item-value="type"
      v-model="questionType"
    ></v-select>
  </div>
</template>

<style scoped lang="scss">
.v-list-item__title {
  font-family: 'Montserrat-Regular', 'sans-serif';
}
</style>
