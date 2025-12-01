---
title: tourvy.com
intro: AI-powered travel planning software that generates complete travel proposals in under 5 minutes through a 10-step AI pipeline
url: https://tourvy.com
status: live
featured: true
role: Founder & Lead Developer
timeline: 2023 - present

technologies:
  - TanStack Start
  - TanStack Query
  - Supabase
  - PostgreSQL
  - TypeScript
  - Drizzle ORM
  - OpenAI API
  - Inngest
  - Stripe
  - Tailwind CSS

problem: |
  Traditional travel agencies spend 2-4 hours per inquiry on manual research: searching hotels, planning activities, coordinating transfers, calculating prices. With 10+ daily inquiries, there's barely time for customer service. Competition from online booking platforms makes profitability even harder.

solution: |
  tourvy automates the entire proposal process through a 10-step AI pipeline. From email inquiry to complete, bookable travel proposal in under 5 minutes. The AI automatically extracts travel data, analyzes destinations, matches suitable accommodations, and plans activities - all based on individual customer preferences.

results:
  - value: "90%"
    metric: Less manual planning time
  - value: "10x"
    metric: More proposals per day
  - value: "<5 min"
    metric: Time to finished proposal

architecture: |
  Multi-tenant SaaS architecture with TanStack Start for Server Functions, TanStack Query for optimistic data fetching, and Supabase/PostgreSQL as backend. The AI pipeline runs asynchronously via Inngest with automatic retry and monitoring. Drizzle ORM guarantees type safety from database schema to frontend.

challenges:
  - "AI Pipeline Orchestration: Coordinating 10 dependent steps with different runtimes and failure scenarios without one error blocking the entire pipeline"
  - "Real-time Collaboration: Multiple team members editing the same proposal simultaneously - avoiding race conditions and conflicts"
  - "Email Threading: RFC 5322-compliant implementation for correct grouping of email conversations"
  - "Multi-Provider Billing: Supporting Stripe and Mollie in parallel with unified subscription management"

learnings:
  - "Inngest is perfect for complex AI workflows - built-in retries, timeouts and observability save weeks of development time"
  - "TanStack Start Server Functions + Query create a DX that feels like a local API - without the boilerplate"
  - "JSONB for feature flags works surprisingly well for tiered pricing without schema migrations"
  - "TypeScript Strict Mode from the start saves more time than it costs - ZERO error tolerance pays off"
---
