// services/auth.js
export const login = (username, password) => {
    // Implement login logic here
    // For demo purposes, we'll just save a dummy token
    localStorage.setItem('token', 'dummy_token')
    localStorage.setItem('user', JSON.stringify({ username }))
  }
  
  export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('token')
  }