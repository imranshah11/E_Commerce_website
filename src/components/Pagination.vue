// components/Pagination.vue
<template>
  <div class="pagination">
    <button @click="onPageChange(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
    <span>{{ currentPage }} of {{ totalPages }}</span>
    <button @click="onPageChange(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    onPageChange: {
      type: Function,
      required: true
    }
  }
})
</script>