<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { authStore } from "./modules/auth/stores/auth";
const checkAuth = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'))
  if (tokens) {
    authStore().user.token = tokens.token;
    authStore().user.refreshToken = tokens.refreshToken;
    authStore().user.expiresIn = tokens.expiresIn;
  }
}
checkAuth();
</script>