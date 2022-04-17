<script>
import Vue from 'vue'

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'

import { required } from '@/plugins/rules-validate'

extend('required', required)

import AppButton from '@/components/base/AppButton.vue'

export default Vue.extend({
  components: {
    ValidationObserver,
    ValidationProvider,
    AppButton,
  },
   computed: {
    email: {
      get() {
        return this.$store.state.login.signInForm.email
      },
      set(value) {
        this.$store.commit('login/SET_EMAIL_SIGNIN', value)
      },
    },
    password: {
      get() {
        return this.$store.state.login.signInForm.password
      },
      set(value) {
        this.$store.commit('login/SET_PASSWORD_SIGNIN', value)
      },
    },
    form() {
      return this.$refs.SignInForm
    },
  },
   methods: {
    goToLogIn() {
      this.$emit('changeCurrentForm', 'LogInForm')
    },
    async signIn() {
      const formObserver = await this.form.validate()

      if (formObserver) {
        await this.$store.dispatch('user/signIn', {
          email: this.email,
          password: this.password,
        })

        await this.$router.push('/')
      }
    },
  },
})
</script>

<template>
  <div class="form">
    <h2 class="form__title">Вход в систему</h2>
    <validation-observer ref="SignInForm" v-slot="formSlotProps" tag="div">
      <v-form :value="formSlotProps.valid" @submit.prevent>
        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required'"
          :placeholder="'Логин'"
        >
          <v-text-field
            class="input__text"
            v-model="email"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Логин"
            type="text"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          mode="eager"
          :rules="'required'"
          :placeholder="'Пароль'"
        >
          <v-text-field
            class="input__text"
            v-model="password"
            :error-messages="errors"
            autocomplete="off"
            placeholder="Пароль"
            type="password"
          ></v-text-field>
        </validation-provider>
      </v-form>
    </validation-observer>
    <div class="content-url--registration">
      У меня
      <a @click="goToLogIn()">нет аккаунта</a>
    </div>
    <app-button class="signin" @click="signIn()" :title="'Войти'" />
  </div>
</template>

<style lang="scss">
.form {
  @include flex-mix(flex);
  flex-direction: column;

  // задаем шрифт для всех блоков кроме h2
  & > *:not(.form__title) {
    font-family: 'Montserrat-Medium', 'sans-serif';
  }
}
.form__title {
  margin-bottom: 25px;
}
.v-input {
  width: 300px;
}
.signin {
    background: #171B94;
}
.v-application .primary--text {
  color: rgba(23, 27, 148, 0.42) !important;
  caret-color: rgba(23, 27, 148, 0.42) !important;
}
.v-messages__message {
  color: $error-message;
}
.content-url--registration {
  text-align: center;
  margin: 12px 0 28px 0;
  font-size: 14px;

  a {
    color: rgba(23, 27, 148);
  }
}
</style>
