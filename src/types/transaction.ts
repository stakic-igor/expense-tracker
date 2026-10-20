export type TransactionType = 'expense' | 'income'

export type ExpenseCategory =
  'food' | 'transport' | 'utilities' | 'entertainment' | 'health' | 'other'
export type IncomeCategory = 'salary' | 'investment' | 'gift' | 'other'

export type ExpenseTransaction = {
  type: 'expense'
  category: ExpenseCategory
}

export type IncomeTransaction = {
  type: 'income'
  category: IncomeCategory
}

export type Transaction = TransactionBase & (ExpenseTransaction | IncomeTransaction)

export interface TransactionBase {
  id: string
  description: string
  amount: number
}
