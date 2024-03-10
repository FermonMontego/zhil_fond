<script setup lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const dataSelectedPerson = computed(() => {
  return store.state.selectedUser;
})

</script>

<template>
  <div class="user-information">
    <div class="user-information__data" v-if="Boolean(Object.keys(dataSelectedPerson).length)">
      <div class="user-information__data__image">
        <img src="../../assets/icons/empty-picture-large.svg" alt="person picture">
      </div>
      <div class="user-information__data__wrapper">
        <p class="user-information__data__wrapper__name">
          {{ dataSelectedPerson.name }}
        </p>
        <p class="user-information__data__wrapper__email">
          email: <span>{{ dataSelectedPerson.email }}</span>
        </p>
        <p class="user-information__data__wrapper__phone">
          phone: <span>{{ dataSelectedPerson.phone }}</span>
        </p>

        <h3 class="user-information__data__wrapper__title">О себе:</h3>

        <span class="user-information__data__wrapper__about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
    </div>
    <p v-else class="user-information__tip">Выберите сотрудника, чтобы посмотреть его профиль</p>
  </div>
</template>

<style scoped>

</style>
