<script setup>

function handleSubmit() {
    console.log('submit');
}
</script>

<template>
    <h3 class="text-xl my-4 text-gray-800">Add income or expense</h3>
    <p class="text-xs text-gray-600 mb-6"><i class="pi pi-info-circle text-xs mr-1"></i>Enter the total amount of the expense. 
        Please ensure that you enter the correct amount to accurately track your expenses. For expenses, add '-' as prefix.<br />
        Add a brief description or note about the expense to help you remember its purpose or provide additional context.
    </p>
    <form
        @submit.prevent="handleSubmit"
    >
        <div class="mb-4">
            <label for="amount" class="block">Amount</label>
            <input 
                type="text" 
                id="amount" 
                class="px-4 py-2 rounded-sm border border-blue-500 w-full"
                placeholder="Enter an amount, e.g. 500 for income or -500 for expense"    
            />
        </div>
        <div>
            <label for="note" class="block">Note</label>
            <input 
                type="text" 
                id="note" 
                class="px-4 py-2 rounded-sm border border-blue-500 w-full" 
                placeholder="Enter a note..."    
            />
        </div>
        <div>
            <button 
                type="submit" 
                class="p-2 bg-blue-500 text-white rounded-full w-full mt-4 mb-8">Submit</button>
        </div>
    </form>
</template>
