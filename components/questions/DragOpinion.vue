<script>
import Vue from 'vue'

import IconClose from '@/components/icons/IconClose';
import IconDrag from '@/components/icons/IconDrag';

export default Vue.extend({
  components: {
    IconClose,
    IconDrag
  },
  props: {
    dragOpinion: {
      type: Object
    },
    index: {
      type: Number
    },
  },
  computed: {
    opinion: {
      get() {
        return this.dragOpinion.opinion
      },
      set(value) {
        this.$store.commit('question/REWRITE_ORDERING_QUESTION_OPINION', 
        {
          index: this.index,
          opinion: value
        })
      }
    }
  }
})
</script>

<template>
  <div
    class="list-group__item"
  >
    <v-btn 
      icon
      class="btn-drag handle"
    >
      <icon-drag color="#171b94" />
    </v-btn>
    <input v-model="opinion" />
    <v-btn 
      icon
      class="btn-close"
    >
      <icon-close class="btn-close__icon" />
    </v-btn>
    </div>
</template>

<style scoped lang="scss">
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
</style>