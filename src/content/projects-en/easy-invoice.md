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
  - Convex
  - Tailwind CSS 4
  - shadcn/ui
  - OpenAI API
  - Typst (PDF Generation)
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
  - Cashflow dashboard with real-time updates via Convex
  - Tax preparation: income statement and VAT return overviews
  - Tax advisor portal for delegated access

  Originally built with Electric SQL and PostgreSQL – the switch to Convex was made to more tightly integrate AI workflows into the data layer and leverage Convex's reactive backend.

results:
  - value: "12"
    metric: Features implemented
  - value: "3"
    metric: Features in Early Access
  - value: "50+"
    metric: Database migrations

architecture: |
  **Multi-Tenancy:** Organizations as root entity in Convex. Each workspace has its own settings for tax configuration.

  **Real-Time Sync:** Convex as reactive backend replaces traditional polling. Changes are automatically pushed to all connected clients. TanStack Query caches locally, Convex synchronizes server state.

  **Tax Compliance:** Invoices are immutable after creation. Money amounts are stored as cents (integers). Sequential invoice numbers with unique constraint per organization.

  **AI Integration:** OpenAI for expense categorization and natural language queries of business data. Convex Actions enable seamless AI workflows directly in the data layer.

challenges:
  - "Migration Electric SQL → Convex: Complete data layer rebuild to more tightly integrate AI workflows"
  - "GoBD Compliance: Enforcing invoice immutability without losing flexibility for cancellations"
  - "Multi-Tenancy: Workspace isolation in Convex without performance penalties"
  - "Tax Logic: Correctly implementing small business regulation, various VAT rates, reverse charge"
  - "Real-Time Sync: Conflict resolution for simultaneous team edits"

learnings:
  - "Electric SQL + Postgres was solid, but Convex's reactive backend and integrated AI Actions justified the switch"
  - "Convex simplifies real-time drastically – no WebSocket setup, no polling, no cache invalidation"
  - "Domain-Driven Design pays off with complex tax logic - separated contexts for Invoicing, Expenses, Tax"
  - "Optimistic updates require careful rollback strategies for server errors"
  - "German tax regulations are complex - close collaboration with tax advisor for correct implementation"
---
