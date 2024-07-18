<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>
<style>
/* Add your global styles here */

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

h2 {
  color: #333;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6b;
}

form {
  max-width: 400px;
  margin: auto;
}

form div {
  margin-bottom: 15px;
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input,
form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>