<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-12 py-12 px-6">
    <div class="text-center space-y-4">
      <h1 class="text-5xl font-black tracking-tight text-gray-900 dark:text-white">
        {{ t('about.title') }}
      </h1>
      <p class="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
        {{ t('about.structureDesc') }}
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow"
      >
        <div class="flex items-center gap-3 mb-6">
          <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-2xl">🏗️</div>
          <h2 class="text-2xl font-black text-gray-900 dark:text-white">
            {{ t('about.structureTitle') }}
          </h2>
        </div>

        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">✓</span>
            <div>
              <strong class="text-gray-900 dark:text-white block">Vite</strong>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{
                t('about.viteDesc')
              }}</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">✓</span>
            <div>
              <strong class="text-gray-900 dark:text-white block">Vue 3</strong>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ t('about.vueDesc') }}</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">✓</span>
            <div>
              <strong class="text-gray-900 dark:text-white block">Pinia</strong>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{
                t('about.piniaDesc')
              }}</span>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">✓</span>
            <div>
              <strong class="text-gray-900 dark:text-white block">Vitest</strong>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{
                t('about.vitestDesc')
              }}</span>
            </div>
          </li>
        </ul>
      </div>

      <div
        class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow"
      >
        <div class="flex items-center gap-3 mb-6">
          <div class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-2xl">🤖</div>
          <h2 class="text-2xl font-black text-gray-900 dark:text-white">
            {{ t('about.copilotTitle') }}
          </h2>
        </div>

        <p class="text-gray-500 dark:text-gray-400 mb-6 text-sm">
          {{ t('about.copilotDesc') }}
        </p>

        <ul class="space-y-4">
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            <span class="text-gray-700 dark:text-gray-300 font-medium">{{
              t('about.copilotAgents')
            }}</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            <span class="text-gray-700 dark:text-gray-300 font-medium">{{
              t('about.copilotSkills')
            }}</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            <span class="text-gray-700 dark:text-gray-300 font-medium">{{
              t('about.copilotInstructions')
            }}</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            <span class="text-gray-700 dark:text-gray-300 font-medium">{{
              t('about.copilotPrompts')
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
