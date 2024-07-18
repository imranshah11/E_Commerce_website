// components/SearchBar.vue
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="query" type="text" placeholder="Search products..." />
    <button type="submit">Search</button>
  </form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SearchBar',
  setup() {
    const router = useRouter()
    const query = ref('')

    const handleSubmit = () => {
      if (query.value.trim()) {
        router.push({ name: 'Search', query: { q: query.value } })
      }
    }

    return {
      query,
      handleSubmit
    }
  }
})
</script>