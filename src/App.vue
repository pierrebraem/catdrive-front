<script setup lang="ts">
import { ref } from "vue"

const count = ref(0)

function increase() {
  return count.value ++
}

function decrease() {
  return count.value --
}
</script>

<template>
  <button @click="increase">
    +
  </button>
  {{ count }}
  <button @click="decrease">
    -
  </button>
</template>
