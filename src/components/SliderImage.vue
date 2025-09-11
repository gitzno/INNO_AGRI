<template>
  <div>
    <div class="wrapper">
      <div class="boxes">
        <div class="box logoPatner"><img src="/src/assets/partnerLogo/Feager.png" alt="" /></div>
        <div class="box logoPatner"><img src="/src/assets/partnerLogo/Inoue.png" alt="" /></div>
        <div class="box logoPatner"><img src="/src/assets/partnerLogo/Denso.png" alt="" /></div>
        <div class="box logoPatner"><img src="/src/assets/partnerLogo/Sofix.png" alt="" /></div>
        <div class="box logoPatner"><img src="/src/assets/partnerLogo/ThanhPhat.png" alt="" /></div>
        <div class="box logoPatner"><img src="/src/assets/partnerLogo/Xuanxuan.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap'
export default {
  mounted() {

    //initially colorize each box and position in a row
    gsap.set('.box', {
      x: (i) => i * 200,
    })
    gsap.to('.box', {
      duration: 1,
      ease: 'none',
      x: '+=200', //move each box 50px to right
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 1200), //force x value to be between 0 and 500 using modulus
      },
      repeat: -1,
      repeatRefresh: true,
      repeatDelay: 1,
    })

    //toggle overflow
    // const overflow = document.querySelector('#overflow')
    // overflow.addEventListener('change', applyOverflow)

    // function applyOverflow() {
    //   if (overflow.checked) {
    //     gsap.set('.wrapper', { overflow: 'visible' })
    //   } else {
    //     gsap.set('.wrapper', { overflow: 'hidden' })
    //   }
    // }
  },
}
</script>
<style scoped>
/* .logoPatner > img:hover {
  filter: grayscale(0%);
  transition: filter 0.3s ease;
} */
.logoPatner > img {
  cursor: pointer;
  /* filter: grayscale(100%); */
  height: 100%;
  padding: 20px;
}
.wrapper {
  width: 1000px;
  height: 100px;
  position: relative;
  margin: auto;
  overflow: hidden;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  position: absolute;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
}

.boxes {
  position: relative;
  left: -200px;
}

.nav {
  position: relative;
  text-align: center;

  color: white;
  font-size: 20px;
  margin: 20px 0;
}
</style>
