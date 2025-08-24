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
    <iframe
      src="https://bumpy-mule-101.notion.site/ebd/1a8f440e69ce80ad98e5c8446bf63783"
      width="100%"
      height="600"
      frameborder="0"
      allowfullscreen
    />
  </div>
</template>

<style scoped>
.bg_page {
  background-color: rgb(255, 255, 255);
  min-height: 200vh;
}
</style>
