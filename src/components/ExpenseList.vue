<script setup>
import { defineProps } from 'vue';
import ExpenseListItem from './ExpenseListItem.vue';

defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <h3 class="text-xl my-4 text-gray-800">Expense list</h3>
    <ul>
        <li v-for="item in items" :key="item.id">
            <ExpenseListItem :name="item.name" :amount="item.amount" />
        </li>
    </ul>
</template>
