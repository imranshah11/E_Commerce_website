// components/EditProductForm.vue
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="editedProduct.title" type="text" placeholder="Title" required />
    <textarea v-model="editedProduct.description" placeholder="Description" required></textarea>
    <input v-model.number="editedProduct.price" type="number" placeholder="Price" required />
    <input v-model="editedProduct.category" type="text" placeholder="Category" required />
    <input v-model="editedProduct.brand" type="text" placeholder="Brand" required />
    <button type="submit">Update Product</button>
  </form>
</template>

<script>
import { defineComponent, reactive, watch } from 'vue'

export default defineComponent({
  name: 'EditProductForm',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const editedProduct = reactive({ ...props.product })

    watch(() => props.product, (newProduct) => {
      Object.assign(editedProduct, newProduct)
    })

    const handleSubmit = () => {
      emit('submit', { ...editedProduct })
    }

    return {
      editedProduct,
      handleSubmit
    }
  }
})
</script>