<template>
  <div>
    <img class="lg" src="@/assets/logos/logo_INNO.svg" />
    <img class="md" src="@/assets/logos/INNO-AGRI_LOGO.svg">
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.md {
  display: none;
}

@media screen and (max-width: 1300px) {
  .lg {
    display: none;
  }
  .md {
    display: block;
  }
}
</style>
