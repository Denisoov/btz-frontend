<template>
  <div class="wrapper-loading">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-loading {
  width: 100%;
  min-height: 740px;
  @include flex-mix(flex);
}
.loading {
  color: rgba(255, 255, 255, 0);

  span {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: linear-gradient(180deg, #171b94 0%, #242ace 100%);
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