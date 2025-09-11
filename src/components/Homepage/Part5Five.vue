<template>
  <div>
    <div class="content">
      <div class="header-3">Hợp tác và phát triển bền vững</div>
      <div class="content-3">
        Với mong muốn đem đến cho thị trường những sản phẩm - dịch vụ theo tiêu chuẩn quốc tế và
        những trải nghiệm hoàn toàn mới <br />
        Inno Agri liên tục đổi mới cách làm nông nghiệp, tiên phong dẫn đầu xu hướng ngành nông
        hướng tới cải thiện bla bla của người nông dân
      </div>
      <div class="bg-card">
        <CardHomePage
          title="Dự án SOFIX"
          content="Chẩn đoán sức khỏe đất bằng công nghệ vi sinh Nhật Bản, giúp tái tạo đất, nâng cao hiệu quả canh tác và thúc đẩy nông nghiệp tuần hoàn."
          linkImg="https://firebasestorage.googleapis.com/v0/b/fushipment.appspot.com/o/product%2F%E1%BA%A2nh%20c%E1%BB%A7a%20Th%E1%BB%A5y%2Fd%E1%BB%B1%20%C3%A1n%201.jpg?alt=media&token=f17d2f7d-57c6-4871-b5a6-babc62d0107f"
        />
        <CardHomePage
          title="Dự án JCM"
          content="Ứng dụng phương pháp AWD trên lúa nước để giảm phát thải khí nhà kính, hướng đến mục tiêu Net Zero và tham gia thị trường tín chỉ các-bon quốc tế."
          linkImg="https://firebasestorage.googleapis.com/v0/b/fushipment.appspot.com/o/product%2F%E1%BA%A2nh%20c%E1%BB%A7a%20Th%E1%BB%A5y%2Fproject-v-2.jpg?alt=media&token=f17d2f7d-57c6-4871-b5a6-babc62d0107f"
        />
        <CardHomePage
          title="Dự án Biochar"
          content="Ứng dụng phương pháp AWD trên lúa nước để giảm phát thải khí nhà kính, hướng đến mục tiêu Net Zero và tham gia thị trường tín chỉ các-bon quốc tế."
          linkImg="https://firebasestorage.googleapis.com/v0/b/fushipment.appspot.com/o/product%2F%E1%BA%A2nh%20c%E1%BB%A7a%20Th%E1%BB%A5y%2Fproject-v-2.jpg?alt=media&token=f17d2f7d-57c6-4871-b5a6-babc62d0107f"
        />
        <CardHomePage
          title="Dự án SOFIX"
          content="Chẩn đoán sức khỏe đất bằng công nghệ vi sinh Nhật Bản, giúp tái tạo đất, nâng cao hiệu quả canh tác và thúc đẩy nông nghiệp tuần hoàn."
          linkImg="https://firebasestorage.googleapis.com/v0/b/fushipment.appspot.com/o/product%2F%E1%BA%A2nh%20c%E1%BB%A7a%20Th%E1%BB%A5y%2Fd%E1%BB%B1%20%C3%A1n%201.jpg?alt=media&token=f17d2f7d-57c6-4871-b5a6-babc62d0107f"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CardHomePage from './CardHomePage.vue'

export default {
  components: {
    CardHomePage,
  },
}
</script>
<style scoped>
.bg-card {
  justify-content: center;
  align-items: center;
  margin: 70px;
  display: flex;
  width: 100%;
}
.content {
  background-color: #fffcf2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.content-3 {
  color: var(--vt-c-neutral-800);
  font: var(--text-xl);
  text-align: center;
  margin: 20px 50px;
}
.header-3 {
  font: var(--heading--text-4xl);
  color: var(--vt-c-green-900);
  margin: 50px 0;
  font-size: 64px;
  text-align: center;
}
@media (max-width: 1024px) {
  .header-3 {
    font-size: 45px;
    margin: 20px 0;
  }
}
</style>
