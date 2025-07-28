<script setup>
import NavBar from '@/views/NavBar.vue'
import RouterView from '@/views/RouterView.vue'
</script>

<template>
  <div class="bg_page">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>
.bg_page {
  background-color: rgb(255, 255, 255);
  min-height: 200vh;
}
</style>
