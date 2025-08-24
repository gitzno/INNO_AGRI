<template>
  <div>
    <ThumbNail title="Tin Tức" />
    <ListNews />
  </div>
</template>
<script>
import ListNews from '@/components/ListNews.vue'
import ThumbNail from '@/components/ThumbNail.vue'

export default {
  name: 'NewsView',
  components: {
    ThumbNail,
    ListNews,
  },
}
</script>
<style lang=""></style>
