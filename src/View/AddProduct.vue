// views/AddProduct.vue
<template>
  <div class="add-product">
    <h2>Add New Product</h2>
    <AddProductForm @submit="handleSubmit" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import AddProductForm from '../components/AddProductForm.vue'
import { addProduct } from '../services/api'

export default defineComponent({
  name: 'AddProduct',
  components: {
    AddProductForm
  },
  setup() {
    const router = useRouter()

    const handleSubmit = async (product) => {
      try {
        await addProduct(product)
        router.push('/')
      } catch (error) {
        console.error('Error adding product:', error)
      }
    }

    return {
      handleSubmit
    }
  }
})
</script>