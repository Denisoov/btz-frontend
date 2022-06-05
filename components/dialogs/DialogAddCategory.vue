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
