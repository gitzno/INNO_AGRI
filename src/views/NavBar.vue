<script setup>
import LogoINNO from '@/components/LogoINNO.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="bg_nav">
    <div class="nav_bar">
      <div class="pl">
        <div>
          <router-link to="/about" :title="t('AboutUs')">{{ t('AboutUs') }}</router-link>
        </div>
        <div>
          <router-link to="/projects" :title="t('Projects')">{{ t('Projects') }}</router-link>
        </div>
      </div>

      <div class="pm">
        <router-link to="/" :title="t('HomePage')"><LogoINNO /></router-link>
      </div>
      <div class="pr">
        <div>
          <router-link to="/news" :title="t('News')">{{ t('News') }}</router-link>
        </div>
        <div>
          <router-link to="/contacts" :title="t('Contacts')">{{ t('Contacts') }}</router-link>
        </div>
      </div>
    </div>
    <LanguageSwitcher />
  </div>
</template>
<script>

export default {

}
</script>
<style scoped>
.pm {
  padding: 20px 20px;
}
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
.nav_bar > div > div {
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
