<script setup lang="ts">
import Main from './layout/main/index.vue'
import Menu from './layout/menu/index.vue'
</script>

<template>
  <div class="layout-box">
  <Menu></Menu>
  <Main></Main>
</div>

</template>

<style scoped>
.layout-box {
  display: flex;
}
</style>
