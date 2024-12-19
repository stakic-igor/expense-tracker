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
    <div>expense list</div>
    <ul>
        <li v-for="item in items" :key="item.id">
            <ExpenseListItem :name="item.name" :amount="item.amount" />
        </li>
    </ul>
</template>
