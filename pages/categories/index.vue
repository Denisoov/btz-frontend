<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'
import InfoBlock from '@/components/InfoBlock'
import AppInputSearch from '@/components/base/AppInputSearch'
import AppButton from '@/components/base/AppButton'
import ListQuestions from '@/components/ListQuestions'

export default Vue.extend({
  
  components: {
    PageHeader,
    InfoBlock,
    AppInputSearch,
    AppButton,
    ListQuestions,
    AppDialog: () => (import('@/components/base/AppDialog')),
    DialogCreateCategory: () => (import('@/components/dialogs/DialogCreateCategory')),
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
    questions() {
      return this.$store.state.question.questions
    },
  },
  data: () => ({
    isDialogCreateCategory: false,
  })
})
</script>

<template>
  <div class="content">
    <page-header :content-title="'Категории'" />
    <info-block />
    <app-dialog
      v-if="isDialogCreateCategory"
      ref="dialog"
      :max-width="'680'"
      :value="isDialogCreateCategory"
      v-bind="$attrs"
      v-on="$listeners"
    >
        <template #content>
          <dialog-create-category
            v-click-outside="closeDialog"
            @closeDialog="closeDialog" 
          />
        </template>
    </app-dialog>
    <section class="control-panel">
      <app-input-search
        class="control-panel__search"
        :placeholder="'Поиск по категориям'"
      />
      <app-button 
        class="control-panel__create mini" 
        :title="'Создать'"
        @click="openDialogCreateCategory"
      />
    </section>
    <list-questions :questions="questions" />
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
</style>
