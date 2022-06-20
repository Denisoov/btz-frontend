<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    AppLoading: () => import('@/components/base/AppLoading.vue'),
    AppButton: () => import('@/components/base/AppButton.vue'),
  },
  methods: {
    async addCategoryInSection() {
      const { id } = await this.freeCategories[this.selectCategory]

      await this.$store.dispatch('section/addCategoryInSection', id)

      this.$emit('closeDialogAddSection')
    },
  },
  computed: {
    freeCategories() {
      return this.$store.state.section.freeCategories
    },
  },
  data: () => ({ 
    selectCategory: null,
    isLoadingFreeCategory: false,
  }),
  async mounted() {
    this.isLoadingFreeCategory = true
    await this.$store.dispatch('section/getFreeCategories')
    this.isLoadingFreeCategory = false
  }
})
</script>

<template>
  <app-loading :min-height="246" v-if="isLoadingFreeCategory" />
  <div v-else>
    <h3 class="dialog__title">Добавление категории в раздел</h3>
     <v-chip-group
      v-if="freeCategories.length >= 1"
      v-model="selectCategory"
      active-class="chip-active"
      column
    >
      <v-chip
        v-for="(category, index) in freeCategories"
        :key="index"
      >
        {{ category.name }}
      </v-chip>
    </v-chip-group>
    <div v-else class="dialog__no-match">
      Для этого раздела нет свободных категорий.
      <br>
      Создайте новую категорию перейдя по <nuxt-link to="/categories">ссылке</nuxt-link>
    </div>
    <div class="control-buttons">
      <app-button
        :disabled="typeof selectCategory !== 'number'"
        :title="'Добавить'" 
        @click="addCategoryInSection"
        class="add mini" 
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog {
  &__title {
    margin-bottom: 10px;
  }
  &__no-match {
    color: $light-gray;
    font-family: "Montserrat-Regular";
  }
}
.chip-active {
  color: white;
  background: $backgorund-birch;
}
.control-buttons {
  @include flex-mix(flex, flex-end)
}
.add {
  background: $backgorund-birch;
}
</style>
