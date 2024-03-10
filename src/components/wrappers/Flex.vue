<script setup lang="ts">
import {CSSProperties} from "vue";

interface Props {
  styles?: CSSProperties
}

const props = withDefaults(defineProps<Props>(), {
  styles() {
    return {
      display: 'flex',
      flexDirection: 'column',
      gap: '26px',
    }
  }
})

</script>

<template>
  <div :style="props.styles">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
