<script>
import Vue from 'vue';

import InfoBlock from '@/components/InfoBlock';
import AppInputSearch from '@/components/base/AppInputSearch';
import AppButton from '@/components/base/AppButton';

export default Vue.extend({
  components: {
    InfoBlock,
    AppInputSearch,
    AppButton
  }
})
</script>

<template>
  <div class="content">
    <h2>Управление БТЗ</h2>
    <info-block />
    <section class="control-panel">
      <app-input-search 
        class="control-panel__search" 
        :placeholder="'Наименование банка'" 
      />
      <app-button 
        class="control-panel__create mini" 
        :title="'Создать'" 
      />
      <app-button 
        class="control-panel__upload mini" 
        :title="'Загрузить'" 
      />
    </section>
    <section class="wrapper__list-banks">

    </section>

  </div>
</template>

<style lang="scss"> 
.control-panel {
  @include flex-mix(flex, space-between);
  margin-top: 30px;

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
.wrapper__list-banks {

}
</style>