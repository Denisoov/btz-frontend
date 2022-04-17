<script>
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    typesQuestion: [
      {
        type: 1,
        typeName: 'Открытый вопрос'
      },
      {
        type: 2,
        typeName: 'Закрытый вопрос'
      },
    ]
  })
})
</script>

<template>
  <div>
      <v-select
      :items="typesQuestion"
      label="Тип вопроса"
      item-text="typeName"
      item-value="type"
    ></v-select>
  </div>
</template>

<style scoped lang="scss">
  .v-list-item__title {
    font-family: 'Montserrat-Regular', 'sans-serif';
  }
</style>