<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['deletedItem']);

const deleteItem = () => {
    emit('deletedItem', props.id);
}

</script>
<template>
    <div 
        class="text-red-500 text-bold w-8 h-8 flex justify-center items-center hover:cursor-pointer hover:bg-red-500 hover:text-white" 
        @click="deleteItem">
        <i class="pi pi-trash text-sm"></i>
    </div>
    <div 
        class="text-sm border-l-2 px-1 h-8 text-gray-800 py-2 bg-gray-100 grow"
        :class="amount < 0 ? 'border-red-500' : 'border-green-500'">{{ name }}: <i class="pi pi-dollar text-xs"></i> {{ amount }}
    </div>
</template>
