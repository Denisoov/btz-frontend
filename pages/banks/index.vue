<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import BankCard from '@/components/BankCard'

import AppContentPage from '@/components/base/AppContentPage'
import AppInputSearch from '@/components/base/AppInputSearch'
import AppButton from '@/components/base/AppButton'

export default Vue.extend({
  layout: 'default',
  components: {
    AppContentPage,
    PageHeader,
    AppInputSearch,
    AppButton,
    BankCard,
    AppDialog: () => (import('@/components/base/AppDialog')),
    DialogCreateBank: () => (import('@/components/dialogs/DialogCreateBank')),
    DialogLoadFile: () => (import('@/components/dialogs/DialogLoadFile')),
  },
  async asyncData({ store }) {
    try {
      await store.dispatch('bank/fetchAllBanks')

    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    getContentStatus() {
      return this.$store.state.contentStatusBanks
    },
    banks() {
      return this.$store.state.bank.banks
    },
    foundBanks() {
      return this.$store.getters['bank/foundBanks']
    },
    checkAvailibleBanks() {
      if (this.banks.length !== 0 && this.foundBanks.length !== 0) return true
      else return false
    },
  },
  data: () => ({
    isDialogCreateNewBank: false,
    isDialogLoadFile: false,
    emptyListBanks: 'У вас нет ни одного банка. Чтобы создать банк, нажмите на кнопку ниже',
  }),
  methods: {
    closeDialog() {
      this.isDialogCreateNewBank = false
    },
    openDialogCreateNewBank() {
      this.isDialogCreateNewBank = true
    },
    closeDialogLoadFile() {
      this.isDialogLoadFile = false
    },
    openDialogLoadFile() {
      this.isDialogLoadFile = true
    }
  },
})
</script>

<template>
  <div class="content" >
    <page-header :content-title="'Управление БТЗ'" />
    <app-content-page 
      :page="'banks'"
      :empty-text="emptyListBanks" 
      :status="getContentStatus"
      @openDialog="openDialogCreateNewBank"
    >
      <template #content>
        <section v-if="banks.length !== 0" class="control-panel">
          <app-input-search
            class="control-panel__search"
            :placeholder="'Поиск по банку'"
            :type-search="'bank'"
          />
          <app-button
            @click="openDialogCreateNewBank"
            class="control-panel__create mini" 
            :title="'Создать'" 
          />
          <app-button
            :disabled="false"
            @click="openDialogLoadFile"
            class="control-panel__upload mini" 
            :title="'Загрузить'"
          />
        </section>
        <section v-if="checkAvailibleBanks" class="banks">
          <bank-card 
            v-for="(bank, index) in foundBanks" 
            :key="index"
            :bank="bank"
          />
        </section>
      </template>
      <template #empty />
    </app-content-page>
    <app-dialog
      v-if="isDialogCreateNewBank"
      ref="dialog"
      :max-width="600"
      :value="isDialogCreateNewBank"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialog"
    >
      <template #content>
        <dialog-create-bank
          v-click-outside="closeDialog"
          @closeDialog="closeDialog" 
        />
      </template>
    </app-dialog>
    <app-dialog
      v-if="isDialogLoadFile"
      ref="dialog"
      :max-width="600"
      :value="isDialogLoadFile"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogLoadFile"
    >
        <template #content>
          <dialog-load-file
            v-click-outside="closeDialogLoadFile"
            @closeDialogLoadFile="closeDialogLoadFile" 
          />
        </template>
    </app-dialog>
  </div>
</template>

<style scoped lang="scss">
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
  grid-template-columns: repeat(4, 270px);
  grid-template-rows: auto;
  gap: 20px 20px;
  margin-top: 30px;
}
</style>
