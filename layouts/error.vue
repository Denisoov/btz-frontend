<template>
  <div class="page-error">
    <div class="containter">
      <div v-if="error.statusCode === 404" class="containter__not-found">
        <h4>{{ pageNotFound }}</h4>
      </div>
      <div v-else class="containter__error">
        <img 
          class="containter__error-image" 
          :src="ErrorContent"
           alt="Ошибка"
        >
        <h4 class="containter__error-title">Произошла ошибка при загрузке данных</h4>
      </div>
      <v-btn text @click="$router.go(-1)">
        Вернуться
      </v-btn>
    </div>
  </div>
</template>

<script>

import ErrorContent from '@/assets/images/error.png'

export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    pageNotFound: 'Страница не найдена',
    otherError: 'Произошла ошибка',
    ErrorContent
  }),
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.containter {
  width: 100%;
  height: 700px;
  flex-direction: column;
  @include flex-mix(flex);

  &__not-found {
    width: 100%;
    height: initial;
    @include flex-mix(flex);
    margin-bottom: 20px;
  }
  &__error {
    width: 100%;
    height: initial;
    flex-direction: column;
    @include flex-mix(flex);
    margin-bottom: 20px;

    &-title {
      text-align: center;
    }
    &-image {
      width: 216px;
      height: 216px;
    }
  }
}

</style>
