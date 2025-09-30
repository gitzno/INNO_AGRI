<template>
  <div class="card">
    <SpeedDial :model="items" direction="up-left" type="quarter-circle" :radius="120"> </SpeedDial>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SpeedDial from 'primevue/speeddial'
const items = ref([
  {
    label: 'Facebook',
    icon: 'pi pi-facebook',
  },
  {
    label: 'Mail',
    icon: 'pi-inbox',
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
  },
  {
    label: 'Upload',
    icon: 'pi pi-upload',
  },
  {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
  },
])
</script>
<script>
export default {
  mounted() {
    document.body.appendChild(this.$el)
  },
}
</script>
<style scoped>
.card {
  z-index: 1000000000000000000000;
  width: 1vw;
  height: 1vh;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 40px;
}
</style>
