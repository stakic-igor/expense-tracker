<script setup lang="ts">
import type { Transaction } from '@/types/transaction'

defineProps<{
  item: Transaction
}>()
</script>

<template>
  <section>
    <p>{{ item.description }}</p>
    <p :class="item.type === 'expense' ? 'text-red-500' : 'text-black'">{{ item.amount }}</p>
    <p>{{ item.category }} - {{ item.type }}</p>
  </section>
</template>
