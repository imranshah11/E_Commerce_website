// views/ProductDetailView.vue
<template>
  <div v-if="product" class="product-detail-view">
    <ProductDetail :product="product" />
    <div v-if="isAuthenticated">
      <router-link :to="{ name: 'EditProduct', params: { id: product.id } }">Edit</router-link>
      <button @click="handleDelete">Delete</button>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ProductDetail from '../components/ProductDetail.vue'
import { getProduct, deleteProduct } from '../Services/api'

export default defineComponent({
  name: 'ProductDetailView',
  components: {
    ProductDetail
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const product = ref(null)

    const isAuthenticated = computed(() => store.getters.isAuthenticated)

    const fetchProduct = async () => {
      try {
        const response = await getProduct(route.params.id)
        product.value = response.data
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }

    const handleDelete = async () => {
      if (window.confirm('Are you sure you want to delete this product?')) {
        try {
          await deleteProduct(product.value.id)
          router.push('/')
        } catch (error) {
          console.error('Error deleting product:', error)
        }
      }
    }

    onMounted(fetchProduct)

    return {
      product,
      isAuthenticated,
      handleDelete
    }
  }
})
</script>