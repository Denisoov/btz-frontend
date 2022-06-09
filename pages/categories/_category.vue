<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import TabCategories from '@/components/TabCategories'
import ListQuestions from '@/components/ListQuestions'

import AppTitle from '@/components/base/AppTitle'
import AppLoading from '@/components/base/AppLoading'
import AppButton from '@/components/base/AppButton'

export default Vue.extend({
  components: {
    PageHeader,
    AppTitle,
    AppButton,
    AppLoading,
    TabCategories,
    ListQuestions,
    AppDialog: () => (import('@/components/base/AppDialog')),
    DialogCreateQuestion: () => (import('@/components/dialogs/DialogCreateQuestion')),
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

    await this.$store.commit('SET_LOADING_STATUS', 
        { typeLoading: 'isLoadingPageCategory', status: false }
    )

  },
  destroyed() {
    this.$store.dispatch('question/autoSaveActiveQuestion')
  },
  computed: {
    isLoadingPage() {
      return this.$store.state.isLoadingPageCategory
    },
    detailCategory() {
      return this.$store.state.category.detailCategory
    },
    questions() {
      return this.$store.state.question.questions
    }
  },
  data: () => ({
    isDialogCreateQuestion: false,
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
    closeDialogCreateQuestion() {
      this.isDialogCreateQuestion = false
    },
    openDialogCreateQuestion() {
      this.isDialogCreateQuestion = true
    },
    async createQuestion(typeQuestion) {
      this.closeDialogCreateQuestion()

      await this.$store.dispatch('question/createQuestion', typeQuestion)
    }
  }
})
</script>

<template>
  <app-loading v-if="isLoadingPage" />
  <div v-else class="content">
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
            @openDialogCreateQuestion="openDialogCreateQuestion"
          />
        </section>
      </div>
    </div>
    <app-dialog
      v-if="isDialogCreateQuestion"
      ref="dialog"
      :max-width="800"
      :value="isDialogCreateQuestion"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogCreateQuestion"
    >
        <template #content>
          <dialog-create-question
            v-click-outside="closeDialogCreateQuestion"
            @closeDialogLoadFile="closeDialogCreateQuestion" 
            @createQuestion="createQuestion"
          />
        </template>
    </app-dialog>
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
      font-size: 15px;
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
