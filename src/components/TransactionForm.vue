<script setup lang="ts">
import { ref } from 'vue'
import type { TransactionType, Category } from '@/types/transaction.ts'

const description = ref('')
const amount = ref(0)
const transactionType = ref<TransactionType>('income')
const category = ref<Category>('other')

const selectTransactionTypes: TransactionType[] = ['income', 'expense']
const selectCategoryOptions: Category[] = [
  'food',
  'transport',
  'entertainment',
  'utilities',
  'other',
]

const emit = defineEmits<{
  'add-transaction': [
    payload: {
      description: string
      amount: number
      type: TransactionType
      category: Category
    },
  ]
}>()

const handleSubmit = () => {
  emit('add-transaction', {
    description: description.value,
    amount: amount.value,
    type: transactionType.value,
    category: category.value,
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <label for="description" class="block mb-1">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        v-model="description"
        required
        class="border rounded px-2 py-1 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="amount" class="block mb-1">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        v-model="amount"
        min="0"
        class="border rounded px-2 py-1 w-full"
      />
    </div>
    <div class="mb-4">
      <label for="type" class="block mb-1">Transaction type</label>
      <select
        v-model="transactionType"
        id="type"
        name="type"
        class="border rounded px-2 py-1 w-full"
      >
        <option v-for="type in selectTransactionTypes" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="category" class="block mb-1">Transaction category</label>
      <select
        v-model="category"
        id="category"
        name="category"
        class="border rounded px-2 py-1 w-full"
      >
        <option v-for="opt in selectCategoryOptions" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
      save tranasaction
    </button>
  </form>
</template>
