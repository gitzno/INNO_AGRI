<template>
  <div>
    <div class="content">
      <div class="header-3">Tiếp nhận các công nghệ nông nghiệp mới</div>
      <div class="content-3">
        Inno Agri không ngừng nghiên cứu những giải pháp tiên tiến và ứng dụng công nghệ hiện đại
        hàng đầu thế giới vào sản xuất <br />
        tạo ra những sản phẩm dinh dưỡng cao cho mọi người, mọi nhà.
      </div>
    </div>
    <div style="position: relative">
      <div class="video">
        <div class="bg_video">
          <div class="layer-2"></div>
          <img src="/src/assets/backgrounds/bgMap.png" alt="Video Background" />
        </div>
        <div class="content_video">
          <iframe
            class="youtube-embed"
            src="https://www.youtube.com/embed/q046KxHnj18?si=jFao4i7_zAJncPMD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="header-3">Hợp tác và phát triển bền vững</div>
      <div class="content-3">
        Các hoạt động khảo nghiệm và triển khai thực tế đang được thực hiện tại hơn 18 tỉnh, thành
        phố trên cả nước, nổi bật như:
      </div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  mounted() {
    gsap.to('.content_video', {
      opacity: 1,
      duration: 3,
      y: 200,
      scrollTrigger: {
        trigger: '.content_video', // Trigger sẽ bắt đầu khi cuộn đến div này
        start: 'top', // Bắt đầu khi phần dưới cùng của div nằm ở dưới cùng viewport
        toggleActions: 'play none none reverse', // Khi cuộn vào thì chạy animation, khi cuộn ra thì đảo ngược lại
      },
    })
    gsap.to('.youtube-embed', {
      opacity: 1,
      duration: 3,
      width: '80%',
      height: '80%',
      borderRadius: '30px',
      scrollTrigger: {
        trigger: '.content_video',
        start: 'top center ',
        // Bắt đầu khi phần trên cùng của div nằm ở giữa viewport
        toggleActions: 'restart none none reverse', // Khi cuộn vào thì chạy animation, khi cuộn ra thì đảo ngược lại
        markers: false, // Thêm markers để dễ debug (bạn có thể xóa khi hoàn thành)
      },
    })
    // gsap.to('.video', {
    //   opacity: 0, // Trạng thái kết thúc: mờ hẳn
    //   scrollTrigger: {
    //     trigger: '.video',
    //     start: 'top center', // Bắt đầu khi phần trên cùng của div ở giữa viewport
    //     end: 'bottom top', // Kết thúc khi phần dưới cùng của div ở trên cùng viewport
    //     scrub: true, // Đồng bộ hóa với cuộn
    //     markers: true, // Để dễ debug
    //   },
    // })
  },
}
</script>
<style scoped>
.youtube-embed {
  width: 300px;
  border-radius: 100%;
}
.video {
  position: relative;
  width: 100%;
  height: 100%;
}
.content_video {
  top: -200px;
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
}
.bg_video {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.layer-2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 100px 0;
}
.content-3 {
  color: var(--vt-c-neutral-800);
  font: var(--text-xl);
  text-align: center;
  margin: 20px;
}
.header-3 {
  text-align: center;
  font: var(--heading--text-4xl);
  color: var(--vt-c-green-900);
  margin: 50px 0;
}
@media (max-width: 1024px) {
  .header-3 {
    font-size: 40px;
    text-align: center;
    margin: 20px;
  }
  .content-3 {
    font: var(--text-lg);
    margin: 0 20px;
  }
  .youtube-embed {
    width: 90%;
    height: auto;
    border-radius: 20px;
  }

}
</style>
