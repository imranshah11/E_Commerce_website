// views/CategoryView.vue
<template>
  <div class="category-view">
    <h2>{{ category }} Products</h2>
    <ProductList :products="products" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import { getProductsByCategory } from '../services/api'

export default defineComponent({
  name: 'CategoryView',
  components: {
    ProductList
  },
  setup() {
    const route = useRoute()
    const products = ref([])
    const category = ref('')

    const fetchProducts = async () => {
      category.value = route.params.category
      try {
        const response = await getProductsByCategory(category.value)
        products.value = response.data.products
      } catch (error) {
        console.error('Error fetching products by category:', error)
      }
    }

    onMounted(fetchProducts)

    watch(() => route.params.category, fetchProducts)

    return {
      products,
      category
    }
  }
})
</script>