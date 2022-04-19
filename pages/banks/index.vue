<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import InfoBlock from '@/components/InfoBlock'
import AppInputSearch from '@/components/base/AppInputSearch'
import AppButton from '@/components/base/AppButton'
import BankCard from '@/components/BankCard'

export default Vue.extend({
  components: {
    PageHeader,
    InfoBlock,
    AppInputSearch,
    AppButton,
    BankCard,
  },
})
</script>

<template>
  <div class="content">
    <page-header :content-title="'Управление БТЗ'" />
    <!-- <info-block /> -->
    <section class="control-panel">
      <app-input-search
        class="control-panel__search"
        :placeholder="'Поиск по банку'"
      />
      <app-button class="control-panel__create mini" :title="'Создать'" />
      <app-button class="control-panel__upload mini" :title="'Загрузить'" />
    </section>
    <section class="banks">
      <bank-card v-for="i in 9" :key="i" />
    </section>
  </div>
</template>

<style lang="scss">
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
  margin-top: 30px;
}
</style>
