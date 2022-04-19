<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    isLoadingButton() {
      return this.$store.state.login.isLoading
    }
  },
  methods: {
    handleButton() {
      const btn = this.$refs['app-button']
      
      !this.isLoadingButton 
        ? btn.removeAttribute('disabled') 
        : btn.setAttribute('disabled', '')
    }
  }
})
</script>

<template>
  <button 
    class="app-button ripple" 
    v-on="$listeners"
    ref="app-button"
    @click="handleButton"
  >
    <span v-if="!isLoadingButton" class="app-button__title">
      {{ $attrs.title }}
    </span>
    <div v-else class="loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.app-button {
  position: relative;
  @include flex-mix(flex);
  min-height: 50px;
  width: 300px;
  color: $white;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat-Medium', 'sans-serif';

  @include transition-easy(0.15s);

  &:active {
    @include transition-easy(0.15s);
    transform: translate(0px, 3px);
    -webkit-transform: translate(0px, 3px);
    box-shadow: 0px 5px 0px 0px;
  }
  &:disabled {
    transform: none;
    -webkit-transform: none;
  }
}
.ripple {
  background-position: center;
}
.ripple:active {
  transition: background 0s;
  opacity: 0.8;
  background-size: 100%;
}
.micro {
  width: inherit;
  padding: 8px 20px 8px 20px !important;
}
.mini {
  width: inherit;
  padding: 13px 40px 13px 40px !important;
}
.loading {
  color: rgba(255, 255, 255, 0);
  span {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: #fff;
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
