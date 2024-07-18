// views/EditProduct.vue
<template>
  <div v-if="product" class="edit-product">
    <h2>Edit Product</h2>
    <EditProductForm :product="product" @submit="handleSubmit" />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EditProductForm from '../components/EditProductForm.vue'
import { getProduct, updateProduct } from '../Services/api'

export default defineComponent({
  name: 'EditProduct',
  components: {
    EditProductForm
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const product = ref(null)

    const fetchProduct = async () => {
      try {
        const response = await getProduct(route.params.id)
        product.value = response.data
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }

    const handleSubmit = async (updatedProduct) => {
      try {
        await updateProduct(product.value.id, updatedProduct)
        router.push({ name: 'ProductDetail', params: { id: product.value.id } })
      } catch (error) {
        console.error('Error updating product:', error)
      }
    }

    onMounted(fetchProduct)

    return {
      product,
      handleSubmit
    }
  }
})
</script>