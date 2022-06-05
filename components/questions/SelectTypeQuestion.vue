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
      // {
      //   type: 3,
      //   typeName: 'На соответствие',
      // },
      {
        type: 4,
        typeName: 'На упорядочивание',
      },
    ],
  }),
  computed: {
    questionType: {
      get() {
        return this.$store.state.question.activeQuestion.type_question_id
      },
      set(value) {
        this.$store.dispatch('question/changeTypeQuestion', value)
      },
    },
  },
})
</script>

<template>
  <v-select
    :items="typesQuestion"
    label="Тип вопроса"
    item-text="typeName"
    item-value="type"
    v-model="questionType"
  ></v-select>
</template>

<style lang="scss">
.v-input {
  width: 300px;
  max-width: 300px;
  font-family: "Montserrat-Medium", "sans-serif";
}
.v-list-item__content {
  font-family: "Montserrat-Medium", "sans-serif";
}
.v-menu__content {
  border-radius: 8px;
}
</style>
