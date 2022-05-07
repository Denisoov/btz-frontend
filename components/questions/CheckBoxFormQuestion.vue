<script>
import Vue from 'vue'

import IconClose from '@/components/icons/IconClose'

export default Vue.extend({
  components: {
    IconClose
  },
  props: {
    opinion: {
      type: Object | String
    },
    index: {
      type: Number
    }
  },
  data: () => ({ isCheked: true }),
  computed: {
    isChekedOpinions() {
      return this.$store.question.activeQuestion.answer
    },
    opinionQuestion: {
      get() {
        return this.opinion
      },
      set(value) {
        this.$store.commit('question/REWRITE_OPEN_QUESTION_OPINION', 
        {
          index: this.index,
          text: value
        })
      }
    }
  },
})
</script>

<template>
  <div class="wrapper-checkbox">
    <input 
      v-model="isCheked"
      class="wrapper-checkbox__checkbox" 
      type="checkbox"
    >
    <input 
      v-model="opinionQuestion" 
      class="wrapper-checkbox__input" 
      type="text"
    >
    <v-btn icon>
      <icon-close class="icon-close" />
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
.v-list-item__title {
  font-family: 'Montserrat-Regular', 'sans-serif';
}
.wrapper-checkbox {
  @include flex-mix(flex, flex-start);
    margin-bottom: 6px;
  
  &:hover &__input {
    border-bottom: 1px solid rgba(23, 27, 148, 0.425);
  }

  &__checkbox {
    margin-right: 10px;
  }
  &__input {
    width: 40%;
    height: 30px;
    font-size: 14px;
    outline: none;
    padding: 2px 0 0 5px;
    font-family: "Montserrat-Medium", "sans-serif";

    &:focus {
      border-bottom: 2px solid #414394;
    }
  }
  .v-btn {
    margin-left: 10px;
  }
  .icon-close {
    width: 24px;
    height: 24px;
  }
}
</style>
