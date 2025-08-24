<template>
  <div>
    <ThumbNail title="Đây là header" />
    <div class="container--content"></div>
  </div>
</template>
<script>
import ThumbNail from '@/components/ThumbNail.vue'

export default {
  components: {
    ThumbNail,
  },
  data() {
    return {
      newsId: null,
    }
  },
  created() {
    this.newsId = this.$route.params.id
  },
}
</script>
<style scoped>
.container--content {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}
</style>
