<script setup lang="ts">
const test = NaN

function calculateA(price) {
  const tax = price * 0.2
  return price + tax
}

function calculateB(price) {
  const tax = price * 0.2
  return price + tax
}

function calculateC(price) {
  const tax = price * 0.2
  return price + tax
}

function calculateD(price) {
  const tax = price * 0.2
  return price + tax
}
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a
      href="https://vuejs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >vuejs.org</a> to read the
    documentation
    {{ test }}
    {{ calculateA(1) }}
    {{ calculateB(2) }}
    {{ calculateC(3) }}
    {{ calculateD(4) }}
  </p>
</template>

<style scoped></style>
