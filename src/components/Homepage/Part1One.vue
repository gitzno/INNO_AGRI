<script setup>
import Button from 'primevue/button'
</script>
<template>
  <div class="bg_homepage">
    <div class="main_homepage">
      <div class="layer layer_1_hp">
        <img class="contain" src="/src/assets/backgrounds/BackgroundSky.png" alt="background" />
      </div>
      <div class="layer layer_2_hp">
        <img  class="contain" src="/src/assets/backgrounds/moutain.png" alt="moutain" />
      </div>
      <div class="layer layer_2_hp">
        <img  style="margin-bottom: 50px;" class="contain" src="/src/assets/backgrounds/farmer.png" alt="farmer" />
      </div>
      <div class="layer layer_3_hp">
        <div class="cover">
          <img class="contain" src="/src/assets/backgrounds/paddy.png" alt="Nông dân" />
        </div>
      </div>

      <div class="layer layer_4_hp"></div>
      <div class="layer layer_5_hp">
        <div class="content_hp">
          <div class="header-homepage">Bạn có biết</div>
          <div class="content-homepage">
            Sức khỏe cây trồng bắt đầu từ chính sức khỏe của đất.<br />
            Nhưng hơn 70% đất nông nghiệp tại Việt Nam đang dần thoái hóa.<br />
            Inno-Agri mang đến những giải pháp công nghệ từ Nhật Bản và Hàn Quốc để tái tạo đất,
            giảm phát thải, và kiến tạo một nền nông nghiệp xanh – vì sức khỏe cộng đồng và tương
            lai bền vững.
          </div>
          <div class="button_homepage">
            <Button label="Tìm hiểu thêm" icon="pi pi-arrow-circle-right" iconPos="right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.bg_homepage {
  border-radius: 0 0 20px 20px;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.main_homepage {
  width: 100vw;
  min-height: 100vh;
  background-color: aqua;
  position: relative;
  display: flex;
}
.layer {
  width: 100vw;
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
    rgba(248, 251, 252, 0) 83%,
    rgba(255, 255, 255, 1) 100%
  );
  z-index: 4;
}
.layer_5_hp {
  z-index: 5;
}
.content_hp {
  width: 530px;
  margin-top: 100px;
  margin-left: 100px;
}
.header-homepage {
  font: var(--heading--text-4xl);
  color: var(--color-main);
}
.content-homepage {
  margin-top: 20px;
  font: var(--heading--text-base);
  color: var(--vt-c-neutral-700);
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
