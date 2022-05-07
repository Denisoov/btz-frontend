<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    CheckBoxFormQuestion: () => import('@/components/questions/CheckBoxFormQuestion'),
  },
  computed: {
    opinionsOpenQuestion() {
      return this.$store.state.question.activeQuestion.opinions
    }
  }
})
</script>

<template>
  <div class="question-open">
    <check-box-form-question
      v-for="(opinion, index) in opinionsOpenQuestion"
      :key="index"
      :opinion="opinion.opinion"
      :index="index"
    />
    <!-- <check-box-form-question
      :opinion="'Добавить вариант'"
    /> -->
  </div>
</template>

<style lang="scss">
.question-open {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 6px;
    background-color: #45cdec;
    border-radius: 15px;
  }
}
</style>
