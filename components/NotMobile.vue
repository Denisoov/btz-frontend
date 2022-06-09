<script>
import Vue from 'vue'

import LogoType from '@/assets/images/logo.png'

export default Vue.extend({
  data: () => ({ LogoType })
})


</script>

<template>
  <div class="content">
    <img :src="LogoType" alt="creaTest" />
    <div class="message">К сожалению мобильная версия не поддерживается</div>
  </div>
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100vh;
  display: flex;
  @include flex-mix(flex);
  flex-direction: column;
  background: linear-gradient(to bottom, #171b94 0%,#171b94 35%,white 35%,white 100%);

  img {
    margin-bottom: 50px;
  }
}
.message {
  z-index: 999;
  padding: 20px;
  width: calc(100% - 20%);
  height: 400px;
  min-height: 300px;
  font-family: "Montserrat-SemiBold";
  margin: 0 auto 200px auto;
  box-shadow: 10px 10px 0px rgb(239 239 239);
  border-radius: 15px;
  background: $background-content;
  @include flex-mix(flex);
  text-align: center;
}
</style>