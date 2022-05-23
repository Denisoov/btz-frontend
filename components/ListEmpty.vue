<script>
import Vue from 'vue'

import AppButton from '@/components/base/AppButton'

export default Vue.extend({
  props: {
    list: {
      type: Array
    },
    searchList: {
      type: Array
    },
    status: {
      type: String
    }
  },
  components: {
    AppButton
  },
  methods: {
    openDialog() {
      this.$emit('openDialogCreate')
    }
  },
  data: () => ({
    listStatuses: {
      emptyListBanks: 'У вас нет ни одного банка. Чтобы создать свой первый банк, нажмите на кнопку ниже',
      emptyListCategories: 'У вас нет категорий. Чтобы создать категорию, нажмите на кнопку ниже',
      notFound: 'Ничего не найдено'
    }
  })
})
</script>

<template>
  <div>
      <section v-if="list.length === 0" class="empty">
    <p class="empty__title" >{{ listStatuses[this.status] }}</p>
    <app-button
      @click="openDialog"
      class="empty__create mini" 
      :title="'Создать'" 
    />
  </section>
  <section v-if="list.length !== 0 && searchList.length === 0" class="empty">
    <p class="empty__title" >Ничего не найдено</p>
  </section>
  </div>
</template>

<style scoped lang="scss">
  .empty {
    min-height: 700px;
    @include flex-mix(flex);
    flex-direction: column;

    &__create {
      background: $background-button-red;
    }
    &__title {
      margin-bottom: 20px;
    }
  }
</style>
