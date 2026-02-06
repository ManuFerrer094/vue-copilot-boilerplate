// Test setup file for Vitest
import { config } from '@vue/test-utils'

// Global configuration for Vue Test Utils
config.global.stubs = {
  // Add global stubs here if needed
}

// Mock window.matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})
