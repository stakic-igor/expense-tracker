<script setup lang="ts">
import type { Transaction } from '@/types/transaction'

defineProps<{
  item: Transaction
}>()
</script>

<template>
  <section
    class="flex justify-between items-center rounded-xl shadow p-4 mb-2 bg-linear-to-l"
    :class="item.type === 'expense' ? 'from-red-300 to-red-400' : 'from-emerald-400 to-emerald-500'"
  >
    <div>
      <p class="text-white font-bold text-lg">{{ item.description }}</p>
      <p class="text-sm capitalize">{{ item.category }}</p>
    </div>
    <p class="text-white font-bold text-xl">
      {{ item.type === 'expense' ? '-' : '+' }}${{ item.amount }}
    </p>
  </section>
</template>
