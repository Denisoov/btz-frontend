<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    AppButton: () => import('@/components/base/AppButton.vue'),
  },
  data: () => ({ 
    newTitleBank: null,
    fileQuestions: null,
  }),
  methods: {
    closeDialog() {
      this.$emit('closeDialogLoadFile', false)
      this.fileQuestions = null
    },
    createNewBank() {
      let formData = new FormData();
      formData.append('file', this.fileQuestions);

      this.$store.dispatch('bank/loadNewBank', formData)

      this.closeDialog()
    },
  },
})
</script>

<template>
  <div>
    <h3>Новый банк тестовых заданий</h3>
    <v-file-input
      label="Загрузка файла"
      ref="file"
      accept=".xml"
      v-model="fileQuestions"
    />
    <div class="control-buttons">
      <app-button
        :title="'Загрузить'"
        @click="createNewBank"
        class="create mini"
        :disabled="!fileQuestions"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-input {
  width: 100%;
  max-width: 100%;
}
.control-buttons {
  @include flex-mix(flex, flex-end)
}
.create {
  background: $backgorund-birch;
}
</style>
