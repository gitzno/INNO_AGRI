<template>
  <div class="bg_footer">
    <div class="footerTop">
      <div class="columnFooter"><div class="header">INNOAGRI</div></div>
      <div class="columnFooter">
        <div class="cardVisit">
          <div class="headerCar">Công ty TNHH Inno Agri</div>
          <div class="location">Địa chỉ: Tôn Thất Tùng, Kim Liên, Đống Đa, Hà Nội, Việt Nam</div>
          <div class="location">Điện thoại: 09 876 543</div>
          <div class="location">Email: email@gmail.com</div>
        </div>
      </div>
      <div class="columnFooter mininavZ">
        <ul>
          <li>Trang chủ</li>
          <li>Về chúng tôi</li>
          <li>Dự án</li>
          <li>Tin Tức</li>
          <li>Liên hệ</li>
        </ul>
      </div>
    </div>
    <div class="footerBottom">© All Right Reserved / Bản quyền thuộc về InnoAgri</div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.contact > div {
  margin-top: 30px;
  margin-right: 100px;
}
.infoBelow {
  margin-top: 30px;
  display: flex;
}
.mininav ul {
  display: flex;
  border-bottom: 1px solid var(--color-main);
}
.mininav li {
  display: flex;
  margin: 30px 0px;
  margin-right: 100px;
}
.footerRight {
  width: 80%;
  display: flex;
  flex-direction: column;
}
.bg_footer {
  height: 500px;
  background-color: #fffcf2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.footerLeft {
  width: 40%;
  font-weight: 700;
  font-style: bold;
  font-size: 90px;
  color: var(--color-main);
}
.footerTop {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 90px;
}
.footerTop > div {
  width: 40%;
}
.footerBottom {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding: 10px;
}
.header {
  font: var(--heading--text-4xl);
  color: var(--color-main);
}
.headerCar {
  font-weight: bold;
}
.cardVisit > div {
  margin: 10px;
}
.columnFooter ul {
  margin-left: 40px;
}
.columnFooter ul li {
  margin: 15px;
}

@media screen and (max-width: 1300px) {
  .bg_footer {
    width: 100vw;
  }
  .footerTop {
    width: 100%;
    padding: 20px;
    height: auto;
    flex-direction: column-reverse;
  }
  .mininavZ > ul {
    display: flex;
    margin-left: 0px;
  }
  .mininavZ > ul > li {
    font-size: 13px;
  }
  .footerTop > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cardVisit {
    display: flex;
    flex-direction: column;
  }
  .cardVisit >div{
    text-align: center;
  }
  .bg_footer{
    height: auto;
  }
}
</style>
