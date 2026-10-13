<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Transaction } from '@/types/transaction'
import TransactionItem from '@/components/TransactionItem.vue'
import TransactionForm from '@/components/TransactionForm.vue'

const transactions = ref<Transaction[]>([
  {
    id: 1,
    description: 'first new job',
    amount: 500,
    category: 'food',
    type: 'income',
  },
  {
    id: 2,
    description: 'electricity',
    amount: 350,
    category: 'utilities',
    type: 'expense',
  },
  {
    id: 3,
    description: 'sell my dog',
    amount: 200,
    category: 'food',
    type: 'income',
  },
  {
    id: 4,
    description: 'my a cat',
    amount: 200,
    category: 'other',
    type: 'expense',
  },
])

const totalIncome = computed(() => {
  return transactions.value
    .filter((item) => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0)
})

const totalExpenses = computed(() => {
  return transactions.value
    .filter((item) => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0)
})

const balance = computed(() => {
  return transactions.value.reduce((sum, item) => {
    return item.type === 'income' ? sum + item.amount : sum - item.amount
  }, 0)
})
</script>

<template>
  <h1>Transaction View</h1>
  <section class="font-light">
    Income: {{ totalIncome }}| Expense: {{ totalExpenses }} |
    <span class="font-bold">Balance: </span>{{ balance }}
  </section>
  <TransactionItem v-for="item in transactions" :key="item.id" :item="item" />
  <TransactionForm />
</template>
