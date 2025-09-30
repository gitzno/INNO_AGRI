<template>
  <div class="card_bg">
    <div class="card">
      <div class="layer img-layer">
        <img :src="linkImg" alt="Card Image" class="card-image" />
      </div>
      <div class="layer content_layer">
        <div class="header">{{ this.title }}</div>
        <div class="content">{{ this.content }}</div>
        <button class="btn">Xem chi tiết</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    linkImg: {
      type: String,
      default: '/src/assets/backgrounds/project-v-2.jpg',
    },
    title: {
      type: String,
      default: 'Dự án sofix',
    },
    content: {
      type: String,
      default:
        'Sofix là một dự án nông nghiệp công nghệ cao, tập trung vào việc phát triển các giải pháp bền vững và hiệu quả cho ngành nông nghiệp.',
    },
  },
}
</script>
<style scoped>
.card_bg {
  margin: 10px;
}
.card {
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  background-color: #006f1c;
  height: 452px;
  width: 300px;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content_layer:hover {
  opacity: 0.95;
  transition: opacity 0.3s ease-in-out;
}
.content_layer {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: var(--color-secondary-300);
  opacity: 0;
}
.layer {
  cursor: pointer;
  position: absolute;
  height: 452px;
  width: 300px;
}
.header {
  font: var(--heading--text-2xl);
  color: var(--color-main);
  margin: 20px 0;
}
.btn {
  border-radius: 20px;
  color: var(--color-main);
  border-color: #006f1c;
  width: 150px;
  padding: 10px;
  margin-top: 20px;
  border-width: 1px;
}
</style>
