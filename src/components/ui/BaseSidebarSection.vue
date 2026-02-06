<script setup lang="ts">
  import { ref } from 'vue'

  interface Item {
    label: string
    href?: string
  }
  interface Props {
    title: string
    items?: Item[]
    defaultOpen?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    items: [],
    defaultOpen: false,
  })

  const emit = defineEmits<{ (e: 'select', item: Item): void }>()
  const open = ref<boolean>(props.defaultOpen ?? false)

  function toggle() {
    open.value = !open.value
  }

  function onItemClick(item: Item) {
    emit('select', item)
  }
</script>

<template>
  <div class="w-full">
    <button
      class="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
      :aria-expanded="String(open)"
      @click="toggle"
    >
      <span>{{ title }}</span>
      <svg
        :class="{ 'transform rotate-90': open }"
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>

    <transition name="fade">
      <ul
        v-show="open"
        class="mt-2 space-y-1 px-2"
      >
        <li
          v-for="(it, i) in items"
          :key="i"
        >
          <button
            class="w-full text-left px-3 py-1 text-sm text-gray-600 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
            @click="onItemClick(it)"
          >
            {{ it.label }}
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.18s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
