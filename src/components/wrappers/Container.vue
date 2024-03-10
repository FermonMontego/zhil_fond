<script setup lang="ts">
defineProps<{
  width: '1920' | '1440' | '1266' | '1100';
}>()
</script>

<template>
  <div :class="`container-${width}`">
    <slot></slot>
  </div>
</template>

<style scoped>
.container-1920 {
  max-width: calc(1920px - 48px);
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}
.container-1440 {
  max-width: calc(1440px - 48px);
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}
.container-1266 {
  max-width: calc(1266px - 48px);
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}
.container-1100 {
  max-width: calc(1100px - 48px);
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}
</style>
