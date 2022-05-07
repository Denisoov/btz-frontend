<script>
import Vue from 'vue'

import Draggable from 'vuedraggable';

import IconClose from '@/components/icons/IconClose';
import IconDrag from '@/components/icons/IconDrag';


export default Vue.extend({
  components: {
    Draggable,
    IconClose,
    IconDrag
  },
  computed: {
    opinionsOpenQuestion() {
      return this.$store.state.question.activeQuestion.opinions
    },
  },
  methods: {
    removeAt(idx) {
      this.list.splice(idx, 1);
    },
    add: function() {
      id++;
      this.list.push({ name: "Juan " + id, id, text: "" });
    }
  },
  data: () => ({
      list: [
        { name: "John", text: "1", id: 0 },
        { name: "Joao", text: "2", id: 1 },
        { name: "Jean", text: "3", id: 2 }
      ],
      dragging: false
  })
})
</script>

<template>
  <form class="question-open">
    <draggable tag="div" :list="list" class="list-group" handle=".handle">
      <transition-group type="transition" name="flip-list">
        <div
          class="list-group__item"
          v-for="(element, idx) in list"
          :key="element.name"
        >
          <v-btn 
            icon
            class="btn-drag handle"
          >
            <icon-drag color="#171b94" />
          </v-btn>
          <input v-model="element.text" />
          <v-btn 
            icon
            @click="removeAt(idx)"
            class="btn-close"
          >
            <icon-close class="btn-close__icon" />
          </v-btn>
        </div>
      </transition-group>
    </draggable>
  </form>
</template>

<style scoped lang="scss">
.question-open {
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
