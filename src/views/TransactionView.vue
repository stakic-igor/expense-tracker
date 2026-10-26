<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Transaction, ExpenseTransaction, IncomeTransaction } from '@/types/transaction'
import { calculateBalance } from '@/utils/transactionsUtils'
import TransactionItem from '@/components/TransactionItem.vue'
import TransactionForm from '@/components/TransactionForm.vue'
import TransactionStatistic from '@/components/TransactionStatistic.vue'
import TransactionEmpty from '@/components/TransactionEmpty.vue'
import TransactionPagination from '@/components/TransactionPagination.vue'

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

const addTransaction = (
  payload: {
    description: string
    amount: number
  } & (ExpenseTransaction | IncomeTransaction),
) => {
  if (payload.type === 'income') {
    transactions.value.push({
      id: uuidv4(),
      description: payload.description,
      amount: payload.amount,
      type: payload.type,
      category: payload.category,
    })
  } else {
    transactions.value.push({
      id: uuidv4(),
      description: payload.description,
      amount: payload.amount,
      type: payload.type,
      category: payload.category,
    })
  }
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

const currentPage = ref(0)
const itemsPerPage = ref(5)

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value)
const endIndex = computed(() => startIndex.value + itemsPerPage.value)

const paginatedTransactions = computed(() =>
  transactions.value.slice(startIndex.value, endIndex.value),
)

const totalPages = computed(() => {
  return Math.ceil(transactions.value.length / itemsPerPage.value)
})

const paginationPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const paginationNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

watch(totalPages, (newTotalPages) => {
  if (transactions.value.length === 0) {
    currentPage.value = 0
  } else if (currentPage.value > newTotalPages) {
    currentPage.value = newTotalPages
  } else if (transactions.value.length > 0 && currentPage.value === 0) {
    currentPage.value = 1
  }
})

const pageNumbers = computed(() => {
  return Array.from({ length: totalPages.value }, (_, i) => i + 1)
})

const getPage = (item: number) => {
  currentPage.value = item
}

const handleDelete = (id: string) => {
  transactions.value = transactions.value.filter((item) => item.id !== id)
}

const balanceValue = computed(() => calculateBalance(transactions.value))
</script>

<template>
  <h1 class="font-bold text-2xl mb-4">Expense Tracker</h1>
  <section>
    <TransactionStatistic
      :totalIncome="totalIncome"
      :totalExpenses="totalExpenses"
      :balance="balanceValue"
    />
  </section>
  <TransactionEmpty v-if="transactions.length === 0" />
  <TransactionItem
    v-else
    v-for="item in paginatedTransactions"
    :key="item.id"
    :item="item"
    @deleteItem="handleDelete(item.id)"
  />
  <TransactionForm @add-transaction="addTransaction" />
  <TransactionPagination
    :currentPage="currentPage"
    :totalPages="totalPages"
    :pageNumbers="pageNumbers"
    :paginationPreviousPage="paginationPreviousPage"
    :paginationNextPage="paginationNextPage"
    :getPage="getPage"
  />
</template>
