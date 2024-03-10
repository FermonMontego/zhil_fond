<script setup lang="ts">

import {useStore} from "vuex";

const store = useStore();

defineProps<{
  dataPerson: {
    name: string;
    email: string;
  }
}>()

function selectedUser(data: any) {
  store.commit('SET_SELECTED_PERSON', data);
}

</script>

<template>
  <div class="item-found-person" @click="selectedUser(dataPerson)">
    <div class="item-found-person__wrapper-picture">
      <img src="../../assets/icons/empty-picture.svg" alt="person picture">
    </div>
    <div class="item-found-person__wrapper-information">
      <p>{{ dataPerson.name }}</p>
      <span>{{ dataPerson.email }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item-found-person {
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 0 10px 0 #0000001A;
  border-radius: 10px;

  cursor: pointer;

  &__wrapper-information {
    p {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 5px;

      transition: .15s all ease-in-out;

      max-width: 150px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    span {
      font-weight: 400;
      font-size: 14px;
      display: block;
      max-width: 150px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  &:hover {
    background: #E0E0E0;

    .item-found-person__wrapper-information {
      p {
        transform: translateX(10px);
      }
    }

  }

}
</style>
