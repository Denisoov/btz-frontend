<template>
  <button 
    class="app-button ripple" 
    v-on="$listeners" 
  >
    {{ $attrs.title }}
  </button>
</template>

<style lang="scss" scoped>

.app-button {
  color: $white;
  padding: 16px 90px 16px 90px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat-Medium", "sans-serif";

  @include transition-easy(0.15s);

  &:active {
    @include transition-easy(0.15s);
    transform: translate(0px, 3px);
    -webkit-transform: translate(0px, 3px);
    box-shadow: 0px 5px 0px 0px;
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
  padding: 8px 20px 8px 20px !important;
}
.mini {
  padding: 13px 40px 13px 40px !important;
}
</style>
