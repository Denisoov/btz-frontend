<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    question: {
      type: Object
    }
  },
  methods: {
    resize() {
      let textarea = this.$refs["textarea"];

      textarea.style.minHeight = "46px";
      textarea.style.minHeight = textarea.scrollHeight + "px";
    }
  },
  mounted() {
    if (this.active) {
      this.$refs["textarea"].focus()
    }
  }
})
</script>

<template>
  <textarea
    class="title-question" 
    placeholder="Вопрос без заголовка" 
    @input="resize()"
    ref="textarea"
  ></textarea>
</template>

<style scoped lang="scss">
  .title-question {

    width: 50%;
    font-family: 'Montserrat-SemiBold', 'sans-serif';
    resize: none;
    height: inherit;

    outline: none;
    padding: 6px 10px;
    background-color: #ebf0ff;
    border-bottom: 2px solid #000;
    overflow-y: hidden;
    transition: all 50ms ease-in-out;
  }
</style>