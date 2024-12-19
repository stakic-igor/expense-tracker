<script setup>
import { computed, ref } from 'vue'

import Header from './components/Header.vue'
import Balance from './components/Balance.vue';
import ExpenseList from './components/ExpenseList.vue';
import ExpenseForm from './components/ExpenseForm.vue';

const balance = ref(0);
const items = ref([
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
        amount: -320
    },
    {
        id: 5,
        name: 'item 5',
        amount: 99.99
    }
]);

// function to delete item from items
const handleDeleteItems = (id) => {
    console.log(id);
    items.value = items.value.filter((item) => { return item.id !== id})
}

const balanceTotal = computed(() => {
    return (
        items.value.reduce((acc, currItem) => {
            return acc + currItem.amount
        }, 0)
    )
});
</script>

<template>
  <Header />
  <Balance :balanceTotal="balanceTotal" />
  <ExpenseList :items="items"  @passDeletedItems="handleDeleteItems"/>
  <ExpenseForm />
</template>
