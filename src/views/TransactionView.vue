<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Transaction } from '@/types/transaction'
import type { TransactionType, Category } from '@/types/transaction.ts'
import TransactionItem from '@/components/TransactionItem.vue'
import TransactionForm from '@/components/TransactionForm.vue'
import TransactionStatistic from '@/components/TransactionStatistic.vue'

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
</script>

<template>
  <h1>Expense Tracker</h1>
  <section>
    <TransactionStatistic
      :totalIncome="totalIncome"
      :totalExpenses="totalExpenses"
      :balance="balance"
    />
  </section>
  <TransactionItem v-for="item in paginatedTransactions" :key="item.id" :item="item" />
  <TransactionForm @add-transaction="addTransaction" />

  <section>
    <div class="flex items-center">
      <button @click="paginationPreviousPage" :disabled="currentPage === 1 || totalPages === 0">
        Previous
      </button>
      <button
        v-for="item in pageNumbers"
        :key="item"
        @click="getPage(item)"
        class="border py-1 px-2.5 cursor-pointer"
        :class="currentPage === item ? 'text-blue-500 border-amber-800' : ''"
      >
        {{ item }}
      </button>
      <button @click="paginationNextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
    <div v-if="totalPages === 0">No Pages</div>
    <div v-else>Page {{ currentPage }} of {{ totalPages }}</div>
  </section>
</template>
