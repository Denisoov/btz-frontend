<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import TableBanksUnload from '@/components/TableBanksUnload'

export default Vue.extend({
  async created() {
    await this.$store.dispatch('bank/fetchStatisticBanks')
  },
  components: {
    PageHeader,
    TableBanksUnload,
    AppLoading: () => import('@/components/base/AppLoading.vue'),
    AppDialog: () => (import('@/components/base/AppDialog')),
    DialogUnloadBank: () => (import('@/components/dialogs/DialogUnloadBank')),
    DialogUnloadPassport: () => (import('@/components/dialogs/DialogUnloadPassport'))
  },
  computed: {
    isLoadingPageUnloading() {
      return this.$store.state.isLoadingPageUnloading
    },
  },
  data: () => ({
    isDialogUnloadBank: false,
    isDialogUnloadPassport: false,
    idBank: null,
  }),
  methods: {
    closeDialogUnloadBank() {
      this.isDialogUnloadBank = false
    },
    openDialogUnloadBank(idBank) {
      this.idBank = idBank
      this.isDialogUnloadBank = true;
    },
    openDialogPassport(idBank) {
      this.idBank = idBank
      this.isDialogUnloadPassport = true
    },
    closeDialogUnloadPassport() {
      this.isDialogUnloadPassport = false
    },
  }
})
</script>

<template>
  <app-loading v-if="isLoadingPageUnloading" />
  <div v-else class="content">
    <page-header :content-title="'Выгрузка БТЗ'" />
    <table-banks-unload 
      @openDialogUnloadBank="openDialogUnloadBank" 
      @openDialogPassport="openDialogPassport"
    />
    <app-dialog
      persistent
      v-if="isDialogUnloadBank"
      ref="dialog"
      :max-width="388"
      :value="isDialogUnloadBank"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template #content>
        <dialog-unload-bank
          :id-bank="idBank"
          @closeDialogUnloadBank="closeDialogUnloadBank" 
        />
      </template>
    </app-dialog>
    <app-dialog
      v-if="isDialogUnloadPassport"
      ref="dialog"
      :max-width="600"
      :value="isDialogUnloadPassport"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialogUnloadPassport"
    >
      <template #content>
        <dialog-unload-passport
          :id-bank="idBank"
          @closeDialogUnloadPassport="closeDialogUnloadPassport" 
        />
      </template>
    </app-dialog>
  </div>
</template>
