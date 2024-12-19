<script setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

</script>
<template>
    <div 
        class="border-l-2 px-1 text-gray-800"
        :class="amount < 0 ? 'border-red-500' : 'border-green-500'">{{ name }} : $ {{ amount }}
    </div>
</template>
