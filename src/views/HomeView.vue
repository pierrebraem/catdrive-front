<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToLogin() {
    router.push('/login')
}
</script>
<template>
  <h1 class="text-center">
    Home page
  </h1>
  <div class="d-flex justify-center">
    <v-btn
      class="text-center"
      @click="goToLogin"
    >
      Login
    </v-btn>
  </div>
</template>