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
  }
  .v-snack__content {
    color: $error-message;
    font-family: 'Montserrat-SemiBold', 'sans-serif';
    background: white;
    border-radius: 8px;

  }
</style>
