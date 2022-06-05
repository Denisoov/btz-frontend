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
  mounted() {
    this.oldTitle = this.titleValue
  },
  methods: {
    onClickOutside() {
      this.titleValue.length <= 0 
        ? this.titleValue = this.oldTitle
        : this.$listeners.accessChangesTitle(this.titleValue)
        
      this.isEditorTitle = !this.isEditorTitle
    }
  },
  data: () => ({ 
    isEditorTitle: false,
    oldTitle: null,
    })
})
</script>

<template>
  <div class="title" >
    <div 
      v-if="!isEditorTitle"
      @click="isEditorTitle = !isEditorTitle"
      class="title__present" 
    >
      <h2 class="title__present-text">{{ titleValue }}</h2>
      <icon-pen />
    </div>
    <v-text-field
      autofocus
      v-click-outside="onClickOutside"
      @keyup.enter="onClickOutside"
      v-model="titleValue" 
      class="title__input" 
      v-else  
    />
  </div>
</template>

<style lang="scss">
.title {
  margin: 30px 0;

  &__present {
    @include flex-mix(flex, flex-start);

    &-text {
      margin-right: 10px;
      text-align: left;
    }
  }
  .v-input {
      width: 600px;
      max-width: 600px
  }
  .v-input__slot {
    font-size: 28px;
    margin: 0;
  }
  input {
    font-family: "Montserrat-SemiBold", "sans-serif";
  }
  .v-text-field__details {
    display: none;
  }
  .v-text-field {
    padding-top: 0;
    margin-top: 0;
  }
}
</style>
