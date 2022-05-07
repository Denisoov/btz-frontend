<script>
import Vue from 'vue'

import IconClose from '@/components/icons/IconClose'

export default Vue.extend({
  props: {
    tab: {
      type: Number
    }
  },
  components: {
    IconClose
  },
  computed: {
    categories() {
      return this.$store.state.section.categories
    }
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
      <article 
        v-for="(category, index) in categories" 
        class="card-category"
        :key="index"
      >
        <h4 class="card-category__title" >{{ category.name }}</h4>
        <p class="card-category__description">Вопросов:
          <span class="card-category__description-amount">{{ category.count_questions }}</span>
        </p>
        <icon-close 
          :color="'#ff2e2e'" 
          class="card-category__close" 
        />
      </article>
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
  .card-category {
    position: relative;
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 10px;
    background-color: white;
    box-shadow: 0px 4px 4px rgb(149 149 149 / 22%);

    &__title {
      text-decoration: underline #000;
      cursor: pointer;
    }
    &__close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 28px;
      height: 28px;
    }

    &__description {
      color: $light-gray;
      &-amount {
        font-weight: 600;
      }
    }
  }
</style>