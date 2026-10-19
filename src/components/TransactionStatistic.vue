<script setup lang="ts">
defineProps<{
  totalIncome: number
  totalExpenses: number
  balance: number
}>()
</script>

<template>
  <section
    class="grid grid-cols-3 divide-x divide-amber-400 text-center rounded-xl shadow p-4 mb-4 bg-linear-to-l from-amber-500 to-amber-600"
  >
    <div>
      <p class="">Income:</p>
      <p class="font-md text-white font-bold text-xl">${{ totalIncome }}</p>
    </div>
    <div>
      <p class="">Expenses:</p>
      <p class="font-md text-white font-bold text-xl">${{ totalExpenses }}</p>
    </div>
    <div>
      <p class="">Balance:</p>
      <p class="font-md text-white font-bold text-xl">${{ balance }}</p>
    </div>
  </section>
</template>
