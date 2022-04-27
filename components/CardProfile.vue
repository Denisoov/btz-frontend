<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    user: {
      type: Object
    },
  },
  computed: {
    nameUser() {
      return `${this.user.last_name} ${this.user.first_name} ${this.user.patronymic}`
    }
  }
})
</script>

<template>
  <div class="card-profile">
    <h3 class="card-profile__name">{{ nameUser }}</h3>
    <div class="card-profile__email">
      Почта:
      <span>{{ user.email }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-profile {
  width: 100%;
  height: 150px;
  padding: 30px;
  margin-top: 30px;
  background: white;
  border-radius: 25px;
  box-shadow: 4px 4px 25px #a695ff1f;

  &__name {
    margin-bottom: 20px;
  }
  &__email {
    font-family: "Montserrat-Regular", "sans-serif";
  }
}
</style>
