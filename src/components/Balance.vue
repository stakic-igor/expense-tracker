<script setup>
import { ref, defineProps } from 'vue';

defineProps({
    balance: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <p>balance</p>
    <p>${{ balance }}</p>
</template>
