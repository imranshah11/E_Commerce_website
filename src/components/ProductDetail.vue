// components/ProductDetail.vue
<template>
  <div class="product-detail">
    <img :src="product.thumbnail" :alt="product.title" />
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <p>Category: {{ product.category }}</p>
    <p>Brand: {{ product.brand }}</p>
    <p>Rating: {{ product.rating }}/5</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductDetail',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
})
</script>
