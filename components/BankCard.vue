<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    bank: {
      type: Object
    }
  },
  methods: {
    goToDetailBank() {
      this.$router.push(`/banks/${this.bank.id}`)
    },
    deleteCurrentBank() {
      this.$store.dispatch('bank/deleteCurrentBank', this.bank.id)
    }
  }
})
</script>

<template>
  <article class="card-bank">
    <div class="card-bank__content">
      <h3 class="card-bank__title">
        {{ bank.name }}
      </h3>
      <div class="card-bank__body">
        <p class="card-bank__amount-text">
          Зачетных единиц: 
          <span class="card-bank__count">{{ bank.credits }}</span>
        </p>
        <p class="card-bank__amount-text">
          Количество вопросов: 
          <span class="card-bank__count">{{ bank.count_questions }}</span>
        </p>
      </div>
      <div class="card-bank__control">
        <button 
          @click="goToDetailBank()" 
          class="card-bank__control-detail"
        > Подробнее...</button>
        <button 
          @click="deleteCurrentBank()"
          class="card-bank__control-remove"
        >Удалить</button>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
 .card-bank {
    position: relative;
    border-radius: 1em;
    box-shadow: 0 0 25px #a695ff1f;
    @include flex-mix(flex, flex-start, flex-start);
    flex-direction: column;
    overflow: hidden;
    height: auto;
    min-height: 360px;
    transition: all 250ms ease-in-out;
    
    &::before {
      content: '';
      position: absolute;
      top: -10%;
      width: 100%;
      height: 70%;
      // background: linear-gradient(180deg, #1d22af 0%, #2228c7 100%);
      background: linear-gradient(180deg, #1116af 0%, #1f2168 100%);
      transform: skewY(345deg);
    }
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
      padding: 30px;
      @include flex-mix(flex, space-between, flex-start);
      flex-direction: column;
    }
    &__title {
      color: white;
      word-break: break-word;
      height: 75%;
      font-size: 18px;
    }
    &__amount-text {
      color: $light-gray;   
    }
    &__control {
      width: 100%;
      @include flex-mix(flex, space-between);
      font-family: "Montserrat-SemiBold", "sans-serif";
      font-size: 14px;
    }
    &__control-detail {
        color: #2AB1A9;
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