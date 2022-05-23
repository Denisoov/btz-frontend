<script>
import Vue from 'vue'

import { ContentStatuses } from '@/helpers/content-statuses'

import AppLoading from '@/components/base/AppLoading'
import AppButton from '@/components/base/AppButton'

import ListEmpty from '@/components/ListEmpty'

import ErrorContent from '@/assets/images/error.png'

export default Vue.extend({
  components: {
    AppLoading,
    AppButton,
    ListEmpty
  },
  props: {
    status: {
      type: String,
      required: true,
    },
    emptyText: {
      type: String,
    },
  },
  data: () => ({
    ContentStatuses,
    ErrorContent
  }),
  methods: {
    openDialog() {
      this.$emit('openDialogCreateNewBank')
    }
  },
})
</script>

<template>
  <section>
    <slot v-if="status === ContentStatuses.Loading" name="loading">
      <app-loading />
    </slot>
    <slot v-else-if="status === ContentStatuses.Ready" name="content" />
    <slot v-else-if="status === ContentStatuses.Error" name="error">
      <div class="slot-error">
        <img 
          class="slot-error__image" 
          :src="ErrorContent"
           alt="Ошибка"
        >
        <h4 class="slot-error__title">Произошла ошибка при загрузке данных</h4>
      </div>
    </slot>
    <slot v-else-if="status === ContentStatuses.Empty" name="empty">
      <div class="slot-empty">
        <p class="slot-empty__title" >{{ emptyText }}</p>
        <app-button
          @click="openDialog"
          class="slot-empty__create mini" 
          :title="'Создать'" 
        />
      </div>
    </slot>
  </section>
</template>

<style lang="scss" scoped>
  .slot-error {
    width: 100%;
    height: 740px;
    flex-direction: column;
    @include flex-mix(flex);

    &__title {
      text-align: center;
    }
    &__image {
      width: 216px;
      height: 216px;
    }
  }
  .slot-empty {
    min-height: 700px;
    @include flex-mix(flex);
    flex-direction: column;

    &__create {
      background: $background-button-red;
    }
    &__title {
      margin-bottom: 20px;
    }
  }
</style>