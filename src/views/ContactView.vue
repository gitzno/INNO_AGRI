<template>
  <div class="bg_project" style="width: 100vw; margin-top: 200px; margin-bottom: 120px">
    <div class="text-conent-1" style="width: 100%">
      <div class="big-text" @click="handleClickZ">{{ contentHeader }}</div>
      <div class="mini_content bounce-char" @click="handleClick">{{ contentBtn }}</div>
    </div>

    <div class="content_2" v-if="!statusBtn">
      <p>Địa chỉ: 123 Đường ABC, Quận XYZ, Thành phố HCM</p>
      <p>Email: email@email.com</p>
      <p>Số điện thoại: 0123 456 789</p>
    </div>
    <div class="content" v-if="statusBtn">
      <form class="form_email" ref="form" @submit.prevent="sendEmail">
        <div class="first_line">
          <label>
            <div class="text" style="min-width: 20px">Tên của bạn:</div>
            <input type="name" name="user_name" />
          </label>
        </div>
        <div class="second_line">
          <label>
            <div class="text" style="min-width: 20px">Số điện thoại:</div>
            <input type="phone" name="phone_number" style="min-width: 175px" />
          </label>
        </div>
        <div class="second_line">
          <label>
            <div class="text" style="min-width: 20px">Email:</div>
            <input type="email" name="user_email" />
          </label>
        </div>
        <div class="third_line">
          <label style="align-items: start">
            <div class="text" style="min-width: 20px">Message:</div>
            <textarea name="message" style="height: 300px"></textarea>
          </label>
        </div>
        <div class="fourth_line">
          <input
            type="submit"
            style="
              cursor: pointer;
              color: white;
              font-weight: bold;
              background-color: var(--color-main-800);
            "
            value="Send"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import emailjs from '@emailjs/browser'
import { SplitText } from 'gsap/SplitText'
import { gsap } from 'gsap'
gsap.registerPlugin(SplitText)
export default {
  mounted() {
    this.split = SplitText.create('.mini_content', { type: 'lines' })
    this.animateText()
    this.animateImage()
  },
  data() {
    return {
      contentBtn: 'Hoặc click vào đây để chúng tôi liên hệ',
      statusBtn: true,
      contentHeader: 'Liên hệ với chúng tôi',
    }
  },
  methods: {
    handleClickZ() {
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
    animateImage() {
      gsap.from('.image_1 img', {
        y: -200,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    },

    sendEmail() {
      emailjs
        .sendForm('service_7xsqo2l', 'template_5v3vymz', this.$refs.form, {
          publicKey: '0yO3JCHkQSA8hVtFu',
        })
        .then(
          () => {
            console.log('SUCCESS!')
          },
          (error) => {
            console.log('FAILED...', error.text)
          },
        )
    },
    setTrue() {
      this.contentBtn = 'Hoặc click vào đây để chúng tôi liên hệ'
    },
    handleClick() {
      this.statusBtn = !this.statusBtn
      if (this.statusBtn) {
        this.contentBtn = 'Hoặc liên hệ với chúng tôi'
        this.contentHeader = 'Để lai thông tin liên hệ'
      } else {
        this.contentHeader = 'Liên hệ với chúng tôi'
        this.contentBtn = 'Hoặc ấn đây để gửi thông tin cho chúng tôi liên hệ'
      }
    },
  },
}
</script>
<style scoped>
.content_2 {
  min-height: 30vh;
  display: flex;
  align-items: center;
  width: 100vw;
  flex-direction: column;
}
.form_email input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.form_email textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.form_email label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.form_email .text {
  width: 20%;
  padding: 0 20px 0 20px;
  font-weight: bold;
}
.form_email div {
  display: flex;
  width: 100%;
}
.form_email {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 80%;
  margin: auto;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  width: 100vw;
}
@keyframes bounce-animation {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px); /* Chữ nảy lên */
  }
  60% {
    transform: translateY(-5px); /* Nảy xuống một chút */
  }
}
.bounce-char {
  cursor: pointer;

  transition: transform 0.3s ease-in-out;
  display: inline-block; /* Quan trọng để áp dụng transform riêng cho từng chữ */
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Hiệu ứng "nảy" khi vào và ra */
  margin: 0 2px; /* Khoảng cách giữa các chữ */
  animation: bounce-animation 0.8s ease-in-out infinite; /* animation-iteration-count: infinite */
}

.bounce-char:hover {
  animation: none;
  transform: scale(1.05); /* Phóng to chữ khi hover */
}
.project_list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin: 40px 0;
}
.mini_content {
  margin-top: 30px;
  font: var(--text-xl);
}
.big-text {
  text-align: center;
  font: var(--heading--text-4xl);
  color: var(--color-main);
}

.text-conent-1 {
  margin: 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1300px) {
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  label > div {
    width: 100% !important;
    margin: 10px 0;
  }
}
</style>
