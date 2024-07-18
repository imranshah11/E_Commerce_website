// views/Login.vue
<template>
  <div class="login">
    <h2>Login</h2>
    <LoginForm @login="handleLogin" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vue'
import { useRouter } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'

export default defineComponent({
  name: 'Login',
  components: {
    LoginForm
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const handleLogin = ({ username, password }) => {
      store.dispatch('login', { username, password })
      router.push('/')
    }

    return {
      handleLogin
    }
  }
})
</script>