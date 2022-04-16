<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import InfoBlock from '@/components/InfoBlock'
import AppInputSearch from '@/components/base/AppInputSearch'
import AppButton from '@/components/base/AppButton'
import ListQuestions from '@/components/ListQuestions'

export default Vue.extend({
  components: {
    PageHeader,
    InfoBlock,
    AppInputSearch,
    AppButton,
    ListQuestions
  },
  data: () => ({
    questions: [
      {
        id: 0,
        id_category: 1,
        question: 'Сколько будет 2 +2',
        type_question_id: 1,
        answer: [3],
        opinions: [
          {
            id: 1,
            opinion: '1'
          },
          {
            id: 2,
            opinion: '2'
          },
          {
            id: 3,
            opinion: '3'
          },
          {
            id: 4,
            opinion: '4'
          }
        ]
      },
      {
        id: 1,
        id_category: 1,
        question: 'Я ___ и был',
        type_question_id: 2,
        answer: ['был'],
        opinions: null
      }
    ]
  })
})
</script>

<template>
  <div class="content">
    <page-header :content-title="'Категории'" />
    <info-block />
    <section class="control-panel">
      <app-input-search
        class="control-panel__search"
        :placeholder="'Поиск по категориям'"
      />
      <app-button 
        class="control-panel__create mini" 
        :title="'Создать'" 
      />
      <app-button 
        class="control-panel__upload mini" 
        :title="'Загрузить'" 
      />
    </section>
    <list-questions :questions="questions" />
  </div>
</template>

<style lang="scss">
.content {
  &__header {
    position: relative;
    @include flex-mix(flex, flex-start);
  }
}
.control-panel {
  @include flex-mix(flex, space-between);
  margin-top: 60px;

  &__search {
    margin: 30px 0;
  }
  &__create {
    background: $background-button-red;
  }
  &__upload {
    background: $backgorund-birch;
  }
}
.banks {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
  margin-top: 30px;
}
</style>
