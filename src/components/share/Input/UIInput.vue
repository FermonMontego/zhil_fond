<script setup lang="ts">
defineProps<
    {
      type: string;
      disabled?: boolean;
      label?: string;
      modelValue: string;
      placeholder?: string;
    }
>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <label class="ui-input-wrapper">
    <span v-if="Boolean(label)">{{ label }}</span>
    <input
        :value="modelValue"
        :placeholder="placeholder ?? 'Введите значение'"
        :type="type"
        :disabled="disabled"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </label>
</template>

<style scoped lang="scss">
.ui-input-wrapper {
  display: block;
  input {
    border: 1px solid #E9ECEF;
    height: 46px;
    outline: none;
    border-radius: 8px;
    width: 100%;

    padding: 0 16px;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      color: #76787D;
    }
  }
}
</style>
