export type TransactionType = 'expense' | 'income'
export type Category = 'food' | 'transport' | 'entertainment' | 'utilities' | 'other'

export interface Transactions {
  id: number
  description: string
  amount: number
  type: TransactionType
  category: Category
}
