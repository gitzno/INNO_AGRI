<script setup></script>
<template>
  <div class="bg_homepage">
    <div class="main_homepage">
      <div class="layer layer_1_hp">
        <img
          class="contain"
          src="https://res.cloudinary.com/dvavgtmdr/image/upload/v1757436435/N%C3%BAi_900KB_ce1gxt.jpg"
          alt="background"
        />
      </div>

      <div class="layer layer_2_hp">
        <img
          style="bottom: -150px; position: absolute"
          src="https://res.cloudinary.com/dvavgtmdr/image/upload/v1757436435/Ndan_357KB_yl0hju.png"
          class="contain"
          alt="farmer"
        />
      </div>
      <div class="layer layer_3_hp">
        <div class="cover">
          <img
            style="width: 100vw"
            class="contain"
            src="https://res.cloudinary.com/dvavgtmdr/image/upload/v1757436435/C%E1%BB%8F_424KB_h7zmr0.png"
            alt="Lúa"
          />
        </div>
      </div>

      <div class="layer layer_4_hp"></div>
      <div class="layer layer_5_hp">
        <div class="content_hp">
          <div class="header-homepage" style="text-shadow: 2px 2px #888888">INNOAGRI</div>
          <div class="content-homepage" style="text-shadow: 2px 2px #888888">
            Tiên phong <br />
            Nông nghiệp bền vững
          </div>
          <div class="button_homepage"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  mounted() {
    let tl = gsap.timeline()

    // Split the header and content text into lines or chars if needed
    const header = this.$el.querySelector('.header-homepage')
    const content = this.$el.querySelector('.content-homepage')
    const imgFarmer = this.$el.querySelector('.layer_1_hp')
    const fei = this.$el.querySelector('.layer_3_hp')
    // Optional: Split text for animation effect
    // const splitHeader = new SplitText(header, { type: "chars" })
    // const splitContent = new SplitText(content, { type: "chars" })

    // Set initial state
    gsap.set([header, content], { opacity: 0, y: 50 })
    gsap.set(imgFarmer, { scale: 1.5 })
    gsap.set(fei, { y: 50 })
    // Add animations to timeline
    tl.to(header, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
    tl.to(imgFarmer, { scale: 1, duration: 2, ease: 'power2.out' }, '-=1')
    tl.to(content, { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }, '-=1')
    tl.to(fei, { x: 0, y: 0, duration: 2.4, ease: 'power2.out' }, '-=3')
  },
}
</script>
<style scoped>
.bg_homepage {
  border-radius: 0 0 20px 20px;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}
.main_homepage {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
}
.layer {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.layer_1_hp {
  /* background-image: url('@/assets/backgrounds/background.png'); */
  z-index: 1;
}
.layer_2_hp {
  /* background-image: url('@/assets/backgrounds/moutain.png'); */
  z-index: 2;
}

.layer_3_hp {
  z-index: 3;
  display: flex;
}
.layer_3_hp .contain {
  display: block;
}
.layer_3_hp .cover {
  position: absolute;
  bottom: 0;
  object-fit: contain;
}

.layer_4_hp {
  background: linear-gradient(
    180deg,
    rgba(42, 123, 155, 0) 0%,
    rgba(248, 251, 252, 0) 93%,
    rgba(255, 255, 255, 1) 100%
  );
  z-index: 4;
}
.layer_5_hp {
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content_hp {
  min-width: 90vw;
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
}
.content_hp > div {
  line-height: 1.2;
}
.header-homepage {
  color: white;
  font-size: 128px;
  font-weight: bold;
}
.content-homepage {
  color: white;
  font-size: 48px;
  font-weight: semi-bold;
}
.button_homepage {
  margin-top: 20px;
}
.button_homepage button {
  margin-top: 20px;
  background-color: var(--vt-c-delicious_dill-900);
  border: none;
  color: whitesmoke;
}
</style>
