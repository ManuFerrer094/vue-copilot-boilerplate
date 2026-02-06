<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import MarkdownIt from 'markdown-it'
  import hljs from 'highlight.js'
  import 'highlight.js/styles/atom-one-dark.css'

  // Initialize Markdown parser with Syntax Highlighting
  const md: MarkdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    highlight: function (str: string, lang: string): string {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `<pre class="hljs"><code>${
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
          }</code></pre>`
        } catch (__) {}
      }
      return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
    },
  })

  // Define types
  interface FileNode {
    name: string
    path: string
    content: string
    type: 'file' | 'home'
  }

  // Load all .github markdown files
  const files = import.meta.glob('../../.github/**/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  })

  // State
  const selectedFile = ref<FileNode | null>(null)
  const isSidebarOpen = ref(true)

  // System Documentation (Home)
  const ecosystemHome: FileNode = {
    name: 'Ecosystem Overview',
    path: 'home',
    type: 'home',
    content: `
# 🚀 GitHub Copilot Ecosystem

Welcome to the **Modern Vue 3 Boilerplate**. This project is specifically designed to work harmoniously with AI agents. 
The configuration inside the \`.github/\` folder is the "brain" that guides GitHub Copilot to write code exactly how we want.

## 📁 The .github/ Structure

### 🤖 Agents
Custom AI personalities focused on specific domains. 
- **Vue Helper**: Your general architect. Use him for planning and big-picture tasks.
- **Component Generator**: A precision tool for creating Atomic UI components with testing.

### 🧠 Skills
Technical "knowledge packs" that teach the AI how we handle specific tasks.
- **Vue Best Practices**: Teaches performance, state management, and anti-patterns.
- **Component Generation**: Defines the exact structure and testing strategy for UI code.

### 📜 Instructions
The project's "bible". It contains the coding standards, naming conventions, and architectural rules that the AI must follow at all times.

### ⚡ Prompts
Pre-defined templates for common tasks. Instead of typing a long prompt, you can use these to quickly generate stores, pages, or refactor code.

---

**Tip:** Select any file from the sidebar to inspect its configuration and understand how to interact with your AI agents.
`,
  }

  // Group by categories
  const categories = computed(() => {
    const cats: Record<string, FileNode[]> = {
      'Getting Started': [ecosystemHome],
    }

    const order = ['agents', 'skills', 'instructions', 'prompts']

    Object.entries(files).forEach(([path, content]) => {
      const cleanPath = path.replace('../../.github/', '')
      const parts = cleanPath.split('/')
      const categoryRaw = parts[0] || 'other'

      const fileName = parts.slice(1).join('/')

      if (!cats[categoryRaw]) {
        cats[categoryRaw] = []
      }

      cats[categoryRaw].push({
        name: fileName,
        path: cleanPath,
        content: content as string,
        type: 'file',
      })
    })

    const sortedCats: Record<string, FileNode[]> = {}
    // First, Getting Started
    sortedCats['Getting Started'] = cats['Getting Started'] || []

    // Then, the defined order
    order.forEach((key) => {
      const catFiles = cats[key]
      if (catFiles) sortedCats[key] = catFiles
    })

    return sortedCats
  })

  onMounted(() => {
    selectedFile.value = ecosystemHome
    if (window.innerWidth < 1024) isSidebarOpen.value = false
  })

  function selectFile(file: FileNode) {
    selectedFile.value = file
    if (window.innerWidth < 768) isSidebarOpen.value = false
  }

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const renderedContent = computed(() => {
    return selectedFile.value ? md.render(selectedFile.value.content) : ''
  })
</script>

<template>
  <div class="h-full flex bg-white dark:bg-gray-950 overflow-hidden relative">
    <!-- Sidebar -->
    <aside
      class="absolute lg:relative z-20 h-full w-full sm:w-80 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-transform duration-300 ease-in-out"
      :class="
        isSidebarOpen
          ? 'translate-x-0'
          : '-translate-x-full lg:translate-x-0 lg:w-0 lg:opacity-0 lg:pointer-events-none'
      "
    >
      <div class="p-6 border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center justify-between">
          <div>
            <h2
              class="font-black text-gray-900 dark:text-white flex items-center gap-2 tracking-tight"
            >
              <span class="text-xl">🛠️</span> CONFIGURATION
            </h2>
            <p class="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">
              Project Architecture
            </p>
          </div>
          <button
            @click="toggleSidebar"
            class="lg:hidden text-gray-500"
          >
            ✕
          </button>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
        <div
          v-for="(files, category) in categories"
          :key="category"
          class="category-group"
        >
          <h3
            class="px-2 mb-3 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]"
          >
            {{ category }}
          </h3>
          <ul class="space-y-1">
            <li
              v-for="file in files"
              :key="file.path"
            >
              <button
                @click="selectFile(file)"
                class="w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-start gap-3 group relative"
                :class="
                  selectedFile?.path === file.path
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                "
              >
                <span class="mt-0.5 opacity-60">
                  {{ file.name === 'Ecosystem Overview' ? '🏠' : '📄' }}
                </span>
                <span class="truncate font-medium leading-tight">{{ file.name }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Profile in Sidebar -->
      <div
        class="p-4 bg-gray-100 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold"
          >
            VB
          </div>
          <div class="min-w-0">
            <p class="text-xs font-bold text-gray-700 dark:text-gray-200 truncate">
              Vue Boilerplate
            </p>
            <p class="text-[10px] text-gray-500">v1.0.0 Stable</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#0d1117] h-full shadow-inner">
      <nav
        class="flex-shrink-0 p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex justify-between items-center z-10 h-16"
      >
        <div class="flex items-center gap-4">
          <button
            @click="toggleSidebar"
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors overflow-hidden"
          >
            <span class="text-gray-500 text-xl">{{ isSidebarOpen ? '⇇' : '⇉' }}</span>
          </button>

          <div
            v-if="selectedFile"
            class="flex items-center gap-2 text-sm"
          >
            <span class="text-gray-400 hidden sm:inline">.github</span>
            <span class="text-gray-300 hidden sm:inline">/</span>
            <span class="font-bold text-gray-700 dark:text-gray-200 truncate">{{
              selectedFile.name
            }}</span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="hidden sm:flex items-center gap-4">
            <a
              href="https://vuejs.org"
              target="_blank"
              class="text-[10px] font-black text-gray-400 hover:text-green-500 transition-colors uppercase tracking-widest"
              >Vue.js</a
            >
            <a
              href="https://vitejs.dev"
              target="_blank"
              class="text-[10px] font-black text-gray-400 hover:text-purple-500 transition-colors uppercase tracking-widest"
              >Vite</a
            >
          </div>
          <div class="h-4 w-px bg-gray-200 dark:border-gray-800 hidden sm:block"></div>
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black px-4 py-2 rounded-full transition-all shadow-md shadow-blue-500/20 uppercase tracking-widest"
          >
            Deploy App
          </button>
        </div>
      </nav>

      <div class="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
        <div class="max-w-5xl mx-auto p-6 transition-all duration-300">
          <article
            v-if="selectedFile"
            class="prose prose-slate dark:prose-invert max-w-none py-8 md:py-12"
            v-html="renderedContent"
          ></article>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
  /* Custom Scrollbar */
  .custom-scrollbar::-webkit-scrollbar {
    width: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #e5e7eb; /* gray-200 */
    border-radius: 9999px;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  .dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #1f2937; /* gray-800 */
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #d1d5db; /* gray-300 */
  }

  .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #374151; /* gray-700 */
  }

  /* Animations */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
