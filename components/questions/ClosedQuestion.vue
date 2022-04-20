<script>
import Vue from 'vue'

export default Vue.extend({
})
</script>

<template>
  <div class="question-closed">закрытый вопрос</div>
</template>

<style closed lang="scss">
.question-closed {
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
}
</style>
