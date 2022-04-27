<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import AppTitle from '@/components/base/AppTitle'

export default Vue.extend({
  components: {
    PageHeader,
    AppTitle
  },
  async asyncData({ store, query, req, res, route}) {
    try {
      if (route.params.bank) {
        await this.$store.dispatch('bank/getDetailBank', route.params.bank)
      }
    } catch (error) {
      
    }
  },
  data: () => ({
    titleBank: 'Веб-дизайн'
  }),
  methods: {
    changeTitleValue(value) {
      this.$store.dispatch('bank/changeDataBank')
    }
  }
})
</script>

<template>
  <div class="content" >
    <page-header />
    <app-title 
      :title="titleBank"
      @changeTitleValue="changeTitleValue"
      />
  </div>
</template>

<style scoped lang="scss">

</style>
