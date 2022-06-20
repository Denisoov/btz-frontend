<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    AppButton: () => import('@/components/base/AppButton.vue'),
  },
  computed: {
    checkFieldsForm() {
      return (this.newTitleBank && this.newTitleBank.length !== 0)  && 
      (this.creditBank && this.creditBank > 1)
    },
  },
  data: () => ({ 
    newTitleBank: null,
    creditBank: null,
    generalRules: [
        v => !!v || '*Это поле обязательно',
        v => v > 1 || 'Значение не может быть меньше 2'
    ],
  }),
  methods: {
    async createNewBank() {
      await this.$store.dispatch(
        'bank/createNewBank',
        { name: this.newTitleBank, credits: this.creditBank }
      )
      await this.$emit('closeDialog')

      this.newTitleBank = null;
    }
  },
})
</script>

<template>
  <div>
    <h3>Новый банк тестовых заданий</h3>
    <v-text-field
      placeholder="Наименование банка" 
      v-model="newTitleBank" 
      autofocus
    />
    <v-text-field
      style="width: 160px"
      placeholder="Зачет. единицы"
      v-mask="'###'"
      outlined
      v-model="creditBank"
      :rules="generalRules"
    />
    <div class="control-buttons">
      <app-button 
        :disabled="!checkFieldsForm"
        :title="'Создать'" 
        @click="createNewBank" 
        class="create mini" 
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
  background: $background-button-red;
}
</style>
