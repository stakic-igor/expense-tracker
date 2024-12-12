<script setup>
import ExpenseListItem from './ExpenseListItem.vue';
const items = [
    {
        id: 1,
        name: 'item 1',
        amount: 100
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
    }
]
</script>
<template>
    <div>expense list</div>
    <ul>
        <li v-for="item in items" :key="item.id">
            <ExpenseListItem :name="item.name" :amount="item.amount" />
        </li>
    </ul>
</template>
