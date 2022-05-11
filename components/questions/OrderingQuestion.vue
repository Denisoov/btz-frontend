<script>
import Vue from 'vue'

import DragOpinions from '@/components/questions/DragOpinions';

export default Vue.extend({
  components: {
    DragOpinions,
  },
  computed: {
    opinionsOpenQuestion: {
      get() {
        return this.$store.state.question.activeQuestion.opinions
      },
      set(value) {
        this.$store.commit('question/SET_ORDERING_QUESTION_OPINIONS', value)
      }
    },
  },
  methods: {
    removeAt(idx) {
      this.question.splice(idx, 1);
    },
    add: function() {
      this.question.push({ opinion: "Juan ", id: 3,});
    },
    emitterDrag(value) {
      console.log(value)
      this.$store.commit('question/SET_LIST_AT', value)
    },
    inputChanged(value) {
      this.$store.commit('question/SET_LIST_AT', value)

    },
    realValue() {
      return this.listAt
    }
  },
  data: () => ({
    question: [],
    listAt: [    {
      id: 1,
      opinion: 'Вариант 1'
    },
    {
      id: 2,
      opinion: 'Вариант 2'
    },]
  })
})
</script>

<template>
  <form class="question-ordering">
    <drag-opinions class="col-8" v-model="opinionsOpenQuestion" />
  </form>
</template>

<style scoped lang="scss">
.question-ordering {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 6px;
    background-color: #46f380;
    border-radius: 15px;
  }
  .v-input {
    font-size: 14px;
  }
  .v-input__slot {
    margin-bottom: 0;
  }
}
.btn-drag {
  width: 30px;
  height: 30px;
  margin-right: 8px;
}
.btn-close {
  width: 24px;
  height: 24px;
  margin-left: 8px;

&__icon {
    width: 24px;
    height: 24px;
  }
}
.list-group {
  &__item {
    @include flex-mix(flex, flex-start, center);
    margin-bottom: 12px;

    &:hover input {
      border-bottom: 1px solid #171b946c;
    }
    input {
      width: 40%;
      height: 30px;
      font-size: 14px;
      outline: none;
      padding: 2px 0 0 5px;

      &:focus {
        border-bottom: 2px solid #414394;
      }
    }
  }
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}
.text {
  margin: 20px;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>
