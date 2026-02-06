<script setup lang="ts">
  import TheHeader from '@/components/layout/TheHeader.vue'
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden bg-white dark:bg-gray-900">
    <the-header />
    <main class="flex-1 overflow-hidden">
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <!-- El footer ahora será parte del layout interno si es necesario, lo quitamos del root para ganar espacio vertical de app -->
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
