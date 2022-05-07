<template>
  <div>
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
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