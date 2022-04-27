<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeDialog() {
      this.$emit('input', false)
    },
  },
})
</script>
<template>
  <v-dialog
    ref="dialog"
    :max-width="600"
    v-bind="$attrs"
    :value="value"
    v-on="$listeners"
  >
    <v-card class="dialog-card">
      <slot 
        @closeDialog="closeDialog" 
        name="content" 
      />
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
  .dialog-card {
    padding: 20px;
  }
</style>
