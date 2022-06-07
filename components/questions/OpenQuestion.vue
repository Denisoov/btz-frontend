<script>
import Vue from 'vue'

import CheckBoxFormQuestion from '@/components/questions/CheckBoxFormQuestion'

export default Vue.extend({
  components: {
    CheckBoxFormQuestion,
  },
  computed: {
    opinionsOpenQuestion: {
      get() {
        return this.$store.state.question.activeQuestion.opinions
      },
      set(value) {
        this.$store.commit('question/REWRITE_OPEN_QUESTION_OPINION', 
        {
          index: this.index,
          text: value
        })
    },
    definitionClass() {
      return this.isButton 
        ? 'wrapper-checkbox__button'
        : 'wrapper-checkbox__input'
    },
  },
  methods: {
    searchMaxId() {
      const id = Math.max(
        ...this.opinionsOpenQuestion.map(i => i.id)
      )

      return id + 1
    },
    deleteOpinion(index) {
      this.$store.commit('question/DELETE_OPINION', index)
    },
    addOpinion() {
      this.$store.commit(
        'question/ADD_OPINION_TYPE_OPEN', {
          id: this.searchMaxId,
          opinion: `Новый вариант`,
          check: false,
      })
    }
    }
  }
})
</script>

<template>
  <div class="question-open">
    <div v-for="(opinion, index) in opinionsOpenQuestion" :key="index" class="wrapper-checkbox">
      <input 
        v-model="opinion.opinion"
        class="wrapper-checkbox__checkbox" 
        type="radio"
      >
      <input 
        v-model="opinion.opinion" 
        :class="definitionClass"
        type="text"
        placeholder="Без текста"
      >
      <v-btn 
        v-if="opinionsOpenQuestion > 1"
        @click="deleteOpinion(index)" 
        icon
      >
        <icon-close class="icon-close"/>
      </v-btn>
    </div>
    <button
      v-if="opinionsOpenQuestion.length < 6"
      type="button"
      class="question-open__add"
      @click="addOpinion"
    >
    Добавить вариант
    </button>
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
  &__add {
    height: 24px;
    margin-top: 10px;
    font-family: "Montserrat-Medium", "sans-serif";
    font-size: 14px;
    color: $light-gray;
    cursor: pointer;
    outline: none;
    
    &:hover {
      border-bottom: 1px solid rgba(151, 151, 151, 0.425);
    }
  }
}
.v-list-item__title {
  font-family: 'Montserrat-Regular', 'sans-serif';
}
.wrapper-checkbox {
  @include flex-mix(flex, flex-start);
  margin-bottom: 6px;
  font-family: "Montserrat-Medium", "sans-serif";

  
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
