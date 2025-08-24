<script setup>
import NavBar from '@/views/NavBar.vue'
import RouterView from '@/views/RouterView.vue'
import FooterView from './views/FooterView.vue'
</script>

<template>
  <div class="bg_page">
    <NavBar />
    <RouterView />
    <FooterView />
  </div>
</template>

<style scoped>
.bg_page {
  background-color: rgb(255, 255, 255);
  min-height: 200vh;
  max-width: 100vw;

}
</style>
