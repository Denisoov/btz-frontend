<script>
import Vue from 'vue'

import AppButton from '@/components/base/AppButton'
export default Vue.extend({
  components: {
    AppButton
  },
  computed: {
    banks() {
      return this.$store.state.bank.banks
    },
    foundBanks() {
      return this.$store.getters['bank/foundBanks']
    },
  },
  methods: {
    openDialogCreateNewBank() {
      this.$emit('openDialogCreateNewBank')
    }
  }
})
</script>

<template>
  <div>
    <section v-if="banks.length === 0" class="control-panel">
      <p class="control-panel__title" >У вас нет ни одного банка. Чтобы создать свой первый банк, нажмите на кнопку ниже</p>
      <app-button
        @click="openDialogCreateNewBank"
        class="control-panel__create mini" 
        :title="'Создать'" 
      />
    </section>
    <section v-if="banks.length !== 0 && foundBanks.length === 0" class="control-panel">
      <p class="control-panel__title" >Ничего не найдено</p>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .control-panel {
    min-height: 500px;
    @include flex-mix(flex);
    flex-direction: column;

    &__title {
      margin-bottom: 20px;
    }
  }
</style>
