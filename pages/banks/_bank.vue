<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import TabCategories from '@/components/TabCategories'

import IconClose from '@/components/icons/IconClose'

import AppButton from '@/components/base/AppButton'
import AppTitle from '@/components/base/AppTitle'
import AppLoading from '@/components/base/AppLoading'


export default Vue.extend({
  components: {
    PageHeader,
    AppTitle,
    IconClose,
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
    isLoadingPage() {
      return this.$store.state.isLoadingBanks
    },
    tabSection: {
      get() {
        this.$store.state.section.tabSection
      },
      set(tab) {
        this.$store.commit('section/SET_TAB_SECTION', tab)
      }
    },
  },
  data: () => ({
    titleBank: 'Веб-дизайн',
    isDialogCreateNewSection: false,
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
    accessChangesTitle(value) {
      this.$store.dispatch(
        'bank/changeTitleBank', 
        { name: value }
      )
    },
    closeDialogCreateSection() {
      this.isDialogCreateNewSection = false
    },
    openDialogCreateNewSection() {
      this.isDialogCreateNewSection = true
    },
    openDialogAddSection() {
      this.isDialogAddSection = true
    },
    closeDialogAddSection() {
      this.isDialogAddSection = false
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
            @click="openDialogCreateNewSection"
            class="section__control-create micro" 
            :title="'Создать раздел'" 
          />
          <app-button
            @click="openDialogAddSection"
            class="section__control-upload micro" 
            :title="'Добавить категорию'"
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
            :tab="tabSection" 
          />
        </section>
      </div>
    </div>
    <app-dialog
      v-if="isDialogCreateNewSection"
      ref="dialog"
      :max-width="600"
      :value="isDialogCreateNewSection"
      v-bind="$attrs"
      v-on="$listeners"
    >
        <template #content>
          <dialog-create-section
            v-click-outside="closeDialogCreateSection"
            @closeDialogLoadFile="closeDialogCreateSection" 
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
    >
        <template #content>
          <dialog-add-category
            v-click-outside="closeDialogAddSection"
            @closeDialogLoadFile="closeDialogAddSection" 
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
        background: $background-button-red;
      }
      &-upload {
        width: 256px;
        background: $backgorund-birch;
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
