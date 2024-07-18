// views/Home.vue
<template>
  <div class="home">
    <h1>Welcome to Our E-commerce Store</h1>
    <CategoryList :categories="categories" />
    <ProductList :products="products" />
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :onPageChange="setCurrentPage"
    />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from 'vue'
import ProductList from '../components/ProductList.vue'
import CategoryList from '../components/CategoryList.vue'
import Pagination from '../components/Pagination.vue'
import { getProducts, getCategories } from '../Services/api'

export default defineComponent({
  name: 'Home',
  components: {
    ProductList,
    CategoryList,
    Pagination
  },
  setup() {
    const products = ref([])
    const categories = ref([])
    const currentPage = ref(1)
    const totalProducts = ref(0)
    const productsPerPage = 10

    const totalPages = computed(() => Math.ceil(totalProducts.value / productsPerPage))
    const fetchProducts = async () => {
      try {
        const response = await getProducts(productsPerPage, (currentPage.value - 1) * productsPerPage)
        products.value = response.data.products
        totalProducts.value = response.data.total
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    const fetchCategories = async () => {
      try {
        const response = await getCategories()
        categories.value = response.data
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    const setCurrentPage = (page) => {
      currentPage.value = page
      fetchProducts()
    }

    onMounted(() => {
      fetchProducts()
      fetchCategories()
    })

    return {
      products,
      categories,
      currentPage,
      totalPages,
      setCurrentPage
    }
  }
})
</script>