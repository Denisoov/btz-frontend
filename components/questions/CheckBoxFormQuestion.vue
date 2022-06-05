<script>
import Vue from 'vue'

import IconClose from '@/components/icons/IconClose'

export default Vue.extend({
  components: {
    IconClose,
  },
  props: {
    opinion: {
      type: Object | String
    },
    index: {
      type: Number
    },
    lengthOpinions: {
      type: Number,
    }
  },
  data: () => ({ isCheked: true }),
  computed: {
    definitionClass() {
      return this.isButton 
        ? 'wrapper-checkbox__button'
        : 'wrapper-checkbox__input'
    },
    opinionQuestion: {
      get() {
        return this.opinion
      },
      set(value) {
        console.log(value)
        this.$store.commit('question/REWRITE_OPEN_QUESTION_OPINION', 
        {
          index: this.index,
          text: value
        })
      }
    }
  },
  methods: {
    deleteOpinion(index) {
      this.$emit('deleteOpinion', index)
    },
  }
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
      :class="definitionClass"
      type="text"
      placeholder="Без текста"
    >
    <v-btn 
      v-if="lengthOpinions > 1"
      @click="deleteOpinion(index)" 
      icon
    >
      <icon-close class="icon-close"/>
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
