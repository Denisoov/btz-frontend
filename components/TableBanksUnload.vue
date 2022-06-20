<script>
import Vue from 'vue'

import AppButton from '@/components/base/AppButton'

export default Vue.extend({
  components: {
    AppButton
  },
  computed: {
    statisticBanks() {
      return this.$store.state.bank.statisticBanks
    }
  },
  methods: {
    unloadBank(idBank) {
      this.$emit('openDialogUnloadBank', idBank)
    },
    unloadPassport(idBank) {
      this.$emit('openDialogPassport', idBank)
    },
    thresholdDeterminerQuestions(obj) {
      if (obj.min_count_questions > obj.count_questions) return '#ec0000' 
      else return '#1fbe2b'
    },
    thresholdDeterminer(obj) {
      if (obj.hasOwnProperty('max_count')) {
        return obj.count_questions >= obj.max_count 
          ? '#ec0000' 
          : '#1fbe2b'
      }
      else if (obj.hasOwnProperty('min_count'))
        return obj.count_questions >= obj.min_count 
          ? '#1fbe2b' 
          : '#ec0000'
    }
  },
})
</script>

<template>
  <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Наименование банка
            </th>
            <th class="text-left">
              Вопросы
            </th>
            <th class="text-left">
              Открыт. 
            </th>
            <th class="text-left">
              Закрыт.
            </th>
            <th class="text-left">
              Соответств.
            </th>
            <th class="text-left">
              Упорядочив.
            </th>
            <th class="text-left">
              Опции
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in statisticBanks"
            :key="index"
          >
            <td>{{ item.name }}</td>
            <td :style="{color: thresholdDeterminerQuestions(item) }">{{ `${item.count_questions} / ${item.min_count_questions}` }}</td>
            <td 
              v-for="(typeQuestion, index) in item.question_table" 
              :key="index"
            >
              <span 
                class="table-variable" 
              >
                <p class="table-variable--text">{{ `${typeQuestion.min_count ? 'Минимум: ' + typeQuestion.min_count : 'Минимум: 0'}` }}</p>
                <span :style="{ color: thresholdDeterminer(typeQuestion) }">
                  {{ `В наличии: ${typeQuestion.count_questions} ` }}
                </span>
                <p class="table-variable--text">{{ `${typeQuestion.max_count ? 'Порог ' + typeQuestion.max_count : 'Порог: ∞'}` }}</p>
              </span>
            </td>
            <td>
              <div class="buttons">
                <app-button 
                  @click="unloadBank(item.id)"
                  class="micro unload-question" 
                  :title="'вопросы'" 
                />
                <app-button
                  @click="unloadPassport(item.id)"
                  class="micro unload-passport" 
                  :title="'паспорт'" 
                />
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</template>

<style scoped lang="scss">
.v-data-table {
  margin-top: 40px;
  background-color: $background-content;

  .text-left {
    font-size: 16px;
    font-family: "Montserrat-SemiBold";
  }
  tr {
    font-family: "Montserrat-Medium";
  }
  .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: #2127c30d !important;
  }
}
.buttons {
  @include flex-mix(flex, flex-start)
}
.unload-question {
  margin-right: 10px;
  background: $primary;
}
.unload-passport {
  background: $background-button-red;
}
.table-variable {
  font-weight: 700;

  &--text {
    font-weight: 400;
  }
}
</style>
