<template>
  <aside class="w-64 bg-white shadow-md overflow-y-auto">
    <div class="p-4 border-b">
      <span class="font-poppins font-bold text-xl text-primary-600">Admin Panel</span>
    </div>
    <nav class="p-2">
      <button
        v-for="item in menuItems"
        :key="item.path"
        @click="goTo(item.path)"
        :class="currentPath === item.path ? 'bg-primary-100 text-primary-700' : 'text-gray-700 hover:bg-gray-100'"
        class="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-left transition-colors"
      >
        <component :is="item.icon" class="w-5 h-5" />
        {{ item.name }}
      </button>
    </nav>
  </aside>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const currentPath = computed(() => route.path)

const menuItems = [
  { name: 'Dashboard', path: '/admin', icon: 'DashboardIcon' },
  { name: 'Products', path: '/admin/products', icon: 'ProductsIcon' },
  { name: 'Categories', path: '/admin/categories', icon: 'CategoriesIcon' },
  { name: 'Orders', path: '/admin/orders', icon: 'OrdersIcon' },
]

function goTo(path) {
  router.push(path)
}
</script>