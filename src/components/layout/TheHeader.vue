<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { useI18n } from 'vue-i18n'

  const { locale, t } = useI18n()

  function toggleLocale() {
    locale.value = locale.value === 'en' ? 'es' : 'en'
    localStorage.setItem('user-locale', locale.value)
  }
</script>

<template>
  <header
    class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 h-16 flex-shrink-0"
  >
    <div class="container mx-auto px-4 h-full flex items-center justify-between">
      <router-link
        to="/"
        class="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity"
      >
        <span class="text-2xl">🚀</span>
        <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Vue Boilerplate
        </span>
      </router-link>

      <nav class="flex items-center gap-6">
        <router-link
          to="/"
          class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm"
          active-class="!text-blue-600 dark:!text-blue-400"
        >
          {{ t('common.home') }}
        </router-link>
        <router-link
          to="/about"
          class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm"
          active-class="!text-blue-600 dark:!text-blue-400"
        >
          {{ t('common.about') }}
        </router-link>

        <div class="h-4 w-px bg-gray-200 dark:bg-gray-800"></div>

        <button
          @click="toggleLocale"
          class="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400"
        >
          <span>🌐</span>
          {{ locale === 'en' ? 'English' : 'Español' }}
        </button>
      </nav>
    </div>
  </header>
</template>
