<template>
  <div class="bg_footer">
    <div class="footerTop">
      <div class="footerLeft">INNO-AGRI</div>
      <div class="footerRight">
        <div class="mininav">
          <ul>
            <li>Trang chủ</li>
            <li>Về chúng tôi</li>
            <li>Dự án</li>
            <li>Tin tức</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div class="infoBelow">
          <div class="contact">
            <div class="contactTitle" style="font-style: bold; font-size: 24px">
              Công ty TNHH Inno Agri
            </div>
            <div class="contactInfo">
              Địa chỉ: Tôn Thất Tùng, Kim Liên, Đống Đa, Hà Nội, Việt Nam
            </div>
            <div class="contactInfo">Điện thoại: 09 876 543</div>
            <div class="contactInfo">Email: email@gmail.com</div>
            <div class="contactNow"></div>
          </div>
          <div class="contact-form">
            <header class="contactTitle" style="font-style: bold; font-size: 24px; margin-top: 30px;">
              Liên hệ với chúng tôi
            </header>
            <form>
              <div>
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Số điện thoại" required />
              </div>
              <div>
                <textarea placeholder="Nội dung" required></textarea>
              </div>
            </form>
          </div>
        </div>
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
  height: 700px;
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
.footerBottom {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding: 10px;
}
</style>
