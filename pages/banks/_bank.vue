<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import TabCategories from '@/components/TabCategories'

import AppButton from '@/components/base/AppButton'
import AppTitle from '@/components/base/AppTitle'
import AppLoading from '@/components/base/AppLoading'


export default Vue.extend({
  components: {
    PageHeader,
    AppTitle,
    AppButton,
    TabCategories,
    AppLoading,
    AppDialog: () => (import('@/components/base/AppDialog')),
    DialogCreateSection: () => (import('@/components/dialogs/DialogCreateSection')),
    DialogAddCategory: () => (import('@/components/dialogs/DialogAddCategory')),
  },
  async created() {
    await this.$store.dispatch(
      'bank/getDetailBank', 
      this.$route.params.bank
    )

    await this.getCategoriesOfSection()
  },
  computed: {
    detailBank() {
      return this.$store.state.bank.detailBank
    },
    categories() {
      return this.$store.state.section.categories
    },
    isLoadingPage() {
      return this.$store.state.isLoadingPageBank
    },
    tabSection: {
      get() {
        return this.$store.state.section.tabSection
      },
      set(tab) {
        this.$store.commit('section/SET_TAB_SECTION', tab)
      }
    },
    isCheckDeleteSection() {
      return this.tabSection || !this.detailBank.sections.length <= 0 
        ? true
        : false
    }
  },
  data: () => ({
    isDialogCreateSection: false,
    isDialogAddSection: false,
  }),
  methods: {
    async getCategoriesOfSection() {
      await this.$store.dispatch('section/getCategoriesOfSection')
    },
    changeTitleValue(value) {
      this.$store.commit(
        'bank/SET_NEW_TITLE_BANK', 
        { name: value }
      )
    },
    async accessChangesTitle(value) {
      await this.$store.dispatch(
        'bank/changeTitleBank', 
        { name: value }
      )
    },
    async deleteCurrentSection() {
      await this.$store.dispatch('section/deleteCurrentSection')
    },
    closeDialogCreateSection() {
      this.isDialogCreateSection = false
    },
    openDialogCreateSection() {
      this.isDialogCreateSection = true
    },
    closeDialogAddSection() {
      this.isDialogAddSection = false
    },
    openDialogAddSection() {
      this.isDialogAddSection = true
    },
  }
})
</script>

<template>
  <app-loading v-if="isLoadingPage" />
  <div v-else class="content" >
    <page-header />
    <app-title 
      :title="detailBank.name"
      @changeTitleValue="changeTitleValue"
      @accessChangesTitle="accessChangesTitle"
    />
    <div class="wrapper">
      <div class="section">
        <section  class="section__control">
          <app-button
            @click="openDialogCreateSection"
            class="section__control-create micro" 
            :title="'Создать раздел'" 
          />
          <app-button
            :disabled="detailBank.sections <= 0"
            @click="openDialogAddSection"
            class="section__control-upload micro" 
            :title="'Добавить категорию'"
          />
          <app-button
            v-if="isCheckDeleteSection"
            @click="deleteCurrentSection"
            class="section__control-delete micro" 
            :title="'Удалить раздел'"
          />
        </section>
        <div class="section__header">
          <h3>Входящие разделы</h3>
        </div>
        <section class="section__body" >
          <v-tabs
            v-if="detailBank.sections"
            @change="getCategoriesOfSection"
            v-model="tabSection"
            vertical
            color="basil"
            background-color="#f9faff"
          >
            <v-tabs-slider color="#f9faff" />
            <v-tab
              v-for="(section, index) in detailBank.sections" 
              :key="index"
            >
              {{ section.name }}
            </v-tab>
          </v-tabs>
          <p v-else >Разделы отсутствуют</p>
          <tab-categories
            v-if="detailBank.sections"
            :categories="categories"
            :tab="tabSection" 
          />
        </section>
      </div>
    </div>
    <app-dialog
      v-if="isDialogCreateSection"
      ref="dialog"
      :max-width="600"
      :value="isDialogCreateSection"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogCreateSection"
    >
      <template #content>
        <dialog-create-section
          v-click-outside="closeDialogCreateSection"
          @closeDialogCreateSection="closeDialogCreateSection" 
        />
      </template>
    </app-dialog>
    <app-dialog
      v-if="isDialogAddSection"
      ref="dialog"
      :max-width="880"
      :value="isDialogAddSection"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogAddSection"
    >
      <template #content>
        <dialog-add-category
          v-click-outside="closeDialogAddSection"
          @closeDialogAddSection="closeDialogAddSection" 
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

    &__control {
      width: 100%;
      @include flex-mix(flex, flex-end);
      
      &-create {
        width: 236px;
        background: $backgorund-birch;
      }
      &-upload {
        width: 256px;
        background: $backgorund-birch;
        margin-left: 20px;
      }
      &-delete {
        width: 226px;
        background: $error-message;
        margin-left: 20px;
      }
    }

    &__header {
      margin-top: 30px;
      color: #747474;
      font-size: 18px;
    }
    
    &__body {
      width: 100%;
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
  word-break: break-word;
}
.v-tabs-items {
  background-color: #f9faff;

  &__title {
    margin-bottom: 10px;
  }
}
.v-tabs-slider-wrapper {
  display: none;
  width: 0px;
}
.v-tabs--vertical > .v-tabs-bar .v-tab {
  font-family: 'Montserrat-Medium', 'sans-serif';
  max-width: 250px;
  height: inherit;
  padding: 10px 25px 10px 10px;
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
