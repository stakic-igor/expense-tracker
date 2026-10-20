<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type {
  TransactionType,
  ExpenseCategory,
  IncomeCategory,
  ExpenseTransaction,
  IncomeTransaction,
} from '@/types/transaction.ts'

const description = ref('')
const amount = ref(1)
const transactionType = ref<TransactionType>('income')
const category = ref<ExpenseCategory | IncomeCategory>('other')

const selectTransactionTypes: TransactionType[] = ['income', 'expense']

const incomeCategoryOptions: IncomeCategory[] = ['salary', 'investment', 'gift', 'other']

const expenseCategoryOptions: ExpenseCategory[] = [
  'food',
  'transport',
  'utilities',
  'entertainment',
  'health',
  'other',
]

const categoryOptions = computed(() => {
  if (transactionType.value === 'income') {
    return incomeCategoryOptions
  } else {
    return expenseCategoryOptions
  }
})

// TransactionBase & (ExpenseTransaction | ExpenseTransaction)

const emit = defineEmits<{
  'add-transaction': [
    payload: {
      description: string
      amount: number
    } & (ExpenseTransaction | IncomeTransaction),
  ]
}>()

function isIncomeCategory(value: ExpenseCategory | IncomeCategory): value is IncomeCategory {
  return incomeCategoryOptions.some((option) => option === value)
}

function isExpenseCategory(value: ExpenseCategory | IncomeCategory): value is ExpenseCategory {
  return expenseCategoryOptions.some((option) => option === value)
}

const handleSubmit = () => {
  if (!validateDescription()) {
    return
  }
  if (!validateAmount()) {
    return
  }
  if (transactionType.value === 'income') {
    if (isIncomeCategory(category.value)) {
      const payload: {
        description: string
        amount: number
      } & IncomeTransaction = {
        description: description.value,
        amount: amount.value,
        type: transactionType.value,
        category: category.value,
      }
      emit('add-transaction', {
        ...payload,
      })
    }
  } else {
    if (isExpenseCategory(category.value)) {
      const payload: {
        description: string
        amount: number
      } & ExpenseTransaction = {
        description: description.value,
        amount: amount.value,
        type: transactionType.value,
        category: category.value,
      }
      emit('add-transaction', {
        ...payload,
      })
    }
  }
}

watch(transactionType, (newTransactionType) => {
  if (newTransactionType === 'income') {
    category.value = 'salary'
  } else {
    category.value = 'food'
  }
})

const descriptionError = ref('')
const amountError = ref('')

const validateDescription = () => {
  if (description.value.trim() === '') {
    descriptionError.value = 'Please, add description.'
    return false
  }
  descriptionError.value = ''
  return true
}

const validateAmount = () => {
  if (amount.value < 1) {
    amountError.value = 'Amount must be at least 1.'
    return false
  }
  amountError.value = ''
  return true
}

watch(description, (newDescription) => {
  if (descriptionError.value && newDescription.trim() !== '') {
    descriptionError.value = ''
  }
})

watch(amount, (newAmount) => {
  if (amountError.value && newAmount >= 1) {
    amountError.value = ''
  }
})
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
        class="border rounded px-2 py-1 w-full"
        :class="descriptionError ? 'border-red-500' : ''"
      />
      <span v-if="descriptionError" class="font-light text-red-500 text-xs">{{
        descriptionError
      }}</span>
    </div>
    <div class="mb-4">
      <label for="amount" class="block mb-1">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        v-model="amount"
        class="border rounded px-2 py-1 w-full"
        :class="amountError ? 'border-red-500' : ''"
      />
      <span v-if="amountError" class="font-light text-red-500 text-xs"> {{ amountError }}</span>
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
        <option v-for="opt in categoryOptions" :key="opt" :value="opt">{{ opt }}</option>
      </select>
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
      save tranasaction
    </button>
  </form>
</template>
