<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import type { User } from './types/users'

const result: Ref<User | undefined> = ref()

async function getTestDb() {
  const response = await fetch(import.meta.env.VITE_API_URL + '/test-db')
  const data: User[] = await response.json()
  result.value = data[0]
}

onMounted(async () => {
  await getTestDb()
})
</script>
<template>
  {{ result?.firstname }}
  {{ result?.lastname }}
  {{ result?.email }}
</template>
