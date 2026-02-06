<script setup lang="ts">
  // About page with project information
</script>

<template>
  <div class="max-w-3xl mx-auto space-y-8">
    <h1 class="text-4xl font-bold text-center mb-8">About This Boilerplate</h1>

    <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <h2 class="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
        Project Structure
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        This Vue 3 boilerplate is designed to help you quickly start new projects with best
        practices already configured. It includes:
      </p>

      <ul class="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>
          <strong class="text-gray-900 dark:text-white">Vite</strong> - Next-generation build tool
          for fast development
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white">Vue 3</strong> - Composition API with script
          setup
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white">TypeScript</strong> - Strict type checking
          enabled
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white">Pinia</strong> - State management with
          composition API
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white">Vue Router</strong> - File-based routing
          with lazy-loading
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white">Tailwind CSS</strong> - Utility-first CSS
          framework
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white">ESLint + Prettier</strong> - Code quality
          and formatting
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white">Vitest</strong> - Fast unit testing
          framework
        </li>
      </ul>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <h2 class="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
        GitHub Copilot Integration
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        This boilerplate includes special configurations for GitHub Copilot:
      </p>

      <ul class="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>
          <strong class="text-gray-900 dark:text-white">.github/agents/</strong> - Custom AI agents
          for Vue development
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white">.github/skills/</strong> - Reusable skills
          for common tasks
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white">.github/instructions/</strong> -
          Project-specific coding guidelines
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white">.github/prompts/</strong> - Ready-to-use
          prompt templates
        </li>
      </ul>
    </div>
  </div>
</template>
