# Expense Tracker

A simple expense tracker built with **Vue 3** and **TypeScript**. Manage income and expenses, categorize transactions, track your balance, and keep your data in the browser.

## Features

- **Add transactions** — income or expense, with a description, amount, and category
- **Separate categories** — dedicated category sets for income and expenses
- **Financial overview** — total income, total expenses, and current balance
- **Form validation** — a description is required before saving
- **Pagination** — transactions split across pages
- **Local storage** — data persists across page refreshes
- **Reactive UI** — lists and summaries update automatically

## Tech Stack

| Tool                                          | Purpose                      |
| --------------------------------------------- | ---------------------------- |
| [Vue 3](https://vuejs.org/)                   | Component-based reactive UI  |
| [TypeScript](https://www.typescriptlang.org/) | Static typing                |
| [Vite](https://vite.dev/)                     | Dev server and build tooling |
| [Tailwind CSS](https://tailwindcss.com/)      | Utility-first styling        |
| [uuid](https://github.com/uuidjs/uuid)        | Unique transaction IDs       |

## Getting Started

### Prerequisites

- Node.js `^22.18.0` or `>=24.12.0`
- npm

### Installation

```sh
git clone https://github.com/stakic-igor/expense-tracker
cd expense-tracker
npm install
npm run dev
```

Then open the local URL printed by Vite.

### Scripts

| Command              | Description                            |
| -------------------- | -------------------------------------- |
| `npm run dev`        | Start the development server           |
| `npm run build`      | Type-check and build for production    |
| `npm run preview`    | Preview the production build locally   |
| `npm run type-check` | Run `vue-tsc` type checking            |
| `npm run lint`       | Lint with oxlint and ESLint (auto-fix) |
| `npm run format`     | Format `src/` with Prettier            |

## Project Structure

```text
src/
├── components/
│   ├── TransactionForm.vue        # Add-transaction form with validation
│   ├── TransactionItem.vue        # Single transaction row
│   ├── TransactionStatistic.vue   # Income / expense / balance summary
│   ├── TransactionPagination.vue  # Page navigation
│   ├── TransactionEmpty.vue       # Empty-state message
│   └── icons/
        ├── ArrowBackIcon.vue
│       └── ArrowForwardIcon.vue
├── types/
│   └── transaction.ts             # Transaction types and categories
├── views/
│   └── TransactionView.vue        # Main view, state, and persistence
├── App.vue
└── main.ts
```

## How It Works

### Transactions

Each transaction has an `id`, `description`, `amount`, `type`, and `category`. Income and expense transactions use separate category types (a discriminated union), so a transaction can only have a category that matches its type.

### Financial Summary

- **Total Income** — sum of all income transactions
- **Total Expenses** — sum of all expense transactions
- **Balance** — total income minus total expenses

Amounts are stored as positive numbers. Expenses are subtracted when calculating the balance.

### Data Persistence

Transactions are saved to `localStorage` under the `transactions` key. Data stays in the current browser and is not synced between devices.

## What I Learned

This project is part of my frontend practice with Vue 3 and TypeScript:

- Composition API and `<script setup>`
- Reactive state with `ref`, `computed`, and `watch`
- Component communication via props and emitted events
- Interfaces, type aliases, union types, and discriminated unions
- Form handling and input validation
- Derived state and computed summaries
- Pagination and array methods
- Browser storage and persistence
- Conditional rendering and dynamic styling with Tailwind CSS

## Roadmap

- [ ] Unit and component tests
- [ ] Amount validation and better accessibility
- [ ] Edit transactions
- [ ] Filter by type and category
- [ ] Sort by date or amount
- [ ] Transaction dates and date-range filtering
- [ ] Charts for income and expenses
- [ ] Improved responsive design

## License

Created for learning and personal development.
