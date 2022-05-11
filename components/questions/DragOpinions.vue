<script>
import Vue from 'vue'

import draggable from 'vuedraggable'

import DragOpinion from '@/components/questions/DragOpinion'

export default Vue.extend({
  methods: {
    emitterDrag(value) {
      this.$emit("input", value);
    },
  },
  components: {
    draggable,
    DragOpinion,
  },
  computed: {
    dragOptions() {
      return {
        animation: 300,
        disabled: false,
      };
    },
    realValue() {
      return this.value ? this.value : this.list;
    }
  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
    }
  }
});
</script>
<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="list-group"
    :list="list"
    :value="value"
    @input="emitterDrag"
  >
    <drag-opinion       
      v-for="(element, index) in realValue"
      :index="index"
      :key="element.id" 
      class="list-group__item"
      :drag-opinion="element"
      @input="element"
    />
  </draggable>
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