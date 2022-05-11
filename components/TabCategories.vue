<script>
import Vue from 'vue'

import CategoryCard from '@/components/CategoryCard'

export default Vue.extend({
  props: {
    tab: {
      type: Number
    },
    categories: {
      type: Array
    }
  },
  components: {
    CategoryCard
  },
})
</script>

<template>
  <div class="shell">
    <h3 class="shell__title" >Входящие категории</h3>
    <section
       v-if="categories.length > 0" 
       class="cards-category"
    >
      <category-card 
        v-for="(category, index) in categories" 
        :key="index"
        :category="category"
        :is-tabs="true"
      />
    </section>
    <section v-else class="shell__absence">
      <p class="shell__absence-text" >
        У раздела отсутствуют входящие категории
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .shell {
    position: relative;
    width: 100%;
    @include flex-mix(flex, flex-start, flex-start);
    flex-direction: column;
    margin-left: 10px;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: -10px;
      width: 2px;
      height: 500px;
      background: $small-description;
    }

    &__title {
      margin-bottom: 10px;
    }

    .cards-category {
      display: grid; 
      grid-template-columns: 1fr 1fr;
      width: 100%;
      gap: 20px;
    }

    &__absence {
       &-text {
         color: $light-gray;
       }
    }
  }

</style>