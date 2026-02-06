<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto"
  >
    <div
      class="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <p class="text-gray-600 dark:text-gray-400 text-sm">
        © {{ currentYear }} Vue Boilerplate. Built with ❤️ and GitHub Copilot.
      </p>
      <div class="flex items-center gap-6">
        <a
          href="https://vuejs.org"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
        >
          Vue.js
        </a>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
        >
          Vite
        </a>
        <a
          href="https://pinia.vuejs.org"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
        >
          Pinia
        </a>
      </div>
    </div>
  </footer>
</template>
