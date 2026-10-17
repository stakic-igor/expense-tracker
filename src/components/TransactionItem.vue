<script setup lang="ts">
import type { Transaction } from '@/types/transaction'

defineProps<{
  item: Transaction
}>()
</script>

<template>
  <section
    class="rounded-xl shadow p-2 mb-2"
    :class="item.type === 'expense' ? 'bg-red-300' : 'bg-blue-300'"
  >
    <p>{{ item.description }}</p>
    <p :class="item.type === 'expense' ? 'text-red-500' : 'text-black'">{{ item.amount }}</p>
    <p>{{ item.category }} - {{ item.type }}</p>
  </section>
</template>
