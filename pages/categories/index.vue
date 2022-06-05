<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import CategoryCard from '@/components/CategoryCard.vue'

import AppContentPage from '@/components/base/AppContentPage'
import AppInputSearch from '@/components/base/AppInputSearch'
import AppButton from '@/components/base/AppButton'

export default Vue.extend({
  
  components: {
    PageHeader,
    CategoryCard,
    AppContentPage,
    AppInputSearch,
    AppButton,
    AppDialog: () => (import('@/components/base/AppDialog')),
    DialogCreateCategory: () => (import('@/components/dialogs/DialogCreateCategory')),
  },
  async asyncData({ store }) {
    try {
      await store.dispatch('category/fetchAllCategories')

    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    closeDialog() {
      this.isDialogCreateCategory = false
    },
    openDialogCreateCategory() {
      this.isDialogCreateCategory = true
    }
  },
  computed: {
    getContentStatus() {
      return this.$store.state.contentStatusCategories
    },
    categories() {
      return this.$store.state.category.categories
    },
    foundCategories() {
      return this.$store.getters['category/foundCategories']
    },
    checkAvailibleCategories() {
      if (this.categories.length !== 0 && this.foundCategories.length !== 0) return true
      else return false
    },
  },
  data: () => ({
    isDialogCreateCategory: false,
    emptyListCategories: 'У вас нет категорий. Чтобы создать категорию, нажмите на кнопку ниже',
  })
})
</script>

<template>
  <div class="content">
    <page-header :content-title="'Категории'" />
    <app-content-page
      :page="'categories'"       
      :empty-text="emptyListCategories" 
      :status="getContentStatus"
      @openDialog="openDialogCreateCategory"
    >
      <template #content>
        <section v-if="categories.length !== 0" class="control-panel">
          <app-input-search
            class="control-panel__search"
            :placeholder="'Поиск по категориям'"
            :type-search="'category'"
          />
          <app-button 
            class="control-panel__create mini" 
            :title="'Создать'"
            @click="openDialogCreateCategory"
          />
        </section>
        <section 
          v-if="checkAvailibleCategories"
          class="categories"
        >
          <category-card 
            v-for="(category, index) in foundCategories"
            :key="index"
            :category="category"
          />
        </section>
      </template>
    </app-content-page>
    <app-dialog
      v-if="isDialogCreateCategory"
      ref="dialog"
      :max-width="600"
      :value="isDialogCreateCategory"
      v-bind="$attrs"
      v-on="$listeners"
      @input="closeDialog"
    >
      <template #content>
        <dialog-create-category
          v-click-outside="closeDialog"
          @closeDialog="closeDialog" 
        />
      </template>
    </app-dialog>
  </div>
</template>

<style scoped lang="scss">
.content {
  &__header {
    position: relative;
    @include flex-mix(flex, flex-start);
  }
}
.control-panel {
  @include flex-mix(flex, flex-start);
  margin-top: 60px;

  &__search {
    margin: 30px 30px 30px 0;
  }
  &__create {
    background: $background-button-red;
  }
  &__upload {
    background: $backgorund-birch;
  }
}

.categories {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-template-rows: auto;
  gap: 20px 20px;
  margin-top: 30px;
}
</style>
