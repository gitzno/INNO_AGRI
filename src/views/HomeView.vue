<script setup>
import PartOne from '@/components/Homepage/Part1One.vue'
import PartTwo from '@/components/Homepage/Part2Two.vue'
import Part3Three from '@/components/Homepage/Part3Three.vue'
import Part4Four from '@/components/Homepage/Part4Four.vue'
import Part5Five from '@/components/Homepage/Part5Five.vue'
import Part6Six from '@/components/Homepage/Part6Six.vue'
</script>
<template>
  <div class="homepage">
    <PartOne />
    <PartTwo />
    <Part3Three />
    <Part4Four />
    <Part5Five />
    <Part6Six />
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.homepage {
  position: relative;
  width: 100vw;
  overflow: hidden;
}
</style>
