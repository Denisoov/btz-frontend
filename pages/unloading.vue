<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import TableBanksUnload from '@/components/TableBanksUnload'

export default Vue.extend({
  components: {
    PageHeader,
    TableBanksUnload,
    AppDialog: () => (import('@/components/base/AppDialog'))
  }
})
</script>

<template>
  <div class="content">
    <page-header :content-title="'Выгрузка БТЗ'" />
    <table-banks-unload  />
  </div>
</template>

<style closed lang="scss"></style>
