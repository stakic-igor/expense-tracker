<script setup lang="ts">
import { ref } from 'vue'
import type { TransactionType, Category } from '@/types/transaction.ts'

const description = ref('')
const amount = ref(0)
const TransactionType = ref<TransactionType>('income')
const Category = ref<Category>('other')

const selectTransactionType: TransactionType[] = ['income', 'expense']
const selectCategoryOptions: Category[] = [
  'food',
  'transport',
  'entertainment',
  'utilities',
  'other',
]
</script>

<template>
  <form>
    <label for="description">Description:</label>
    <input type="text" id="description" name="description" v-model="description" />

    <label for="amount">Amount:</label>
    <input type="number" id="amount" name="amount" v-model="amount" />

    <label for="type">Transaction type</label>
    <select v-model="TransactionType" id="type" name="type">
      <option v-for="type in selectTransactionType" :key="type" :value="type">{{ type }}</option>
    </select>

    <label for="category">Transaction category</label>
    <select v-model="Category" id="category" name="category">
      <option v-for="opt in selectCategoryOptions" :key="opt" :value="opt">{{ opt }}</option>
    </select>

    <button type="submit">save tranasaction</button>
  </form>
</template>
