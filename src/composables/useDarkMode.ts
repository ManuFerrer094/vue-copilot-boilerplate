import { ref, onMounted, onUnmounted } from 'vue'

type Theme = 'light' | 'dark' | 'system'

export function useDarkMode() {
  const theme = ref<Theme>('system')
  const isDark = ref(false)

  function getSystemTheme(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  function updateTheme(): void {
    if (theme.value === 'system') {
      isDark.value = getSystemTheme()
    } else {
      isDark.value = theme.value === 'dark'
    }

    document.documentElement.classList.toggle('dark', isDark.value)
  }

  function setTheme(newTheme: Theme): void {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    updateTheme()
  }

  function toggleTheme(): void {
    const newTheme = isDark.value ? 'light' : 'dark'
    setTheme(newTheme)
  }

  function handleSystemChange(event: MediaQueryListEvent): void {
    if (theme.value === 'system') {
      isDark.value = event.matches
      document.documentElement.classList.toggle('dark', isDark.value)
    }
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      theme.value = savedTheme
    }
    updateTheme()

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemChange)
  })

  onUnmounted(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', handleSystemChange)
  })

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
  }
}
