<script setup lang="ts">
import {useStore} from "vuex";

const store = useStore();
</script>

<template>
  <Preloader v-if="store.state.globalLoader" />
  <router-view></router-view>
</template>

<style scoped>

</style>
