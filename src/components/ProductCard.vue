// components/ProductCard.vue
<template>
  <div class="product-card">
    <img :src="product.thumbnail" :alt="product.title" />
    <h3>{{ product.title }}</h3>
    <p>${{ product.price }}</p>
    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">View Details</router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
})
</script>
