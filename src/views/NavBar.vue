<script setup>
import LogoINNO from '@/components/LogoINNO.vue'
</script>
<template>
  <div class="bg_nav">
    <div class="nav_bar">
      <div><LogoINNO /></div>
      <div><router-link to="/" title="Trang chủ">Trang chủ</router-link></div>
      <div><router-link to="/about" title="Về chúng tôi">Về chúng tôi</router-link></div>
      <div><router-link to="/project" title="Dự án">Dự án</router-link></div>
      <div><router-link to="/news" title="Tin tức">Tin tức</router-link></div>
      <div><router-link tơ="/contacts" title="Liên hệ">Liên hệ</router-link></div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.bg_nav {
  z-index: 2000;
  position: sticky;
  top: 0;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav_bar {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.4);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 0 0 20px 20px;
}
.nav_bar > div {
  font: var(--heading--text-2xl);
  margin: 50px;
  display: inline-block;
}
.nav_bar a {
  height: auto;
  box-sizing: border-box;
  color: var(--vt-c-neutral-700);
}
.nav_bar a:hover {
  /* border: 3px solid black; */
  /* font-weight: 900; */
  padding-bottom: 10px;
  border-bottom: 4px solid var(--color-secondary-400);
  transition: border-bottom 0.1s linear 0s;
}
.nav_bar a::before {
  content: attr(title);
  display: block;
  /* font-weight: 900; */
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
</style>
