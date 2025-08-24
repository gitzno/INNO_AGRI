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
        <CardHomePage />
        <CardHomePage />
        <CardHomePage />
        <CardHomePage />
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
  margin: 100px 0;
}
.content-3 {
  color: var(--vt-c-neutral-800);
  font: var(--text-xl);
  text-align: center;
  margin: 0 50px;
}
.header-3 {
  font: var(--heading--text-4xl);
  color: var(--vt-c-green-900);
  margin: 50px 0;
  font-size: 64px;
}
</style>
