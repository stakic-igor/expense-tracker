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
    <h3 class="text-xl my-4 text-gray-800">Expense list</h3>
    <div v-for="item in items" :key="item.id" class="flex flex-row items-center mb-2">
        <ExpenseListItem 
            :name="item.name" 
            :amount="item.amount" 
            :id="item.id" 
            @deletedItem="passDeletedItem"
        />
    </div>
</template>
