<template>
  <div
    class="bg_project"
    style="
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    "
  >
    <div class="text-conent-1" >
      <div class="mini_content">Dự án</div>
      <div class="big-text" @click="handleClick">
        Công nghệ xanh cho tương lai <br />
        nông nghiệp Việt
      </div>
      <div style="margin: 70px; max-width: 1200px; padding: 20px;">
        <div class="content">
          Mỗi dự án của Inno-Agri đều bắt đầu từ khát vọng xây dựng một nền nông nghiệp Việt Nam
          xanh, tuần hoàn và bền vững. Chúng tôi ứng dụng công nghệ tiên tiến từ Nhật Bản và Hàn
          Quốc để cải tạo đất, giảm phát thải carbon và phát triển chuỗi nông sản hữu cơ, mang lại
          giá trị lâu dài cho nông dân và cộng đồng.
        </div>
      </div>
    </div>
    <div class="project_list" v-for="value in projects_list" :key="value.id">
      <CardProject :source="value" />
    </div>
  </div>
</template>
<script>
import CardProject from '@/components/project/CardProject.vue'
import { SplitText } from 'gsap/SplitText'
import { gsap } from 'gsap'
gsap.registerPlugin(SplitText)
export default {
  data() {
    return {
      projects_list: [
        {
          id: 1,
          title: 'Dự án SOFIX – Đánh giá & tái tạo sức khỏe đất',
          desc: `SOFIX (Soil Fertility Index) là công nghệ tiên tiến từ Nhật Bản, đánh giá sức khỏe đất dựa trên mối quan hệ giữa chất hữu cơ và vi sinh vật, từ đó đề xuất giải pháp cải tạo đất theo hướng nông nghiệp tuần hoàn và bền vững.`,
          img: 'https://res.cloudinary.com/dvavgtmdr/image/upload/v1757436433/d%E1%BB%B1_%C3%A1n_1_ncadjf.jpg',
          alt: 'Dự án SOFIX – Đánh giá & tái tạo sức khỏe đất',
        },
        {
          id: 2,
          title: 'Dự án Giảm phát thải Carbon theo cơ chế JCM',
          desc: `Inno-Agri phối hợp với Công ty Feager (Nhật Bản) triển khai giải pháp AWD (Alternate Wetting and Drying) trong canh tác lúa để giảm phát thải khí nhà kính.`,
          img: 'https://res.cloudinary.com/dvavgtmdr/image/upload/v1757436433/project-v-2_ocd2do.jpg',
          alt: 'Dự án Giảm phát thải Carbon theo cơ chế JCM',
        },
        {
          id: 3,
          title: 'Dự án Biochar – Than sinh học cải tạo đất',
          desc: `Biochar là loại than sinh học từ phế phụ phẩm nông nghiệp, có cấu trúc xốp, giúp giữ nước và chất dinh dưỡng trong đất, đồng thời hấp thụ chất độc hại.`,
          img: 'https://res.cloudinary.com/dvavgtmdr/image/upload/v1757436433/d%E1%BB%B1_%C3%A1n_3_asqrcq.jpg',
          alt: 'project_1',
        },
        {
          id: 4,
          title: 'Dự án phát triển vùng trồng hữu cơ & chuỗi cung ứng nông sản',
          desc: `nno-Agri phối hợp cùng doanh nghiệp và địa phương để xây dựng các vùng trồng hữu cơ đạt chuẩn, cung ứng nông sản chất lượng cao cho thị trường Nhật Bản & Hàn Quốc.`,
          img: 'https://nads.1cdn.vn/2024/11/22/74da3f39-759b-4f08-8850-4c8f2937e81a-1_mangeshdes.png',
          alt: 'project_1',
        },
        {
          id: 5,
          title: 'Nhập khẩu & phân phối sản phẩm nông nghiệp hữu cơ',
          desc: `Cung cấp phân bón và thuốc BVTV chất lượng cao từ Nhật Bản để phục vụ canh tác hữu cơ tại Việt Nam.`,
          img: 'https://res.cloudinary.com/dvavgtmdr/image/upload/v1757436433/d%E1%BB%B1_%C3%A1n_3_asqrcq.jpg',
          alt: 'Nhập khẩu & phân phối sản phẩm nông nghiệp hữu cơ',
        },
      ],
    }
  },
  components: { CardProject },
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
    this.split = SplitText.create('.text-conent-1', { type: 'lines' })
    this.animateText()
    this.animateImage()
  },
}
</script>
<style scoped>
.project_list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin: 40px 0;
}
.mini_content {
  font: var(--text-xl);
}
.big-text {
  text-align: center;
  font: var(--heading--text-4xl);
  color: var(--color-main);
}
.content {
  text-align: center;
  font: var(--text-lg);
  color: var(--color-text-2);
  margin-top: 16px;
}
.text-conent-1 {
  margin: 120px 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1400px;
}
</style>
