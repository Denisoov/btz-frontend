<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({ 
    newTitleCategory: null,
    typesQuestion: [
      {
        type: 1,
        title: 'Открытый'
      },
      {
        type: 2,
        title: 'Закрытый'
      },
      {
        type: 3,
        title: 'На соответствие'
      },
      {
        type: 4,
        title: 'На упорядочивание'
      }
    ]
  }),
  methods: {
    createQuestion(typeQuestion) {
      this.$emit('createQuestion', typeQuestion)
    },
  },
})
</script>

<template>
  <div>
    <h3>Выберите тип вопроса</h3>
    <div class="types" >
      <v-btn
        v-for="(typeQuestion, index) in typesQuestion"
        :key="index"
        @click="createQuestion(typeQuestion.type)"
        outlined
        class="types__type"
        color="indigo"
      >
        {{ typeQuestion.title }}
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.types {
  @include flex-mix(flex,space-between);
  margin: 20px 0;
  font-family: "Montserrat-Medium";

  .v-btn {
    height: 100px;
  }
}
</style>
