<script setup lang="ts">
  import BaseButton from '@/components/ui/BaseButton.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function goHome(): void {
    router.push({ name: 'home' })
  }
</script>

<template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <div class="text-center">
      <span
        class="text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
      >
        404
      </span>
      <h1 class="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <base-button @click="goHome">Go Home</base-button>
    </div>
  </div>
</template>
