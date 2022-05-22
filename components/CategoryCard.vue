<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    category: {
      type: Object
    },
    isTabs: {
      type: Boolean
    }
  },
  methods: {
    goToDetailCategory() {
      this.$router.push(`/categories/${this.category.id}`)
    },
    deleteCurrentCategory() {
      this.isTabs 
        ? this.$store.dispatch('section/removeCategoryInSection', this.category.id)
        : this.$store.dispatch('category/deleteCurrentCategory', this.category.id)
    }
  }
})
</script>

<template>
  <article class="card-category">
    <div class="card-category__content">
      <h3 class="card-category__title">{{ category.name }}</h3>
      <div class="card-category__body">
        <p class="card-category__amount-text">
          Количество вопросов:
          <span class="card-category__count">{{ category.count_questions }}</span>
        </p>
      </div>
      <div class="card-category__control">
        <button 
          v-if="!isTabs"
          @click="goToDetailCategory()" 
          class="card-category__control-detail"
        > Подробнее...</button>
        <button 
          @click="deleteCurrentCategory()"
          class="card-category__control-remove"
        > {{ isTabs ? 'Удалить из раздела' : 'Удалить' }} </button>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card-category {
  position: relative;
  border-radius: 1em;
  box-shadow: 0 0 25px #a695ff1f;
  @include flex-mix(flex, flex-start, flex-start);
  flex-direction: column;
  overflow: hidden;
  height: auto;
  min-height: 160px;
  height: inherit;
  transition: all 250ms ease-in-out;
  line-height: 1.1;

  &:hover {
    box-shadow: 4px 4px 25px #a695ff1f;
    background-color: #ffffff96;
    transform: translateY(-10px);
    transition: all 250ms ease-in-out;
  }
  &__content {
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 20px;
  }
  &__body {
    height: 20px;
    margin: 20px 0;
  }
  &__title {
    height: initial;
    color: $small-title;
    font-size: 18px;
  }
  &__amount-text {
    color: $light-gray;
  }
  &__control {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    height: 20px; 
    @include flex-mix(flex, space-around);
    font-family: 'Montserrat-SemiBold', 'sans-serif';
    font-size: 14px;
    transition: all 150ms ease-in-out;

  }
  &__control-detail {
    color: #2ab1a9;
    margin-right: 30px;
  }
  &__control-remove {
    background-clip: text;
    background: $background-button-red;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
