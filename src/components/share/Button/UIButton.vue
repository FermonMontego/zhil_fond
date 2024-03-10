<script setup lang="ts">
const props = defineProps<{
  type: 'submit' | 'button' | 'reset' | undefined;
  bodyContent: string;
}>();

defineEmits<{
  (e: 'update-value'): void
}>();
</script>

<template>
    <button :type="props.type" @click="$emit('update-value')">{{props.bodyContent}}</button>
</template>

<style scoped>

</style>
