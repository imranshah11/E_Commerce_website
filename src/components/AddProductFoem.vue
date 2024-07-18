// components/AddProductForm.vue
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="product.title" type="text" placeholder="Title" required />
    <textarea v-model="product.description" placeholder="Description" required></textarea>
    <input v-model.number="product.price" type="number" placeholder="Price" required />
    <input v-model="product.category" type="text" placeholder="Category" required />
    <input v-model="product.brand" type="text" placeholder="Brand" required />
    <button type="submit">Add Product</button>
  </form>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'AddProductForm',
  emits: ['submit'],
  setup(props, { emit }) {
    const product = reactive({
      title: '',
      description: '',
      price: '',
      category: '',
      brand: ''
    })

    const handleSubmit = () => {
      emit('submit', { ...product })
    }

    return {
      product,
      handleSubmit
    }
  }
})
</script>