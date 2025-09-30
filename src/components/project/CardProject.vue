<template>
  <div class="bg_card">
    <div class="card_project" >
      <div class="content_img">
        <img :src="source.img" :alt="source.alt" />
      </div>
      <div class="content_card">
        <div style="margin: 10px 0;">

          {{ type }}
        </div>
        <div class="title_card">{{ source.title }}</div>
        <div class="desc_card">
          {{ source.desc }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    hoverCard(){

    }
  },

  props: {
    type: {
      type: String,
      value: '',
    },
    source: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.bg_card {
}
.card_project:hover {
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
  transition: all 0.3s ease;
}
.card_project {
  cursor: pointer;
  width: 80vw;
  height: 40vh;
  display: flex;
}
.card_project > div {
  width: 50%;
}
.content_img {
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  background-color: red;
}
.content_img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.content_card {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 160px;
}
.title_card {
  margin-bottom: 40px;
  font: var(--heading--text-3xl);
  color: var(--color-main);
}
.desc_card {
  font: var(--content--text-xl);
  color: var(--color-text-2);
}
</style>
