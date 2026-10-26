import { describe, it, expect } from 'vitest'
import { calculateBalance } from '@/utils/transactionsUtils'
import type { Transaction } from '@/types/transaction'

describe('calculateBalance', () => {
  it('should return the correct balance for income and expense transactions', () => {
    const transactions: Transaction[] = [
      { id: '1', description: 'Salary', amount: 1000, type: 'income', category: 'salary' },
      { id: '2', description: 'Groceries', amount: 200, type: 'expense', category: 'food' },
      {
        id: '3',
        description: 'Entertainment',
        amount: 100,
        type: 'expense',
        category: 'entertainment',
      },
    ]
    expect(calculateBalance(transactions)).toBe(700)
  })
  it('should return 0 for an empty array of transactions', () => {
    const transactions: Transaction[] = []
    expect(calculateBalance(transactions)).toBe(0)
  })
  it('should return only income', () => {
    const transactions: Transaction[] = [
      { id: '1', description: 'Salary', amount: 100, type: 'income', category: 'salary' },
      { id: '2', description: 'Salary', amount: 200, type: 'income', category: 'salary' },
    ]
    expect(calculateBalance(transactions)).toBe(300)
  })
  it('should return only expenses', () => {
    const transactions: Transaction[] = [
      { id: '1', description: 'Groceries', amount: 100, type: 'expense', category: 'food' },
      { id: '2', description: 'Groceries', amount: 200, type: 'expense', category: 'food' },
    ]
    expect(calculateBalance(transactions)).toBe(-300)
  })
})
