---
title: Easy Invoice
intro: SaaS invoicing tool for German freelancers and small businesses – complete invoice management with expense tracking and team collaboration for 8€/month
status: coming-soon
featured: true
role: Founder & Lead Developer
timeline: 2020 - present

technologies:
  - TanStack Router
  - TanStack Query
  - Supabase
  - PostgreSQL
  - TypeScript
  - React
  - shadcn/ui
  - Tailwind CSS
  - Resend
  - PDF Generation
  - Vercel

problem: |
  German freelancers struggle with cluttered, bloated tools like Lexoffice or sevDesk. Most don't need full accounting – just quick invoices, expense tracking, and a year-end overview for their tax advisor. Existing tools cost 15-40€/month for features nobody uses.

solution: |
  Easy Invoice is the invoicing tool I've been using myself since 2020 – now available as SaaS for others. Focus on the essentials: create invoices in under a minute, categorize expenses, monthly reports. No accounting overhead, no hidden costs. 8€/month flat, unlimited team members.

results:
  - value: "5 years"
    metric: Tested in personal use
  - value: "8€/month"
    metric: Flat rate, no limits
  - value: "<1 min"
    metric: Time to finished invoice

architecture: |
  Full-stack TypeScript with TanStack Router for client-side routing and TanStack Query for optimistic data fetching. Supabase (hosted in Frankfurt) as backend for GDPR compliance and low latency in the DACH region. Server-side PDF generation with print-optimized layout, email delivery via Resend.

challenges:
  - "5 years of tech stack evolution: From Firebase via Convex back to Supabase – each refactoring brought new insights"
  - "PDF layout: Pixel-perfect invoices that look the same on every printer, with automatic page break logic"
  - "German tax compliance: Reverse charge, small business regulation, correct VAT calculation based on customer country"
  - "Multi-tenant team system: Simple role system (Owner/Admin/Member) per organization"

learnings:
  - "Convex has fantastic DX, but for the German market GDPR compliance matters more – back to Supabase with EU hosting in Frankfurt"
  - "Building your own tools pays off: 5 years of use = deep understanding of real user problems"
  - "AI features are fun and add real value: auto-tagging, text generation, proofreading – even a wingman for finding fair hourly rates"
  - "DACH market has special requirements: QR codes for bank transfers, IBAN validation, German spelling in templates"
---
