<script setup>

function handleSubmit() {
    console.log('submit');
}
</script>

<template>
    <h3 class="text-xl my-4 text-gray-800">Add income or expense</h3>
    <form
        @submit.prevent="handleSubmit"
    >
        <div>
            <label for="amount" class="block">Amount</label>
            <input type="text" id="amount" class="border border-blue-500 w-full"/>
        </div>
        <div>
            <label for="note" class="block">Note:</label>
            <input type="text" id="note" class="border border-blue-500 w-full" />
        </div>
        <div>
            <button type="submit" class="p-2 bg-blue-500 text-white rounded-full w-full">Submit</button>
        </div>
    </form>
</template>
