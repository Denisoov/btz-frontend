<script>
import Vue from 'vue';

export default Vue.extend({
  components: {
    TitleFormQuestion: () => import('@/components/questions/TitleFormQuestion'),
    SelectTypeQuestion: () => import('@/components/questions/SelectTypeQuestion')
  },
  props: {
    question: {
      type: Object,
      required: true
    },
  },
  methods: {
    setActiveQuestion(question) {
      this.$store.commit(
        'question/SET_ACTIVE_QUESTION', 
        question
      )
    }
  }
})
</script>

<template>
  <div 
    @click="setActiveQuestion(question)" 
    class="type-open"
  >
    <div class="heaader">
      <title-form-question :question="question" />
      <select-type-question  />
    </div>
  </div>
</template>

<style lang="scss">
.type-open {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 6px;
    background-color: $dark-blue;
    border-radius: 15px;

  }
  .heaader {
    @include flex-mix(flex, space-between)
  }
}
</style>