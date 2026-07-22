<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHome() {
    router.push('/')
}
</script>
<template>
  <h1 class="text-center">
    Login page
  </h1>
  <div class="d-flex justify-center">
    <v-btn
      class="text-center"
      @click="goToHome"
    >
      Home
    </v-btn>
  </div>
</template>