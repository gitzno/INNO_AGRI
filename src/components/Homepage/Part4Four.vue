<template>
  <div class="bg_four">
    <div
      class="layer"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
      "
    >
      <img
        style="height: 100%; opacity: 0.1"
        src="https://firebasestorage.googleapis.com/v0/b/fushipment.appspot.com/o/product%2F%E1%BA%A2nh%20c%E1%BB%A7a%20Th%E1%BB%A5y%2FN%E1%BB%81n%20Map.png?alt=media&token=f17d2f7d-57c6-4871-b5a6-babc62d0107f"
        alt="cánh đồng"
      />
    </div>
    <div class="bg_content left_content">
      <div class="frame_img" style="margin-left: 300px; margin-top: 100px;">
        <div class="bg_layer">
          <div class="layer layer-1">
            <img src="/src/assets/backgrounds/Vietnam_location_map.png" alt="" />
          </div>
          <div class="layer layer-2">
            <img
              class="hanoi"
              src="/src/assets/logos/TH.svg"
              alt="Hà Nội"
              style="top: 100px; right: -219px; position: absolute"
            />
            <img
              class="haiduong"
              src="/src/assets/logos/TH.svg"
              alt="Hải Dương"
              style="top: 120px; right: -260px; position: absolute"
            />
            <img
              class="thanhhoa"
              src="/src/assets/logos/TH.svg"
              alt="Thanh Hóa"
              style="top: 150px; right: -200px; position: absolute"
            />
            <img
              class="nghean"
              src="/src/assets/logos/TH.svg"
              alt="Nghệ An"
              style="top: 190px; right: -180px; position: absolute"
            />
            <img
              class="hatinh"
              src="/src/assets/logos/TH.svg"
              alt="Hà Tĩnh"
              style="top: 240px; right: -230px; position: absolute"
            />
            <img
              class="longan"
              src="/src/assets/logos/TH.svg"
              alt="Long An"
              style="top: 630px; right: -250px; position: absolute"
            />
            <img
              class="tiengiang"
              src="/src/assets/logos/TH.svg"
              alt="Tiền Giang"
              style="top: 640px; right: -320px; position: absolute"
            />
            <img
              class="cantho"
              src="/src/assets/logos/TH.svg"
              alt="Cần Thơ"
              style="top: 660px; right: -220px; position: absolute"
            />
            <img
              class="soctrang"
              src="/src/assets/logos/TH.svg"
              alt="Sóc Trăng"
              style="top: 690px; right: -270px; position: absolute"
            />
            <div style="width: 40px; height: 40px"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg_content right_content">
      <ul>
        <li class="li_active hanoi">
          <i
            class="pi pi-check-circle"
            style="
              color: var(--color-main-500);
              background-color: white;
              border-radius: 100%;
              margin-right: 15px;
            "
          ></i>
          Hà Nội
        </li>
        <li class="li_active haiduong">
          <i
            class="pi pi-check-circle"
            style="
              color: var(--color-main-500);
              background-color: white;
              border-radius: 100%;
              margin-right: 15px;
            "
          ></i
          >Hải Dương
        </li>
        <li class="li_active thanhhoa">
          <i
            class="pi pi-check-circle"
            style="
              color: var(--color-main-500);
              background-color: white;
              border-radius: 100%;
              margin-right: 15px;
            "
          ></i
          >Thanh Hóa
        </li>
        <li class="li_active nghean">
          <i
            class="pi pi-check-circle"
            style="
              color: var(--color-main-500);
              background-color: white;
              border-radius: 100%;
              margin-right: 15px;
            "
          ></i
          >Nghê An
        </li>
        <li class="li_active hatinh">
          <i
            class="pi pi-check-circle"
            style="
              color: var(--color-main-500);
              background-color: white;
              border-radius: 100%;
              margin-right: 15px;
            "
          ></i
          >Hà Tĩnh
        </li>
        <li class="li_active longan">
          <i
            class="pi pi-check-circle"
            style="
              color: var(--color-main-500);
              background-color: white;
              border-radius: 100%;
              margin-right: 15px;
            "
          ></i
          >Long An
        </li>
        <li class="li_active tiengiang">
          <i
            class="pi pi-check-circle"
            style="
              color: var(--color-main-500);
              background-color: white;
              border-radius: 100%;
              margin-right: 15px;
            "
          ></i
          >Tiền Giang
        </li>
        <li class="li_active cantho">
          <i
            class="pi pi-check-circle"
            style="
              color: var(--color-main-500);
              background-color: white;
              border-radius: 100%;
              margin-right: 15px;
            "
          ></i
          >Cần Thơ
        </li>
        <li class="li_active soctrang">
          <i
            class="pi pi-check-circle"
            style="
              color: var(--color-main-500);
              background-color: white;
              border-radius: 100%;
              margin-right: 15px;
            "
          ></i
          >Sóc Trăng
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  mounted() {
    var tl = gsap.timeline({ paused: true })
    tl.to('.frame_img', { duration: 1, scale: 2, y: 400 })
    tl.to('.hanoi', { duration: 1, opacity: 1 })
    tl.to('.haiduong', { duration: 1, opacity: 1 })
    tl.to('.thanhhoa', { duration: 1, opacity: 1 })
    tl.to('.nghean', { duration: 1, opacity: 1 })
    tl.to('.hatinh', { duration: 1, opacity: 1 })
    tl.to('.frame_img', { duration: 1, scale: 2, y: -350 })
    tl.to('.longan', { duration: 1, opacity: 1 })
    tl.to('.tiengiang', { duration: 1, opacity: 1 })
    tl.to('.cantho', { duration: 1, opacity: 1 })
    tl.to('.soctrang', { duration: 1, opacity: 1 })
    tl.to('.frame_img', { duration: 1, scale: 1, y: 0 })

    gsap.to('.right_content', {
      scrollTrigger: {
        trigger: '.right_content',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
        onToggle: (self) => self.isActive && tl.restart(),
      },
    })
  },
}
</script>
<style scoped>
.hanoi,
.haiduong,
.thanhhoa,
.nghean,
.hatinh,
.longan,
.tiengiang,
.cantho,
.soctrang {
  opacity: 0;
}
.bg_layer {
  position: relative;
  height: 100vh;
}
.layer {
  position: absolute;
}
li {
  margin-left: 50px;
  margin-bottom: 20px;
  font: var(--heading--text-xl);
  color: var(--color-main);
}
.bg_content {
  height: 100vh;
}
.bg_four {
  background-color: var(--color-secondary-300);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
}
.left_content {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right_content {
  margin-left: 60px;
  width: 50%;
  display: flex;
  align-items: center;
}
.right_content li {
  font: var(--heading--text-3xl);
}
.frame_img {
  width: 500px;
}
.frame_img img {
  width: 100%;
  height: 100%;
}
</style>
