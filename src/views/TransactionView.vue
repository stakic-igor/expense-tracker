<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Transaction } from '@/types/transaction'
import type { TransactionType, Category } from '@/types/transaction.ts'
import TransactionItem from '@/components/TransactionItem.vue'
import TransactionForm from '@/components/TransactionForm.vue'

const transactions = ref<Transaction[]>([])

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

const addTransaction = (payload: {
  description: string
  amount: number
  type: TransactionType
  category: Category
}) => {
  transactions.value.push({
    id: uuidv4(),
    description: payload.description,
    amount: payload.amount,
    type: payload.type,
    category: payload.category,
  })
}

watch(
  transactions,
  (newTransaction) => {
    localStorage.setItem('transactions', JSON.stringify(newTransaction))
  },
  {
    deep: true,
  },
)

onMounted(() => {
  const storedTransactions = localStorage.getItem('transactions')
  if (storedTransactions) {
    transactions.value = JSON.parse(storedTransactions)
  }
})
</script>

<template>
  <h1>Transaction View</h1>
  <section class="font-light">
    Income: {{ totalIncome }}| Expense: {{ totalExpenses }} |
    <span class="font-bold">Balance: </span>{{ balance }}
  </section>
  <TransactionItem v-for="item in transactions" :key="item.id" :item="item" />
  <TransactionForm @add-transaction="addTransaction" />
</template>
