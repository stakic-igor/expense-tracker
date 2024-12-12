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
    <div>{{ name }} : $ {{ amount }}</div>
</template>
