<script>
import Vue from 'vue'

export default Vue.extend({
  components: {
    AppButton: () => import('@/components/base/AppButton.vue'),
    AppLoading: () => import('@/components/base/AppLoading.vue'),
  },
  props: {
    idBank: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    formPassport: {
      scope_btz: '',
      time_testing: null,
      difficulty_level: null,
      max_score: null,
    },
    scopeds: [
      'входящая диагностика',
      'текущий контроль',
      'промежуточный контроль (зачет)',
      'промежуточный контроль (экзамен)',
      'контроль остаточных знаний'
    ],
    levels: [
      'базовый',
      'повышенный',
      'высокий'
    ],
    generalRules: [
        v => !!v || '*Это поле обязательно',
    ],
  }),
  computed: {
    formPassportValidate() {
      return this.$refs['form-passport'].validate()
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialogUnloadPassport')
    },
    loadPassport() {
      if (!this.formPassportValidate) return
      // TO-DO: Поправить метод
      const file = this.$store.dispatch('bank/unloadPassport', {
        idBank: this.idBank,
        formPassport: this.formPassport
      })

      let excel = new Blob([file.data]),
          url = URL.createObjectURL(excel),
          a = document.createElement("a")

        a.href = url
        a.download = 'Вопросы.docx'
        a.click()

        this.closeDialog();
    }
  },
})
</script>

<template>
  <div class="dialog-content">
    <h3 class="dialog-content__title">Заполните форму для выгрузки паспорта</h3>
    <v-form ref="form-passport" >
      <v-select
        v-model="formPassport.scope_btz"
        :items="scopeds"
        label="Область применения"
        outlined
        :rules="generalRules"
      />
      <v-select
        v-model="formPassport.difficulty_level"
        :items="levels"
        label="Уровень тестирования"
        outlined
        :rules="generalRules"
      />
      <v-text-field
        v-model="formPassport.max_score"
        label="Максимальная оценка"
        placeholder="Например: 100" 
        :rules="generalRules"
        v-mask="'#####'"
      />
      <v-text-field 
        v-model="formPassport.time_testing"
        label="Время тестирования"
        placeholder="Например: 40 мин." 
        :rules="generalRules"
        v-mask="'###'"
      />
      <app-button 
        class="unload-passport middle" 
        title="Скачать паспорт"
        @click="loadPassport" 
      />
    </v-form>
  </div>
  <!-- <app-loading :min-height="120" /> -->
</template>

<style scoped lang="scss">
.dialog-content {
  @include flex-mix(flex, center, center);
  flex-direction: column;
  height: 100%;

  &__title {
    margin-bottom: 30px;
  }
}
.unload-passport {
  margin-top: 20px;
  background: $background-button-red;
}
.loading {
  color: rgba(255, 255, 255, 0);

  span {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: $dark-blue;
    display: inline-block;
    animation: loading 0.5s infinite linear alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}
@keyframes loading {
  to {
    opacity: 0.5;
    transform: translateY(-10px);
  }
}
</style>
