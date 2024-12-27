<script setup>
import { ref, watch } from 'vue';

const filterTransactions = ref(['income', 'expense']);

const handleFilterTransactions = (event) => {
    console.log(event.target.value);
}

console.log(filterTransactions.value)

</script>

<template>
    <div class="flex items-center">
        <p class="mr-2">Filter: </p>
        <label for="income" class="flex items-center mr-4">
            <input 
                type="checkbox" 
                class="mr-1" 
                value="income" 
                id="income" 
                v-model="filterTransactions" 
                @change="handleFilterTransactions" 
                :checked="filterTransactions.includes('income')">
            Income
        </label>
        <label for="expense" class="flex items-center">
            <input 
                type="checkbox" 
                class="mr-1" 
                value="expense" 
                id="expense" 
                v-model="filterTransactions" 
                @change="handleFilterTransactions" 
                :checked="filterTransactions.includes('expense')">
            Expense
        </label>
    </div>
</template>
