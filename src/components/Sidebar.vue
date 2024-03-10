<script setup lang="ts">
import {ref, watch} from "vue";
import {useStore} from "vuex";
import ItemFoundPerson from "./share/ItemFoundPerson.vue";

const inputValue = ref('');

const store = useStore();

const SEARCH_HAS_BEEN_STARTED = ref(false);

watch(inputValue, () => {
  store.commit('RESET_FOUND_DATA');
})
function handleChange(value: string) {
  SEARCH_HAS_BEEN_STARTED.value = true;
  store.dispatch('searchUsers', value);
}
</script>

<template>
  <aside class="sidebar">
    <h3>Поиск сотрудников</h3>
    <UIInput v-model="inputValue" @change="handleChange(inputValue)" type="text" placeholder="Введите ID или имя" />

    <template v-if="SEARCH_HAS_BEEN_STARTED">
      <h3>Результаты</h3>

      <div v-if="Boolean(store.state.users.length)" class="sidebar__found-persons-box">
        <ItemFoundPerson v-for="(person, index) of store.state.users" :key="index" :dataPerson="person" />
      </div>
      <template v-else>
        <p class="sidebar__result-not-found">ничего не найдено</p>
      </template>
    </template>

  </aside>
</template>

<style scoped>

</style>
