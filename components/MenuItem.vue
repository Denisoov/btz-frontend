<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    menuItem: {
      required: true,
    },
  },
  methods: {
    goToPage(link) {
      this.$nuxt.$router.push(String(link))
    },
  },
})
</script>

<template>
  <section @click="goToPage(menuItem.link)" class="card-item">
    <h3 class="card-item__title">{{ menuItem.title }}</h3>
    <p class="card-item__description">
      {{ menuItem.description }}
    </p>
  </section>
</template>

<style lang="scss">
.card-item {
  width: 300px;
  height: inherit;
  min-height: 152px;
  border-radius: 15px;
  padding: 30px;
  border: 1px solid #e7e7e7;
  user-select: none;
  
  @include transition-easy(0.16s);
  transition: background-color 250ms;

  &:hover {
    cursor: pointer;
    background-color: $dark-blue;
    transition: background-color 250ms;

    .card-item__title, 
    .card-item__description {
      color: $white;
    }
  }

  &__title {
    color: $small-title;
    margin-bottom: 15px;
  }
  &__description {
    color: $small-description;
  }

}
</style>
