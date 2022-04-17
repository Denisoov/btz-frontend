<script>
import Vue from 'vue';

export default Vue.extend({
  methods: {
    goToDetailBank() {
      alert('hello')
    }
  }
})
</script>

<template>
  <div class="card-bank">
    <h3 class="card-bank__title">
      Разработка программного обеспечения по решению государственных задач
    </h3>
    <div class="card-bank__body">
      <p class="card-bank__amount-text">Количество вопросов: 
        <span class="card-bank__count">67</span>
      </p>
    </div>
    <div class="card-bank-control">
      <button @click="goToDetailBank()" class="card-bank-control__detail">Подробнее...</button>
      <button class="card-bank-control__remove">Удалить</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
 .card-bank {
    position: relative;
    width: 100%;
    height: 150px;
    padding: 15px 30px 0 15px;
    background: none;
    border-radius: 1em;
    border: 2px solid #d3dffd;
    transition: box-shadow 250ms ease-in-out;

    &:hover {
      box-shadow: 4px 4px 25px #a695ff1f;
      border: none;
      background-color: #ffffff96;
      transition: all 250ms ease-in-out;
      transform: scale(1.03);
    }

    &__title {
      margin-bottom: 20px;
      font-size: 16px;
    }

    &__amount-text {
      color: $light-gray;
      font-size: 14px;
    }

    &-control {
      @include flex-mix(flex, flex-end);
      font-family: "Montserrat-SemiBold", "sans-serif";
      font-size: 14px;

      &__detail {
        margin-right: 30px;
        color: #2AB1A9;
      }

      &__remove {
        background: $background-button-red;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

  }
</style>