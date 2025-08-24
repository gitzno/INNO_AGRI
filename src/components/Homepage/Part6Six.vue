<template>
  <div>
    <div class="content">
      <div class="header-4">Đối tác của chúng tôi</div>
      <div class="header-3">Inno Agri: Hợp tác cùng...</div>
      <div class="content-3">
        Với mong muốn đem đến cho thị trường những sản phẩm - dịch vụ theo tiêu chuẩn quốc tế và
        những trải nghiệm hoàn toàn mới
      </div>
    </div>
    <div class="partner">
      <div class="logoPatner">
        <img src="/src/assets/partnerLogo/Denso.png" alt="" />
      </div>
      <div class="logoPatner">
        <img src="/src/assets/partnerLogo/Feager.png" alt="" />
      </div>
      <div class="logoPatner">
        <img src="/src/assets/partnerLogo/Inoue.png" alt="" />
      </div>
      <div class="logoPatner">
        <img src="/src/assets/partnerLogo/Sofix.png" alt="" />
      </div>
      <div class="logoPatner">
        <img src="/src/assets/partnerLogo/ThanhPhat.png" alt="" />
      </div>
      <div class="logoPatner">
        <img src="/src/assets/partnerLogo/Xuanxuan.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.partner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
}
.logoPatner > img:hover {
  filter: grayscale(0%);
  transition: filter 0.3s ease;
}
.logoPatner > img {
  cursor: pointer;
  filter: grayscale(100%);
  height: 100px;
  padding: 20px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 100px 0;
}
.header-4 {
  font: var(--heading--text-3xl);
  color: var(--vt-c-neutral-600);
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
