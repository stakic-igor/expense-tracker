<script setup lang="ts">
import ArrowBackIcon from '@/components/icons/ArrowBackIcon.vue'
import ArrowForwardIcon from '@/components/icons/ArrowForwardIcon.vue'

defineProps<{
  currentPage: number
  totalPages: number
  pageNumbers: number[]
  paginationPreviousPage: () => void
  paginationNextPage: () => void
  getPage: (item: number) => void
}>()
</script>
<template>
  <section class="mt-4">
    <div class="flex gap-1.5 justify-center items-center" v-if="totalPages > 1">
      <button
        @click="paginationPreviousPage"
        :disabled="currentPage === 1 || totalPages === 0"
        class="flex items-center justify-center size-9 rounded-lg bg-white shadow text-amber-600 cursor-pointer transition hover:bg-amber-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:shadow-none"
      >
        <ArrowBackIcon />
      </button>
      <button
        v-for="item in pageNumbers"
        :key="item"
        @click="getPage(item)"
        class="size-9 rounded-lg shadow font-semibold cursor-pointer transition"
        :class="
          currentPage === item
            ? 'bg-linear-to-l from-amber-500 to-amber-600 text-white'
            : 'bg-white text-amber-700 hover:bg-amber-100'
        "
      >
        {{ item }}
      </button>
      <button
        @click="paginationNextPage"
        :disabled="currentPage === totalPages"
        class="flex items-center justify-center size-9 rounded-lg bg-white shadow text-amber-600 cursor-pointer transition hover:bg-amber-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:shadow-none"
      >
        <ArrowForwardIcon />
      </button>
    </div>
    <div v-if="totalPages > 0" class="mt-3 text-center font-light text-xs text-gray-500">
      Page {{ currentPage }} of {{ totalPages }}
    </div>
  </section>
</template>
