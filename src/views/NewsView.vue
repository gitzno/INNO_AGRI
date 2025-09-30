<template>
  <div class="bg_project" style="width: 100vw;">
    <div class="text-conent-1">
      <div class="big-text" @click="handleClick">Tin tức - Sự kiện</div>
      <div class="content">
        Nơi chúng tôi tập hợp những thông tin chuyên ngành về nông nghiệp, đồng thời ghi chép và lưu
        trữ lại những hoạt động nghiên cứu, hợp tác và thực tiễn sản xuất của công ty
      </div>
    </div>
    <div class="pick_label">
      <button @click="handleClick(1)" :class="labelFillter == 1 ? 'pick_label_hover' : ''">Tất cả chủ đề</button>
      <button @click="handleClick(2)" :class="labelFillter == 2 ? 'pick_label_hover' : ''">Tin tức</button>
      <button @click="handleClick(3)" :class="labelFillter == 3 ? 'pick_label_hover' : ''">Sư kiên</button>
    </div>
    <div class="project_list" v-for="value in projects_list" :key="value.id">
      <CardProject :source="value" type="Tin Tức"/>
    </div>
  </div>
</template>
<script>
import CardProject from '@/components/project/CardProject.vue'
export default {
  methods: {
    handleClick(id) {
      this.labelFillter = id
    },
  },
  data() {
    return {
      labelFillter: 1,
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
          img: 'https://nads.1cdn.vn/2024/11/22/74da3f39-759b-4f08-8850-4c8f2937e81a-1_mangeshdes.png',
          alt: 'Dự án Giảm phát thải Carbon theo cơ chế JCM',
        },
        {
          id: 3,
          title: 'Dự án Biochar – Than sinh học cải tạo đất',
          desc: `Biochar là loại than sinh học từ phế phụ phẩm nông nghiệp, có cấu trúc xốp, giúp giữ nước và chất dinh dưỡng trong đất, đồng thời hấp thụ chất độc hại.`,
          img: 'https://nads.1cdn.vn/2024/11/22/74da3f39-759b-4f08-8850-4c8f2937e81a-1_mangeshdes.png',
          alt: 'project_1',
        },
        {
          id: 4,
          title: 'Dự án phát triển vùng trồng hữu cơ & chuỗi cung ứng nông sản',
          desc: `Biochar là loại than sinh học từ phế phụ phẩm nông nghiệp, có cấu trúc xốp, giúp giữ nước và chất dinh dưỡng trong đất, đồng thời hấp thụ chất độc hại.`,
          img: 'https://nads.1cdn.vn/2024/11/22/74da3f39-759b-4f08-8850-4c8f2937e81a-1_mangeshdes.png',
          alt: 'project_1',
        },
        {
          id: 5,
          title: 'Nhập khẩu & phân phối sản phẩm nông nghiệp hữu cơ',
          desc: `Cung cấp phân bón và thuốc BVTV chất lượng cao từ Nhật Bản để phục vụ canh tác hữu cơ tại Việt Nam.`,
          img: 'https://nads.1cdn.vn/2024/11/22/74da3f39-759b-4f08-8850-4c8f2937e81a-1_mangeshdes.png',
          alt: 'Dự án phát triển vùng trồng hữu cơ & chuỗi cung ứng nông sản',
        },
      ],
    }
  },
  components: { CardProject },
}
</script>
<style scoped>
.bg_project{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pick_label_hover{
  background-color: var(--color-main);
  color: white !important;
}
.pick_label button{
  color: var(--color-main);
  font: var(--text-lg);
  font-weight: bold;
  border: 1px solid var(--color-main);
  border-radius: 20px;
  padding: 10px 60px;
  cursor: pointer;
}
.pick_label button:hover{
  background-color: var(--color-main);
  color: white;
}
.pick_label {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: start;
  margin: 40px 0;
  width: 80vw;
}
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
  min-width: 1200px;
  margin-top: 32px;
  text-align: center;
  font: var(--text-lg);
  color: var(--color-text-2);
  margin-top: 16px;
}
.text-conent-1 {
  width: 100%;
  margin: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
