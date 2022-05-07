<script>
import Vue from 'vue'


export default Vue.extend({
  components: {
    AppButton: () => import('@/components/base/AppButton.vue'),
  },
  methods: {
    addCategoryInSection() {
      console.log(this.freeCategories[0][this.selectCategory])
    },
  },
  computed: {
    freeCategories() {
      return this.$store.state.section.freeCategories
    }
  },
  data: () => ({ selectCategory: null }),
  async mounted() {
    await this.$store.dispatch('section/getFreeCategories')
  }
})
</script>

<template>
  <div>
    <h3>Добавление категории в раздел</h3>
    <v-slide-group
      v-model="selectCategory"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="(category, index) in freeCategories[0]"
        :key="index"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? '#681bff' : '#727272'"
          class="ma-2"
          @click="toggle"
        >
          <div class="v-card__content">
            {{ category.name }}
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <div class="control-buttons">
      <app-button 
        :title="'Добавить'" 
        @click="addCategoryInSection"
        class="add mini" 
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-input {
    width: 100%;
    max-width: 100%;
}
.v-card {
  height: 120px;
  width: 160px;
  @include flex-mix(flex);
  text-align: center;
  padding: 10px;

  &__content {
    color: white;
  }
}
.control-buttons {
  @include flex-mix(flex, flex-end)
}
.add {
  background: $backgorund-birch;
}
</style>
