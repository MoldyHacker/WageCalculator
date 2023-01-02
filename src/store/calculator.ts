// Utilities
import { defineStore } from 'pinia'

export const useCalcStore = defineStore('app', {
  state: () => ({
    grossIncome: 0,
    title: 'app'
  }),
})
