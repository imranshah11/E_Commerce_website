// components/LoginForm.vue
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="username" type="text" placeholder="Username" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginForm',
  emits: ['login'],
  setup(props, { emit }) {
    const username = ref('')
    const password = ref('')

    const handleSubmit = () => {
      emit('login', { username: username.value, password: password.value })
    }

    return {
      username,
      password,
      handleSubmit
    }
  }
})
</script>
