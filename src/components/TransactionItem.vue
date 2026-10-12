<script setup lang="ts">
import type { Transactions } from '@/types/transactions.ts'

defineProps<{
  item: Transactions
}>()
</script>

<template>
  <section>
    <p>{{ item.description }}</p>
    <p :class="item.type === 'expense' ? 'text-red-500' : 'text-black'">{{ item.amount }}</p>
    <p>{{ item.category }} - {{ item.type }}</p>
  </section>
</template>
