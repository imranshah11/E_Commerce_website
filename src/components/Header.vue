<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <SearchBar />
        <template v-if="isAuthenticated">
          <router-link to="/add-product">Add Product</router-link>
          <button @click="handleLogout">Logout</button>
        </template>
        <router-link v-else to="/login">Login</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vue'
  import { useRouter } from 'vue-router'
  import SearchBar from './SearchBar.vue'
  
  export default defineComponent({
    name: 'Header',
    components: {
      SearchBar
    },
    setup() {
      const store = useStore()
      const router = useRouter()
  
      const isAuthenticated = computed(() => store.getters.isAuthenticated)
  
      const handleLogout = () => {
        store.dispatch('logout')
        router.push('/')
      }
  
      return {
        isAuthenticated,
        handleLogout
      }
    }
  })
  </script>