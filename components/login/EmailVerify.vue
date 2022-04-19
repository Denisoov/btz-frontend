<script>
import Vue from 'vue'

import AppButton from '@/components/base/AppButton.vue'

import EmailVerify from '@/assets/images/email-verify.png'

export default Vue.extend({
  components: {
    AppButton,
  },
  data: () => ({
    EmailVerify,
  }),
  methods: {
    refreshVerifyEmail() {
      this.$store.commit('login/SET_LOADING')
    }
  }
})
</script>

<template>
  <div class="form">
    <img 
      :src="EmailVerify" 
      alt="Подтверждение почты" 
    />
    <h2 class="form__title">Почти готово!</h2>
    <span class="form__description">
      На указанную почту мы выслали письмо с подтверждением аккаунта. Пожалуйста
      подтвердите аккаунт, прежде чем вы сможете получить доступ к сервису
    </span>

    <app-button 
      @click="refreshVerifyEmail" 
      class="email" 
      :title="'Повторно отправить'" 
    />
  </div>
</template>

<style scoped lang="scss">
.form {
  padding-bottom: 60px;
  &__description {
    width: 350px;
  }
}
.email {
  margin-top: 40px;
  background: $primary;
}
</style>
