<template>
  <div class="min-h-screen flex items-center justify-center py-12">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <div class="flex justify-center mb-4">
          <div class="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11.701a9 9 0 1117.89.299 9 9 0 01-17.89.299z"/>
            </svg>
          </div>
          <span class="font-poppins font-bold text-2xl text-primary-600 ms-3">Chisom's Kitchen</span>
        </div>
        <h1 class="font-poppins font-bold text-2xl text-gray-800">Welcome Back</h1>
        <p class="text-gray-600 mt-1">Sign in to your account</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input v-model="form.email" type="email" class="input-field" placeholder="you@example.com" required />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input v-model="form.password" type="password" class="input-field" placeholder="••••••••" required />
        </div>
        <button type="submit" :disabled="loading" class="btn btn-primary w-full">
          <span v-if="loading">Signing in...</span>
          <span v-else>Sign In</span>
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-6">
        Don't have an account?
        <router-link to="/register" class="text-primary-600 hover:text-primary-700 font-medium">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useUiStore } from '../stores/ui'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const uiStore = useUiStore()

const { loading, isAuthenticated } = authStore

const form = ref({
  email: '',
  password: '',
})

const handleLogin = async () => {
  const { success, error } = await authStore.login(form.value.email, form.value.password)
  if (success) {
    uiStore.addToast('Logged in successfully', 'success')
    const redirect = route.query.redirect || '/'
    router.push(redirect)
  } else {
    uiStore.addToast('Login failed: ' + error, 'error')
  }
}
</script>
