import type { Transaction } from '@/types/transaction'

export const balance = (transactions: Transaction[]) => {
  return transactions.reduce((sum, item) => {
    return item.type === 'income' ? sum + item.amount : sum - item.amount
  }, 0)
}
