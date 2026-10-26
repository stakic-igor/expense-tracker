<script setup lang="ts">
import type { Transaction } from '@/types/transaction'
import EditIcon from './icons/EditIcon.vue'
import DeleteIcon from './icons/DeleteIcon.vue'

defineProps<{
  item: Transaction
}>()

const emit = defineEmits<{
  deleteItem: [id: string]
}>()

const deleteItem = (id: string) => {
  console.log('delete item', id)
}
</script>

<template>
  <section
    class="relative flex justify-between items-center rounded-xl shadow p-4 mb-2 bg-linear-to-l overflow-hidden"
    :class="item.type === 'expense' ? 'from-red-300 to-red-400' : 'from-emerald-400 to-emerald-500'"
  >
    <div class="flex flex-row w-[calc(100%-40px)]">
      <div class="grow shrink-0 basis-auto">
        <p class="text-white font-bold text-lg">{{ item.description }}</p>
        <p class="text-sm capitalize">{{ item.category }}</p>
      </div>
      <p class="text-white font-bold text-xl">
        {{ item.type === 'expense' ? '-' : '+' }}${{ item.amount }}
      </p>
    </div>
    <div class="absolute top-0 right-0 flex flex-col w-10 h-full bg-white">
      <button
        disabled
        class="cursor-pointer w-full h-10 flex items-center justify-center hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-current"
      >
        <EditIcon class="w-4" />
      </button>
      <button
        class="cursor-pointer w-full h-10 flex items-center justify-center hover:bg-red-600 hover:text-white"
        @click="$emit('deleteItem', item.id)"
      >
        <DeleteIcon class="w-4" />
      </button>
    </div>
  </section>
</template>
