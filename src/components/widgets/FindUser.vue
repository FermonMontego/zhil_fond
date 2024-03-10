<script setup lang="ts">
import Sidebar from "../Sidebar.vue";
import UserInformation from "./UserInformation.vue";
import Logotype from "../share/Logotype.vue";
import UserDropdown from "../share/UserDropdown.vue";
import Flex from "../wrappers/Flex.vue";
</script>

<template>
  <Flex>
    <header class="header">
        <Container width="1266">
          <div class="header__wrapper">
            <Logotype/>
            <UserDropdown/>
          </div>
        </Container>
    </header>
    <main class="main-find-user">
      <Container width="1266">
        <div class="main-find-user__wrapper">
          <Sidebar/>
          <user-information></user-information>
        </div>
      </Container>
    </main>
  </Flex>
</template>

<style scoped>

</style>
