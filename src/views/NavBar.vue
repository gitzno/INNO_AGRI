<script setup>
import LogoINNO from '@/components/LogoINNO.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="bg_nav">
    <div class="nav_bar">
      <HamburgerMenu class="pz"/>
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
      <LanguageSwitcher class="ls" />
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import HamburgerMenu from '@/components/HamburgerMenu.vue'
gsap.registerPlugin(ScrollTrigger)
export default {
  methods: {
    setupNav(newPath) {
      if (newPath == '/') {
        gsap.to('.nav_bar >  *:not(.pm)', {
          opacity: 0,
          backgroundColor: 'rgba(255, 255, 255, 0);',
          scrollTrigger: {
            trigger: '.bg_nav',
            start: 'top top+=100vh',
            toggleActions: 'play reverse play reverse',
            onEnter: () => {
              gsap.to('.nav_bar', { backgroundColor: 'rgba(255, 255, 255, 0.4);', duration: 0.3 })
            },
            onLeaveBack: () => {
              gsap.to('.nav_bar', { backgroundColor: 'rgba(255, 255, 255, 0.4);', duration: 0.3 })
            },
          },
        })
      } else {
        console.log(ScrollTrigger.getAll())
        // Kiểm tra xem có sự kiện ScrollTrigger nào đang hoạt động không
        if (ScrollTrigger.getAll().length == 0) {
          console.log('Có sự kiện ScrollTrigger đang hoạt động.')
        } else {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
          gsap.set('.nav_bar', { clearProps: 'all' })
        }
      }
    },
  },
  mounted() {
    this.setupNav(this.$route.path)
    this.$watch(
      () => this.$route.path,
      (newPath, oldPath) => {
        oldPath
        this.setupNav(newPath)
        // Place any additional logic you want to run on route change here
      },
    )
  },
}
</script>
<style scoped>
.pz{
  display: none;
}
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
  /* backdrop-filter: blur(10px); */
  background-color: var(--vt-c-accent-50);
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
  border-bottom: 4px solid var(--vt-c-accent-500);
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
@media screen and (max-width: 1300px) {
  .pl,
  .pr,
  .ls {
    display: none !important;
  }

  .pz{
    display: contents;
  }
  .bg_nav {
    width: 100vw;
  }
  .pm{
    
  }
}
</style>
