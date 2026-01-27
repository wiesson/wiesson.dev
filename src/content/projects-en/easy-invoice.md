---
title: Kontor
intro: Invoicing software for German freelancers. Invoices, expenses, tax preparation.
url: https://getkontor.app
status: beta
featured: true
role: Founder & Solo Developer
timeline: 2024 - present

technologies:
  - React 19
  - TanStack Start
  - TanStack Router
  - TanStack Query
  - Electric SQL
  - Supabase (PostgreSQL)
  - Tailwind CSS 4
  - shadcn/ui
  - OpenAI API
  - Typst (PDF Generation)
  - Zod
  - TypeScript

problem: |
  German freelancers and self-employed professionals often manage their finances with Word templates, Excel spreadsheets, and email folders. This leads to:

  - Manual errors in VAT calculations
  - Forgotten invoices and missing payment tracking
  - Time spent on tax preparation (income statement, VAT returns)
  - Data silos without cashflow overview

  Existing solutions are often bloated, expensive, or not tailored to German requirements (small business regulation, GoBD compliance).

solution: |
  A focused web application for the German market:

  - Invoice creation with automatic VAT calculation and QR code for bank transfers
  - Expense management with AI-powered categorization
  - Cashflow dashboard with real-time updates via Electric SQL
  - Tax preparation: income statement and VAT return overviews
  - Tax advisor portal for delegated access

  The tech stack prioritizes fast UX through optimistic updates and push-based synchronization instead of polling.

results:
  - value: "12"
    metric: Features implemented
  - value: "3"
    metric: Features in Early Access
  - value: "50+"
    metric: Database migrations

architecture: |
  **Multi-Tenancy:** Organizations as root entity with Row-Level Security in PostgreSQL. Each workspace has its own settings for tax configuration.

  **Real-Time Sync:** Electric SQL replaces traditional polling. Changes are pushed to all connected clients via WebSocket. TanStack Query caches locally, Electric synchronizes server state.

  **Tax Compliance:** Invoices are immutable after creation (database triggers). Money amounts are stored as cents (integers). Sequential invoice numbers with unique constraint per organization.

  **AI Integration:** OpenAI for expense categorization and natural language queries of business data. RAG approach for German tax law planned.

challenges:
  - "Electric SQL Integration: Supabase Edge Functions required as proxy for HTTP/2 WebSocket support"
  - "GoBD Compliance: Enforcing invoice immutability at database level without losing flexibility for cancellations"
  - "Multi-Tenancy with RLS: Complex PostgreSQL policies for workspace isolation without performance penalties"
  - "Tax Logic: Correctly implementing small business regulation, various VAT rates, reverse charge"
  - "Offline-First Architecture: Conflict resolution for simultaneous team edits"

learnings:
  - "Electric SQL and TanStack DB enable true real-time UX without building WebSocket infrastructure yourself"
  - "Row-Level Security in PostgreSQL is powerful, but policy logic must be planned from the start"
  - "Domain-Driven Design pays off with complex tax logic - separated contexts for Invoicing, Expenses, Tax"
  - "Optimistic updates require careful rollback strategies for server errors"
  - "German tax regulations are complex - close collaboration with tax advisor for correct implementation"
---
