<script>
import Vue from 'vue'

import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag } from '@/helpers/smooth-dnd'

export default Vue.extend({
  components: {
    Container,
    Draggable
  },
  computed: {
    opinionsOpenQuestion() {
      return this.$store.state.question.activeQuestion.opinions
    }
  },
  methods: {
    onDrop(dropResult) {
      this.items = applyDrag(this.items, dropResult);
      console.log(this.items)
    }
  },
  data: () => ({
    items: [
        { id: 1, data: "1 Draggable "},
        { id: 2, data: "2 Draggable "},
        { id: 3, data: "3 Draggable "}
    ]
  })
})
</script>

<template>
  <form class="question-open">
    <Container  @drop="onDrop">            
      <Draggable 
        v-for="(item, index) in items" 
        :key="index"
      >
        <div class="draggable-item">
          <v-text-field 
            v-model="item.data" 
            type="text" 
          />
        </div>
      </Draggable>
    </Container>
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
.smooth-dnd-draggable-wrapper {
  width: 500px;
  box-shadow: 6px 6px 13px rgb(166 149 255 / 12%);
  border: 2px dashed #3cd36f;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 2px;
  padding-left: 30px;
}
</style>
