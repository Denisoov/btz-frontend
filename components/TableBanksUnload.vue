<script>
import Vue from 'vue'

import AppButton from '@/components/base/AppButton'

export default Vue.extend({
  components: {
    AppButton
  },
  data: () => ({
    desserts: [
      {
        name: 'Банк №1',
        sections: 3,
        categories: 15,
        questions: 78
        
      },
            {
        name: 'Банк №1',
        sections: 2,
        categories: 7,
        questions: 122
      } 
    ]
  })
})
</script>

<template>
  <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Банк
            </th>
            <th class="text-left">
              Разделы 
            </th>
            <th class="text-left">
              Категории
            </th>
            <th class="text-left">
              Вопросы
            </th>
            <th class="text-left">
              Опции выгрузки 
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in desserts"
            :key="index"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.sections }}</td>
            <td>{{ item.categories }}</td>
            <td>{{ item.questions }}</td>
            <td>
              <div class="buttons">
                <app-button class="micro unload-question" :title="'вопросы'" />
                <app-button class="micro unload-passport" :title="'паспорт'" />
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
</style>
