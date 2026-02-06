/**
 * Common type definitions for the application
 */

// API Response wrapper
export interface ApiResponse<T> {
  data: T
  message?: string
  status: number
}

// Pagination
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// User related types
export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  avatar?: string
  role: UserRole
  createdAt: string
  updatedAt: string
}

export type UserRole = 'admin' | 'user' | 'guest'

// Form related types
export interface FormField<T = string> {
  value: T
  error: string | null
  touched: boolean
}

// Common utility types
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type AsyncState = 'idle' | 'loading' | 'success' | 'error'

// Route meta types
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    requiresAuth?: boolean
    roles?: UserRole[]
  }
}
