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
    <label for="description">Description:</label>
    <input type="text" id="description" name="description" v-model="description" />

    <label for="amount">Amount:</label>
    <input type="number" id="amount" name="amount" v-model="amount" min="0" />

    <label for="type">Transaction type</label>
    <select v-model="transactionType" id="type" name="type">
      <option v-for="type in selectTransactionTypes" :key="type" :value="type">{{ type }}</option>
    </select>

    <label for="category">Transaction category</label>
    <select v-model="category" id="category" name="category">
      <option v-for="opt in selectCategoryOptions" :key="opt" :value="opt">{{ opt }}</option>
    </select>

    <button type="submit">save tranasaction</button>
  </form>
</template>
