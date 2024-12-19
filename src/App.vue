<script setup>
import { ref } from 'vue'

import Header from './components/Header.vue'
import Balance from './components/Balance.vue';
import ExpenseList from './components/ExpenseList.vue';
import ExpenseForm from './components/ExpenseForm.vue';

const balance = ref(36000);
const items = [
    {
        id: 1,
        name: 'item 1',
        amount: 500
    },
    {
        id: 2,
        name: 'item 2',
        amount: 200
    },
    {
        id: 3,
        name: 'item 3',
        amount: -200
    },
    {
        id: 4,
        name: 'item 4',
        amount: -340
    }
]
</script>

<template>
  <Header />
  <Balance :balance="balance" />
  <ExpenseList :items="items" />
  <ExpenseForm />
</template>
