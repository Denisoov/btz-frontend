<script>
import Vue from 'vue'

import LogoType from '@/assets/images/logo.png'

import IconHome from '@/components/icons/IconHome.vue'
import IconQuestion from '@/components/icons/IconQuestion.vue'
import IconUser from '@/components/icons/IconUser.vue'

export default Vue.extend({
  components: {
    IconHome,
    IconQuestion,
    IconUser,
  },
  data: () => ({ LogoType }),
  methods: {
    async goExit() {
      await this.$store.dispatch('user/exit')
      await this.$router.push('/login')
    }
  }
})
</script>

<template>
  <header>
    <nav class="header-bar">
      <nuxt-link class="header-bar__logotype" to="/">
        <img :src="LogoType" alt="creaTest" />
      </nuxt-link>
      <ul class="menu">
        <li>
          <nuxt-link to="/">
            <icon-home />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/guide">
            <icon-question />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">
            <icon-user />
          </nuxt-link>
        </li>
        <li>
          <button @click="goExit" >Выйти</button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  @include flex-mix(flex, center, flex-start);
  z-index: 10;
  font-family: 'Montserrat-Medium';
  background: linear-gradient(180deg, #171b94 0%, #242ace 100%);
  color: #f3f3f3;
}
.header-bar {
  width: 100%;
  height: 100px;
  max-width: 1980px;
  @include flex-mix(flex, space-between);
  align-items: center;

  &__logotype {
    margin-left: 30px;
    width: 145px;
    height: 36px;
    cursor: pointer
  }

  .menu {
    @include flex-mix(flex);
    margin: 0;
    list-style-type: none;
    width: initial;
    height: 34px;

    li {
      @include flex-mix(flex);
      width: initial;
      margin-right: 30px;
      height: inherit;
      transition: transform 250ms ease-in-out;
      cursor: pointer;
    }
  }
}
</style>
