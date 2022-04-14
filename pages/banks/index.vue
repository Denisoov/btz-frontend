<script>
import Vue from 'vue';

import InfoBlock from '@/components/InfoBlock';
import AppInputSearch from '@/components/base/AppInputSearch';

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
    <section>
      <app-input-search class="content__inp--search" :placeholder="'Наименование банка'" />
    </section>
  </div>
</template>

<style lang="scss"> 
.content {
  &__inp--search {
    margin: 30px 0;
  }
}
</style>