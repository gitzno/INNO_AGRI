<template>
  <div class="bg_part2">
    <div class="layer layer_1_hp">
      <img src="@/assets/backgrounds/house_bg.png" alt="Mountain Background" />
    </div>
    <div class="layer layer_2_hp">
      <div class="circle-bg">
        <div class="circle circle_left"></div>
        <div class="circle circle_right"></div>
      </div>
    </div>
    <div class="layer layer_3_hp">
      <div class="container container_left">
        <div class="frame_circle frame_sup"></div>
        <div class="frame_circle"></div>
      </div>
      <div class="container container_right">
        <div class="heading_1">Giới thiệu về chúng tôi</div>
        <div class="heading_2">INNO-AGRI: Tiên phong nông nghiệp bền vững</div>
        <div class="content_1">
          Là đơn vị tiên phong trong lĩnh vực nông nghiệp bền vững tại Việt Nam. Inno-Agri hướng tới
          trở thành cầu nối công nghệ nông nghiệp tiên tiến từ Nhật Bản và Hàn Quốc đến Việt Nam,
          với sứ mệnh bảo vệ môi trường, nâng cao tri thức cộng đồng, và cải thiện chất lượng sống
          cho người nông dân. Các công nghệ nổi bật gồm:
        </div>
        <div class="list_item">
          <ul>
            <li>
              <div class="header_item"><i class="pi pi-check-circle"></i>SOFIX:&nbsp;</div>
              Chẩn đoán sức khỏe đất bằng vi sinh vật
            </li>
            <li>
              <div class="header_item"><i class="pi pi-check-circle"></i>Biochar:&nbsp;</div>
              Than sinh học cải tạo đất, giữ nước, giảm khí nhà kính
            </li>
            <li>
              <div class="header_item"><i class="pi pi-check-circle"></i>Carbon credit:&nbsp;</div>
              Giải pháp tham gia thị trường tín chỉ carbon
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.frame_sup {
  z-index: 5 !important;
  margin-right: 500px;
  background-color: blueviolet !important;
  height: 400px !important;
  width: 400px !important;
}
.container_left {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container_right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 150px;
}
.header_item {
  font: var(--heading--text-base);
}
.list_item i {
  color: var(--vt-c-accent-500);
  margin-right: 30px;
  font-size: 1.2em;
}
.list_item ul {
  margin-top: 50px;
  padding-left: 0;
}
.list_item li {
  font: var(--text-base);
  display: flex;
  color: var(--color-main);
  margin: 15px 0;
}
.heading_1 {
  font: var(--heading--text-xl);
}
.heading_2 {
  margin: 20px 0;
  font: var(--heading--text-4xl);
  color: var(--color-main);
}
.bg_part2 {
  /* background-color: lightblue; */
  max-height: 1024px;
}
.layer_3_hp .container {
  width: 50%;
}
.layer_3_hp {
  display: flex;
}
.layer_3_hp .frame_circle {
  position: absolute;
  background-color: aqua;
  width: 500px;
  height: 500px;
  border-radius: 100%;

  z-index: 4;
}
.content_1 {
  font: var(--text-lg);
  color: var(--vt-c-neutral-800);
  margin-top: 20px;
}
@media (min-width: 1024px) {
  .bg_part2 {
    min-height: 100vh;
    /* background-color: lightcoral; */
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
    display: flex;
    align-items: flex-end;

    z-index: 1;
  }
  .layer_2_hp {
    /* background-image: url('src/assets/backgrounds/moutain_bg.png'); */
    z-index: 2;
  }
  .circle-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    animation: rotateAndBack 3s infinite alternate;
    transform-origin: center;
  }
  @keyframes rotateAndBack {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg); /* Quay về 0deg để lặp lại từ đầu */
    }
  }
  .layer_2_hp .circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--vt-c-accent-500);
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .layer_2_hp .circle_right {
    right: 10%;
    top: 10%;
  }
  .layer_2_hp .circle_left {
    left: 10%;
    bottom: 10%;
  }
  .layer_3_hp {
    z-index: 3;
  }
}
</style>
