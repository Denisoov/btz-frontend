<script>
export default {
  props: {
    color: {
      type: String,
      default: () => '#595959',
    },
  },
}
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 47 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.8125 9.79163V43.0833H38.1875V9.79163H8.8125Z"
      :stroke="color"
      stroke-width="3"
      stroke-linejoin="round"
    />
    <path
      d="M3.91669 9.79163H43.0834M19.5834 19.5833V32.3125V19.5833ZM27.4167 19.5833V32.3125V19.5833Z"
      :stroke="color"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.6667 9.79163L18.8872 3.91663H28.1775L31.3334 9.79163H15.6667Z"
      :stroke="color"
      stroke-width="3"
      stroke-linejoin="round"
    />
  </svg>
</template>
