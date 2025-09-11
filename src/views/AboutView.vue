<template>
  <div class="about">
    <div class="text-conent-1">
      <div class="mini_content">Về chúng tôi</div>
      <div class="big-text" @click="handleClick">
        Giải pháp vì tương lai <br />
        nông nghiệp bền vững
      </div>
      <div class="content contentZ" style="margin-top: 32px">
        Công ty TNHH Inno-Agri là một đơn vị tiên phong trong lĩnh vực phát triển bền vững, với sứ
        mệnh nâng cao giá trị giáo dục và bảo vệ môi trường. Chúng tôi tiếp nhận và chuyển giao các
        công nghệ cao, đặc biệt là những công nghệ phó với biến đổi khí hậu và đạt được mục tiêu Net
        Zero, từ đó nâng cao đời sống của người nông dân và phát triển kinh tế doanh nghiệp.
      </div>
    </div>
    <div class="image_1">
      <img src="/src/assets/backgrounds/gradenOrange.jpg" alt="about_1" />
    </div>
    <div class="text-conent-2" style="width: 100%">
      <div class="left_content">
        <div class="big-text">
          Hợp tác quốc tế, <br />
          kiến tạo tương lai xanh.
        </div>
        <div class="content">
          INNO-AGRI đang hợp tác với các tập đoàn hàng đầu đến từ Nhật Bản và Hàn Quốc để triển khai
          các dự án nông nghiệp bền vững, đồng thời phát triển thị trường sản phẩm hữu cơ và tham
          gia vào các sáng kiến thị trường Carbon. Chúng tôi cam kết tạo ra những giá trị thiết thực
          và dài lâu, góp phần bảo vệ và phát triển môi trường, đồng thời xây dựng một tương lai
          xanh và bền vững cho thế hệ sau.
        </div>
      </div>
      <div class="right_content">
        <img
          src="https://res.cloudinary.com/dvavgtmdr/image/upload/v1757436434/v%C6%B0%E1%BB%9Dn-cam2_124KB_cdpiu2.jpg"
          alt="about_2"
        />
      </div>
    </div>
    <div class="content_3" style="width: 100%">
      <div class="layer image_1 image_2">
        <img src="/src/assets/backgrounds/bgMap.png" alt="about_1" />
      </div>
      <div class="bg_layer">
        <div class="layer bg_content_3">
          <div class="content_text3">
            <div class="big-text">Tầm nhìn và Sứ mệnh: Kiến tạo Nông nghiệp Tương lai</div>
            <div class="content" style="margin-top: 32px">
              Nông nghiệp là nền tảng cho sự sống con người. Inno-Agri quan niệm rằng sức khỏe nông
              nghiệp chính là sức khỏe con người, một nền nông nghiệp khỏe đồng nghĩa với một cộng
              đồng khỏe. Vì vậy việc xây dựng các nền tảng bảo vệ sức khỏe đất đai và cây trồng sử
              dụng khoa học kỹ thuật là việc thiết yếu và là trách nhiệm của Inno Agri. Tiếp thu và
              áp dụng những sáng kiến công nghệ để giải quyết những vấn đề cốt lõi, tạo nền tảng để
              phát triển một nền nông nghiệp an toàn và bền vững tại Việt Nam.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SplitText } from 'gsap/SplitText'
import { gsap } from 'gsap'
gsap.registerPlugin(SplitText)
export default {
  name: 'AboutView',
  data() {
    return {
      split: null,
      split2: null,
      animation: null,
    }
  },
  methods: {
    handleClick() {
      this.animateText()
      this.animateImage()
    },
    animateText() {
      this.animation = gsap.from(this.split.lines, {
        rotationX: -100,
        transformOrigin: '50% 50% -160px',
        opacity: 0,
        duration: 0.8,
        ease: 'power3',
        stagger: 0.25,
      })
    },
    animateText2() {
      this.animation = gsap.from(this.split.lines, {
        rotationX: -100,
        transformOrigin: '50% 50% -160px',
        opacity: 0,
        duration: 0.8,
        ease: 'power3',
        stagger: 0.25,
      })
    },
    animateImage() {
      gsap.from('.image_1 img', {
        y: -200,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    },
  },
  mounted() {
    this.split = SplitText.create('.contentZ', { type: 'lines' })
    // this.split2 = SplitText.create('.big-text', { type: 'lines' })
    let tl = gsap.timeline()
    tl.add(() => {
      this.animateText2()
    })
    // tl.add(() => {
    //   this.animateText()
    // })
    // tl.to(this.animateImage())
    tl.play()
    // tl.to(this.animateText())
    // this.animateText()
    // this.animateImage()
  },
}
</script>
<style scoped>
@media (max-width: 1400px) {
  .big-text {
    font-size: 48px !important;
  }
  .left_content {
    width: 50%;
    margin-right: 50px !important;
  }
  .content {
    margin-bottom: 100px;
  }
  .contentZ{
    margin: 50px 20px  !important;
  }
}
@media (max-width: 1024px) {
  .text-conent-2 {
    flex-direction: column;
  }
  .big-text {
    text-align: center !important;
  }
  .right_content {
    width: 100vw !important;
    border-radius: 0px !important;
  }
  .right_content > img {
    border-radius: 0px !important;
  }
}
.bg_layer {
  height: 100vh;
}
.content_3 .layer {
  position: absolute;
}

.content_text3 .content {
  text-align: left;
}
.content_text3 {
  background-color: var(--vt-c-accent-50);
  width: 800px;
  height: 480px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  text-align: left;
}
.bg_content_3 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.image_2 {
  width: 100%;
  height: 100vh;
}
.image_2 img {
  height: 100vh;
  filter: blur(5px);
}
.left_content {
  width: 80%;
  margin-right: 100px;
}
.right_content {
  width: 800px;
}
.right_content > img {
  width: 100%;
}
.right_content > img {
  border-radius: 20px;
}
.left_content > .content {
  margin-top: 32px;
}

.left_content div {
  text-align: left;
}

.text-conent-2 {
  background-color: var(--vt-c-accent-50);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 100px 130px;
}
.image_1 {
  width: 100%;
}
.image_1 img {
  width: 100%;
}
.mini_content {
  font: var(--text-xl);
}
.big-text {
  text-align: center;
  font: var(--heading--text-4xl);
  color: var(--color-main);
  font-size: 64px;
  font-weight: semi-bold;
  text-align: left;
  line-height: 1.2;
}
.big-text > div {
  font-size: 64px;
  background-color: aqua;
}
.content {
  margin-top: 32px;
  text-align: center;
  font: var(--text-lg);
  color: var(--color-text-2);
  margin-top: 16px;
}
.text-conent-1 {
  max-width: 1024px;
  padding: 40px 0;
  display: flex;
  margin: 120px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.about {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 200vh;
  width: 100vw;
}
@media (min-width: 1024px) {
}
</style>
