<script>
import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { min, max, email, required } from '@/plugins/rules-validate'

import AppButton from '@/components/base/AppButton.vue'

extend('min', min)
extend('max', max)
extend('email', email)
extend('required', required)

export default Vue.extend({
  components: {
    ValidationProvider,
    ValidationObserver,
    AppButton,
  },
  computed: {
    form(){
      return this.$refs.LogInForm
    },
    lastNameValue: {
      get() {
        return this.$store.state.login.loginForm.last_name
      },
      set(value){
        this.$store.commit('login/SET_LAST_NAME', value)
      },
    },
    firstNameValue: {
      get() {
        return this.$store.state.login.loginForm.first_name
      },
      set(value) {
        this.$store.commit('login/SET_FIRST_NAME', value)
      },
    },
    patronymic: {
      get() {
        return this.$store.state.login.loginForm.patronymic
      },
      set(value) {
        this.$store.commit('login/SET_PATRONYMIC', value)
      },
    },
    email: {
      get() {
        return this.$store.state.login.loginForm.email
      },
      set(value) {
        this.$store.commit('login/SET_EMAIL_LOGIN', value)
      },
    },
    password: {
      get() {
        return this.$store.state.login.loginForm.password
      },
      set(value) {
        this.$store.commit('login/SET_PASSWORD', value)
      },
    },
  },
  methods: {
    goToSignIn() {
      this.$emit('changeCurrentForm', 'SignInForm')
    },
    async logIn() {
      const formObserver = await this.form.validate()

      if (formObserver) {
        await this.$store.dispatch('user/registration')
      }
    },
  },
})
</script>

<template>
  <div class="form">
    <h2 class="form__title">Давайте сделаем первый шаг</h2>
    <span class="form__description">
      Начать работу быстро и легко, просто заполните информацию ниже
    </span>
    <validation-observer ref="LogInForm" v-slot="formSlotProps" tag="div">
      <v-form :value="formSlotProps.valid" @submit.prevent>
        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:3'"
          :placeholder="'Фамилия'"
        >
          <v-text-field
            v-model="lastNameValue"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Фамилия"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:2'"
          :placeholder="'Имя'"
        >
          <v-text-field
            v-model="firstNameValue"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Имя"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:4'"
          :placeholder="'Отчество'"
        >
          <v-text-field
            v-model="patronymic"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Отчество"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|email'"
          :placeholder="'Логин'"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            :autocomplete="false"
            placeholder="Логин"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required|min:6|max:36'"
          :placeholder="'Пароль'"
        >
          <v-text-field
            v-model="password"
            :error-messages="errors"
            :autocomplete="false"
            placeholder="Пароль"
            type="password"
          ></v-text-field>
        </validation-provider>
      </v-form>
    </validation-observer>
    <div class="content-url--registration">
      У меня
      <a @click="goToSignIn()">есть аккаунт</a>
    </div>
    <app-button 
      class="registration middle" 
      @click="logIn" 
      title="Регистрация"
    />
  </div>
</template>

<style lang="scss">
.form {
  @include flex-mix(flex);
  flex-direction: column;

  input {
    width: 300px !important;
  }
  // задаем шрифт для всех блоков кроме h2
  & > *:not(.form__title) {
    font-family: 'Montserrat-Medium', 'sans-serif';
  }
}
.form__title {
  margin-bottom: 25px;
}
.registration {
    background: $primary;
}
.form__description {
  width: 300px;
  text-align: center;
  color: $light-gray;
  font-size: 14px;
  margin-bottom: 10px;
}
.v-application .primary--text {
  color: rgba(23, 27, 148, 0.42) !important;
  caret-color: rgba(23, 27, 148, 0.42) !important;
}
.content-url--registration {
  text-align: center;
  margin: 12px 0 28px 0;
  font-size: 14px;

  a {
    color: rgba(23, 27, 148);
    text-decoration: underline;
  }
}
</style>
