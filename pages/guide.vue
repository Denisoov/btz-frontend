<script>
import Vue from 'vue'

import PageHeader from '@/components/PageHeader'

export default Vue.extend({
  components: {
    PageHeader,
  },
})
</script>

<template>
  <div class="content">
    <page-header :content-title="'Помощь пользователю'" />

    <!-- TODO: Вынести в отдельный слой -->
    <v-expansion-panels class="expansion">
      <v-expansion-panel>
        <v-expansion-panel-header>
          - Для чего предназначен сервис?
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Мы предоставляем возможность быстро и легко создавать банк тестовых
          заданий, котороый можно без труда выгрузить
          <code>паспорт</code>
          и
          <code>файл</code>
          с вопросами
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          - Как создать Банк тестовых заданий?
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          1. В главном меню перейдите в раздел
          <strong>Управление БТЗ</strong>
          <br />
          2. Нажмите на кнопку
          <code>создать</code>
          <br />
          3. Заполните форму и нажмите на кнопку
          <code>Создать</code>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          - Как заполнить/скачать паспорт?
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          1. В главном меню перейдите в раздел <strong>Выгрузка данных</strong>
          <br />
          2. Выберите в таблице БТЗ
          <br />
          3. Нажмите на кнопку <code>Выгрузить паспорт</code>
          <br />
          4. Заполните форму и нажмите на кнопку <code>Скачать</code>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped lang="scss">
.expansion {
  margin-top: 60px;
}
.v-expansion-panel-header {
  font-family: 'Montserrat-SemiBold', 'sans-serif';
  font-size: 18px;
}
.v-expansion-panel {
  font-family: 'Montserrat-Regular', 'sans-serif';
  font-size: 15px;
  background: #e0e0e0;
}
.v-expansion-panel::before {
  box-shadow: none;
  border: 2px solid #e0e0e0;
}
</style>
