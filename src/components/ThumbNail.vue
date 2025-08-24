<template>
  <div class="bg-thumbnail">
    <div class="thumbnail img_background">
      <img :src="Image" alt="Thumbnail Image" />
    </div>
    <div class="thumbnail">
      {{ title }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Default Title',
    },
    Image: {
      type: String,
      default: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/26/117393.jpg',
    },
  },
}
</script>
<style scoped>
.bg-thumbnail {
  width: 100%;
  background-color: aqua;
  height: 240px;
  color: white;
  font: var(--heading--text-4xl);
  position: relative;
}
.thumbnail {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: rgba(151, 151, 151, 0.377);
}
.img_background{
    z-index: 0;

}
</style>
