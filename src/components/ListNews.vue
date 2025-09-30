<template>
  <div class="cards">
    <div v-for="(item, index) in products" :key="index" style="width: 400px; margin: 1rem">
      <CardNews @mouseenter="hoverEvent($event)" :product="item" @click="hoverClick(index)" />
    </div>
  </div>
</template>

<script>
import { ProductService } from '@/services/ProductService'
import CardNews from './CardNews.vue'
import { gsap } from 'gsap'
export default {
  components: { CardNews },
  data() {
    return {
      products: null,
      layout: 'grid',
      options: ['list', 'grid'],
    }
  },
  mounted() {
    ProductService.getProducts().then((data) => (this.products = data.slice(0, 12)))
  },
  methods: {
    hoverClick(index) {
      this.$router.push({
        name: 'detailNews',
        params: { id: index }, // Assuming the ID is the index + 1
      })
      console.log('hoverClick', index)
    },
    hoverEvent(event) {
      let tagZ = event.target
      gsap.to(tagZ, {
        duration: 0.5,
        scale: 1.1,
        ease: 'power2.out',
        zIndex: 1000,
      })
      tagZ.addEventListener('mouseleave', () => {
        gsap.to(tagZ, {
          duration: 0.5,
          scale: 1,
          ease: 'power2.out',
          zIndex: 1,
        })
      })
    },
    getSeverity(product) {
      switch (product.inventoryStatus) {
        case 'INSTOCK':
          return 'success'

        case 'LOWSTOCK':
          return 'warn'

        case 'OUTOFSTOCK':
          return 'danger'

        default:
          return null
      }
    },
  },
}
</script>
<style scoped>
.cards {
  flex-wrap: wrap;
  border: var(--card-border);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
