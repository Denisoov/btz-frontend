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
  },
})
</script>

<template>
  <header>
    <nav class="header-bar">
      <nuxt-link class="header-bar__logotype" to="/">
        <img :src="LogoType" alt="creaTest" />
      </nuxt-link>
      <ul v-if="this.$route.name !== 'index'" class="header-bar__links">
        <nuxt-link to="/banks">БТЗ</nuxt-link>
        <nuxt-link to="/categories">Категории</nuxt-link>
        <nuxt-link to="/unloading">Выгрузка</nuxt-link>
      </ul>
      <ul class="header-bar__links-icons">
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
  margin: 0;
  @include flex-mix(flex, space-between);

  &__logotype {
    margin: 0 30px 0 30px;
    width: 16%;
    height: 36px;
    cursor: pointer
  }

  &__links {
    width: 100%;
    max-width: 1200px;
    @include flex-mix(flex, flex-start);
    margin: 0;
    list-style-type: none;
    height: 34px;

    a {
      position: relative;
      @include flex-mix(flex);
      width: initial;
      margin-right: 30px;
      height: 20px;
      text-decoration: none;
      color: white;
      transition: transform 250ms ease-in-out;
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 2px;
        width: 0;
        height: 100%;
        border-bottom: 2px solid #fd6161;
        transition: all 0.2s;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }
  &__links-icons {
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
