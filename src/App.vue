<script setup>
import {  RouterView } from 'vue-router'
document.title = __env.app.title
</script>

<template>
  <RouterView />
</template>

<style scoped>
*{
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding: 0;
  box-sizing: border-box;
  @apply bg-gradient-to-bl from-pink-100 to-pink-200
}

</style>
