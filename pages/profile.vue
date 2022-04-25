<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import CardProfile from '@/components/CardProfile'

export default Vue.extend({
  components: {
    PageHeader,
    CardProfile
  },
  async asyncData({ store }) {
    try {
      const data  = await store.dispatch('user/fetchUserInfo')

      const { user } = data
      return { user }
    } catch (error) {
      console.log(error)
    }
  },
})
</script>

<template>
  <div class="content">
    <page-header :content-title="'Мой профиль'" />
    <card-profile :user="user" />
  </div>
</template>

<style scoped lang="scss">
</style>
