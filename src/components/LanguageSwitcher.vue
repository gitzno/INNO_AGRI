<template>
  <div class="language-switcher">
    <button @click="setLanguage('en')">Eng</button>|
    <button @click="setLanguage('vi')">Vie</button>|
    <button @click="setLanguage('jp')">JP</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { watchEffect } from 'vue'

const { locale } = useI18n()

const setLanguage = (newLang) => {
  locale.value = newLang
  localStorage.setItem('lang', newLang)
}

watchEffect(() => {
  const storedLang = localStorage.getItem('lang')
  if (storedLang) {
    locale.value = storedLang
  }
})
</script>
<style lang="css" scoped>
.language-switcher {
  position: fixed;
  right: 0;
  margin-right: 20px;
}
</style>
