# Vue 3 Boilerplate

A modern, production-ready Vue.js starter template optimized for GitHub Copilot.

## ✨ Features

- ⚡ **Vite** - Lightning-fast development with HMR
- 🎯 **Vue 3** - Composition API with `<script setup>`
- 🔷 **TypeScript** - Strict type checking enabled
- 🍍 **Pinia** - Modern state management with composition API
- 🛣️ **Vue Router** - File-based routing with lazy-loading
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧪 **Vitest** - Fast unit testing with Vue Test Utils
- 📝 **ESLint + Prettier** - Code quality and formatting
- 🤖 **GitHub Copilot Ready** - Optimized with agents, skills, and prompts

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd vue-boilerplate

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
├── .github/
│   ├── agents/               # Custom Copilot agents
│   ├── skills/               # Reusable Copilot skills
│   ├── instructions/         # Project coding standards
│   ├── prompts/              # Prompt templates
│   └── copilot-instructions.md
├── src/
│   ├── assets/               # Global styles, images
│   ├── components/
│   │   ├── layout/           # Header, Footer, Sidebar
│   │   └── ui/               # Base reusable components
│   ├── composables/          # Reusable logic (useXxx.ts)
│   ├── router/               # Route configuration
│   ├── stores/               # Pinia stores
│   ├── types/                # TypeScript definitions
│   ├── views/                # Page components
│   ├── App.vue
│   └── main.ts
├── .env.example
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Lint and fix files |
| `npm run format` | Format files with Prettier |
| `npm run type-check` | Check TypeScript types |

## 🤖 GitHub Copilot Integration

This boilerplate includes extensive GitHub Copilot configuration to accelerate your development:

### Agents (`.github/agents/`)

Custom AI agents specialized for Vue development:
- **vue-helper.agent.md** - General Vue.js development assistant
- **component-generator.agent.md** - Generates components following project conventions

### Skills (`.github/skills/`)

Reusable instructions for specific tasks:
- **vue-component-generation/** - Guidelines for creating Vue components
- **vue-best-practices/** - Performance and pattern recommendations

### Prompts (`.github/prompts/`)

Ready-to-use prompt templates:
- **new-vue-page.prompt.md** - Create new pages with routing
- **new-pinia-store.prompt.md** - Create Pinia stores
- **new-composable.prompt.md** - Create composable functions
- **refactor-to-composition.prompt.md** - Convert Options API to Composition API

### Instructions (`.github/instructions/`)

Project-specific coding standards that Copilot follows:
- **vue-standards.instructions.md** - Vue coding conventions

### Using with GitHub Copilot

1. Open the project in VS Code with GitHub Copilot extension
2. Copilot will automatically read `.github/copilot-instructions.md`
3. Use agents by typing `@vue-helper` in Copilot Chat
4. Reference prompts when asking Copilot for specific tasks

## 🎨 Styling

This project uses **Tailwind CSS v4** with:
- Custom CSS variables for theming
- Dark mode support
- Custom scrollbar styles
- Focus-visible accessibility styles

### Theme Colors

Edit CSS variables in `src/assets/main.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --color-accent: #8b5cf6;
}

.dark {
  /* Dark mode overrides */
}
```

## 📦 State Management

Using **Pinia** with Composition API stores:

```typescript
// src/stores/counter.ts
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

## 🧪 Testing

Using **Vitest** with Vue Test Utils:

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from './MyComponent.vue'

describe('MyComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.exists()).toBe(true)
  })
})
```

## 🔧 Configuration

### TypeScript

Strict mode enabled with additional checks:
- `noUnusedLocals`
- `noUnusedParameters`
- `noFallthroughCasesInSwitch`
- `noUncheckedIndexedAccess`
- `exactOptionalPropertyTypes`

### ESLint

Vue 3 + TypeScript rules with Prettier integration.

### Path Aliases

Use `@/` to import from `src/`:

```typescript
import { useCounterStore } from '@/stores'
import BaseButton from '@/components/ui/BaseButton.vue'
```

## 📄 License

MIT License - feel free to use this boilerplate for any project.

---

Built with ❤️ and optimized for GitHub Copilot
