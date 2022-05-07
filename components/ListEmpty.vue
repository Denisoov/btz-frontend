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
    }
  },
  components: {
    AppButton
  },
  methods: {
    openDialog() {
      this.$emit('openDialogCreateNewBank')
    }
  }
})
</script>

<template>
  <div>
    <section v-if="list.length === 0" class="empty">
      <p class="empty__title" >У вас нет ни одного банка. Чтобы создать свой первый банк, нажмите на кнопку ниже</p>
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
    min-height: 500px;
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
