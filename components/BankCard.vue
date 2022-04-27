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
    <h3 class="card-bank__title">
      {{ bank.name }}
    </h3>
    <div class="card-bank__body">
      <p class="card-bank__amount-text">Количество вопросов: 
        <span class="card-bank__count">67</span>
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
  </article>
</template>

<style scoped lang="scss">
 .card-bank {
    padding: 20px;
    border-radius: 1em;
    border: 2px solid #d3dffd;
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: auto 0.6fr 0.2fr; 

    &:hover {
      box-shadow: 4px 4px 25px #a695ff1f;
      background-color: #ffffff96;
      transition:  .3s ease;
    }
    &__title {
      margin-bottom: 10px;
      font-size: 18px;
    }
    &__amount-text {
      color: $light-gray;
      font-size: 14px;
    }
    &__control {
      @include flex-mix(flex, flex-end);
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