import { ref, readonly, type Ref, type DeepReadonly } from 'vue'

interface UseAsyncStateOptions<T> {
  immediate?: boolean
  initialState?: T | null
  onError?: (error: Error) => void
}

interface UseAsyncStateReturn<T> {
  state: DeepReadonly<Ref<T | null>>
  isLoading: DeepReadonly<Ref<boolean>>
  error: DeepReadonly<Ref<Error | null>>
  execute: () => Promise<void>
}

export function useAsyncState<T>(
  asyncFn: () => Promise<T>,
  options: UseAsyncStateOptions<T> = {}
): UseAsyncStateReturn<T> {
  const { immediate = true, initialState = null, onError } = options

  const state = ref<T | null>(initialState)
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  async function execute(): Promise<void> {
    isLoading.value = true
    error.value = null

    try {
      state.value = await asyncFn()
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e))
      if (onError) {
        onError(error.value)
      }
    } finally {
      isLoading.value = false
    }
  }

  if (immediate) {
    execute()
  }

  return {
    state: readonly(state) as DeepReadonly<Ref<T | null>>,
    isLoading: readonly(isLoading) as DeepReadonly<Ref<boolean>>,
    error: readonly(error) as DeepReadonly<Ref<Error | null>>,
    execute,
  }
}
