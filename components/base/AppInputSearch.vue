<script>
import Vue from 'vue'

export default Vue.extend({
  props: ['typeSearch'],
  computed: {
    searchBank: {
      get() {
        return this.$store.state.bank[this.typeSearch]
      },
      set(value) {
        this.$store.commit('bank/SET_NEW_SEARCH', value)
      }
    }
  }
})
</script>

<template>
  <input 
    v-model="searchBank" 
    class="search" 
    type="text"
  >
</template>

<style lang="scss" scoped>
  .search {
    padding: 12px;
    border-radius: 15px;
    border-radius: 7px;
    height: 50px;
    width: 770px;
    font-size: 16px;
    background-color: #ebf0ff;
    border: none;
    outline: none;
    padding: 0 15px 2px 20px;
    font-family: "Montserrat-Medium", "sans-serif";
  }
</style>