<script setup>
import { defineProps, defineEmits } from 'vue';
import ExpenseListItem from './ExpenseListItem.vue';

defineProps({
    items: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['passDeletedItems']);

const passDeletedItem = (id) => {
    emit('passDeletedItems', id);
}
</script>
<template>
    <h3 class="text-xl my-4 text-gray-800">Transaction History</h3>
    <div v-for="item in items" :key="item.id" class="flex flex-row items-center mb-2">
        <ExpenseListItem 
            :name="item.name" 
            :amount="item.amount" 
            :id="item.id" 
            @deletedItem="passDeletedItem"
        />
    </div>
    <div class="flex items-center justify-end">
        <span class="text-gray-600 text-xs mr-2">legend: </span>
        <div class="rounded bg-red-500 w-2 h-2 mr-1"></div><span class="text-gray-400 text-xs mr-2">expense</span>
        <div class="rounded bg-green-500 w-2 h-2 mr-1"></div><span class="text-gray-400 text-xs">income</span>
    </div>
</template>
