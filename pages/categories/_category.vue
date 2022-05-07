<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import TabCategories from '@/components/TabCategories'
import AppTitle from '@/components/base/AppTitle'
import AppButton from '@/components/base/AppButton'
import ListQuestions from '@/components/ListQuestions'

export default Vue.extend({
  components: {
    PageHeader,
    AppTitle,
    AppButton,
    TabCategories,
    ListQuestions,
    AppDialog: () => (import('@/components/base/AppDialog')),
  },
  async created() {
    await this.$store.dispatch(
      'category/getDetailCategory', 
      this.$route.params.category
    )

    await this.$store.dispatch(
      'question/getAllQuestions',
      this.$route.params.category
    )

  },
  computed: {
    detailCategory() {
      return this.$store.state.category.detailCategory
    },
    questions() {
      return this.$store.state.question.questions
    }
  },
  data: () => ({
    isDialogCreateNewSection: false,
    isDialogAddSection: false,
  }),
  methods: {
    changeTitleValue(value) {
      this.$store.commit(
        'category/SET_NEW_TITLE_CATEGORY', 
        { name: value }
      )
    },
    accessChangesTitle(value) {
      this.$store.dispatch(
        'category/changeTitleCategory', 
        { name: value }
      )
    },
  }
})
</script>

<template>
  <div class="content" >
    <page-header />
    <app-title 
      :title="detailCategory.name"
      @changeTitleValue="changeTitleValue"
      @accessChangesTitle="accessChangesTitle"
    />
    <div class="wrapper">
      <div class="section">
        <div class="section__header">
          <h3>Перечень вопроов</h3>
        </div>
        <section class="section__body" >
          <list-questions 
            v-if="questions"
            :questions="questions" 
          />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    width: 100%;
    height: 100%;
    @include flex-mix(flex, flex-start);
  }
  .section {
    width: 100%;
    height: 100%;
    @include flex-mix(flex, flex-start, flex-start);
    flex-direction: column;

    &__header {
      margin-top: 30px;
      color: #747474;
      font-size: 18px;
    }
    
    &__body {
      width: 100%;
      min-height: 56vh;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
    }
  }

.v-window {
  padding: 0 20px 20px 20px;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 4px;
    width: 2px;
    background-color:#b1b1b1;
    height: 100%;
  }
}
.v-tabs {
  width: 300px;
}
.v-tabs-items {
  background-color: #f9faff;

  &__title {
    margin-bottom: 10px;
  }
}
.v-tabs--vertical > .v-tabs-bar .v-tab {
  font-family: 'Montserrat-Medium', 'sans-serif';
  max-width: 250px;
  height: inherit;
  padding: 10px 10px;
  justify-content: flex-start;
  white-space: normal;
  text-align: left;
  letter-spacing: 0;

  &--active {
    color: white;
    border: none;
    background: $dark-blue;
  }

}
</style>
