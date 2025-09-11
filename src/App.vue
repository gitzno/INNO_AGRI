<script setup>
import NavBar from '@/views/NavBar.vue'
import RouterView from '@/views/RouterView.vue'
import FooterView from './views/FooterView.vue'
// import SpeedDial from '@/components/SpeedDial.vue'
</script>

<template>
  <div class="bg_page">
    <div class="layer" style="width: 100%; position: fixed; top: 0; left: 0; z-index: 100">
      <NavBar />
    </div>
    <div class="layer">
      <RouterView />
      <FooterView />
    </div>
  </div>

  <!-- <SpeedDial /> -->
</template>
<script>
export default {
  components: {
    NavBar,
    RouterView,
    FooterView,
    // SpeedDial,
  },
}
</script>
<style scoped>
.bg_page {
  position: relative;

  height: 100vh;
}
.layer {
  position: absolute;
}
</style>
