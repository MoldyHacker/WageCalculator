// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    grossIncome: 0,
    title: 'title'
  }),
})
