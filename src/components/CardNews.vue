<template>
  <Card class="card" style="width: 100%; height: 400px; overflow: hidden">
    <template #header>
      <img
        alt="user header"
        src="https://mekongasean.vn/stores/news_dataimages/2024/112024/15/10/in_article/croped/medium/thaco-agri-tuyen-dung-hang-chuc-nghin-nhan-su-trong-nam-2024-2025-20241115103953.jpg?241115014836"
      />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
      <p
        class="m-0"
        style="
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          max-height: 60px;
        "
      >
        {{ product.description }}
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
        <Button label="Save" class="w-full" />
      </div>
    </template>
  </Card>
</template>
<script>
import Card from 'primevue/card'
export default {
  components: {
    Card,
  },
  name: 'CardNews',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      layout: 'grid',
    }
  },
  methods: {},
}
</script>
<style scoped>
.card {
  padding: 0 0 20px 0;
  color: black;
  background-color: aliceblue;
  cursor: pointer;
}
</style>
