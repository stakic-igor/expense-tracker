<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    balanceTotal: {
        type: Number,
        required: true
    }
})

const date = new Date();
const today = date.toISOString().slice(0, 10);

</script>

<template>
    <!-- TODO: primitive for now, format date to dd/mm/yyyy -->
     <div class="radius p-2 bg-slate-200">
         <p class="text-gray-600">Balance on: <span class="text-xs text-gray-600">{{ today }}</span></p> 
         <p class="text-2xl font-bold text-gray-800"><i class="pi pi-dollar"></i>{{ balanceTotal }}</p>
     </div>
</template>
