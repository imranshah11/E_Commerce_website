// components/ProductList.vue
<template>
  <div class="product-list">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ProductCard from './ProductCard.vue'

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
})
</script>