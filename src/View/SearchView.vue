// views/SearchView.vue
<template>
  <div class="search-view">
    <h2>Search Results</h2>
    <ProductList :products="products" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import { searchProducts } from '../Services/api'

export default defineComponent({
  name: 'SearchView',
  components: {
    ProductList
  },
  setup() {
    const route = useRoute()
    const products = ref([])

    const fetchProducts = async () => {
      const query = route.query.q
      if (query) {
        try {
          const response = await searchProducts(query)
          products.value = response.data.products
        } catch (error) {
          console.error('Error searching products:', error)
        }
      }
    }

    onMounted(fetchProducts)

    watch(() => route.query.q, fetchProducts)

    return {
      products
    }
  }
})
</script>