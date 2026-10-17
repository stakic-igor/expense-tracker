<script setup lang="ts">
defineProps<{
  totalIncome: number
  totalExpenses: number
  balance: number
}>()
</script>

<template>
  <section class="rounded-xl shadow p-4 mb-4 bg-linear-to-l from-cyan-500 to-blue-500">
    <div>
      <p>Total Income: {{ totalIncome }}</p>
    </div>
    <div>
      <p>Total Expenses: {{ totalExpenses }}</p>
    </div>
    <div>
      <p>Balance: {{ balance }}</p>
    </div>
  </section>
</template>
