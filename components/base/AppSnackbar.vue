<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    snackbar() {
      return this.$store.state.snackbar
    },
    isShowSnackbar: {
      get() {
        return this.$store.state.snackbar.isShowSnackbar
      },
      set() {
        this.$store.commit('CLOSE_SNACKBAR')
      }
    }
  }
})
</script>

<template>
  <v-snackbar
    :timeout="1500"
    absolute
    v-model="isShowSnackbar"
    top
  >
  {{ snackbar.message }}
  </v-snackbar>
</template>

<style lang="scss">
  .v-sheet.v-snack__wrapper {
      border-radius: 12px;
      background: white;
  }
  .v-snack__content {
    color: #383838;
    font-family: "Montserrat-SemiBold", "sans-serif";
    background: #f9faff;
    border-radius: 8px;
  }
  .theme--dark.v-sheet {
    background-color: none;
  }
</style>
