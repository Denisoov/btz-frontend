<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    IconPen: () => (import('@/components/icons/IconPen'))
  },
  props: {
    title: {
      type: String
    },
  },
  computed: {
    titleValue: {
      get() {
        return this.title
      },
      set(value) {
        this.$listeners.changeTitleValue(value)
      }
    }
  },
  methods: {
    onClickOutside() {
      this.isEditorTitle = !this.isEditorTitle
    }
  },
  data: () => ({ isEditorTitle: false })
})
</script>

<template>
  <div class="title" >
    <div 
      v-if="!isEditorTitle"
      @click="isEditorTitle = !isEditorTitle"
      class="title__present" 
    >
      <h2 class="title__present-text">Веб-дизайн</h2>
      <icon-pen />
    </div>
    <v-text-field
      autofocus
      v-click-outside="onClickOutside"
      v-model="titleValue" 
      class="title__input" 
      v-else  
    />
  </div>
</template>

<style lang="scss">
.title {
  margin-top: 30px;

  &__present {
    @include flex-mix(flex, flex-start);

    &-text {
      margin-right: 10px;
    }
  }

  .v-input__slot {
    font-size: 28px;
    margin: 0;
  }
  input {
    font-family: "Montserrat-SemiBold", "sans-serif";
  }
  .v-text-field {
    padding-top: 0;
  }
}
</style>
