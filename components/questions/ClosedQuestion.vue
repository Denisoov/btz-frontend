<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    answersQuestion() {
      return this.$store.state.question.activeQuestion.answer
    }
  }
})
</script>

<template>
  <div class="question-closed">
    <div class="card-answer">
      <p v-if="answersQuestion" class="card-answer__body" >
        Ответ: 
        <p 
          v-for="(answer, index) in answersQuestion" 
          :key="index" 
          class="card-answer__text"
        >
        {{answer}} 
        </p>
      </p>
    </div>

    <div class="card-description">
      <p class="card-description__text" >
        Ответом является - слова, которые нужно обернуть в
        <span class="card-description__symbol">
          { }
        </span>
      </p>
      <p class="card-description__example-text">
        Например: Машина это -
        <span class="card-description__symbol">{ </span>
        автомобиль, транспорт
        <span class="card-description__symbol"> }</span>
      </p>
    </div>
  </div>
</template>

<style closed lang="scss">
.question-closed {

  @include flex-mix(flex, space-between, flex-start);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 6px;
    background-color: #f3467e;
    border-radius: 15px;
  }

  .card-description {
    text-align: right;
    color: $light-gray;

    &__text {
      font-size: 14px;
    }
    &__example-text {
      font-size: 14px;
    }
    &__symbol {
      font-size: 16px;
      color: #f3467e;
    }
  }

  .card-answer {
    @include flex-mix(flex, flex-start, flex-start);

    &__body {
      margin-right: 4px;
    }

    &__text {
      margin-right: 4px;
    }
  }
}
</style>
