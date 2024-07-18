// components/CategoryList.vue
<template>
  <div class="category-list">
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories" :key="category">
        <router-link :to="{ name: 'Category', params: { category } }">{{ category }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CategoryList',
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
})
</script>