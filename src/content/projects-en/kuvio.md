---
title: Kuvio Studio
intro: AI-powered image editing for real estate professionals, architects, and furniture makers – Virtual Staging, Declutter, and atmosphere transformations in seconds instead of days
url: https://kuvio.studio
status: beta
featured: true
role: Founder & Lead Developer
timeline: 2024 - present

technologies:
  - TanStack Start
  - React
  - TypeScript
  - Drizzle ORM
  - PostgreSQL
  - Supabase
  - Google Gemini
  - Tailwind CSS v4
  - shadcn/ui
  - Better-Auth
  - Vercel

problem: |
  Real estate agents show empty rooms, architects only have sketches, furniture makers need product photos in various settings. Traditional staging costs €500-2000 per property and takes days. US-based AI tools often lack GDPR compliance and don't understand the European market.

solution: |
  Kuvio Studio transforms photos in seconds with specially trained AI prompts: Virtual Staging fills empty rooms, Declutter removes chaos, Twilight mode creates perfect evening atmosphere. One credit = one transformation. Hosted in Germany, GDPR-compliant, no hidden costs.

results:
  - value: "6"
    metric: AI Transformation Tools
  - value: "1 Credit"
    metric: Per Transformation
  - value: "< 30 sec"
    metric: Average Generation Time

architecture: |
  Full-stack TypeScript with TanStack Start for SSR and Server Functions. Google Gemini as primary AI model for image generation. Supabase for auth, storage, and PostgreSQL database – all hosted in Germany. Credit-based billing with transparent pay-per-use structure.

challenges:
  - "Prompt engineering for consistent results: Each transformation needs precise prompts that work reliably across different input images"
  - "Anti-hallucination for furniture: The AI model must not alter existing fixtures – only add or remove what's requested"
  - "Intensity levels: Three levels (Minimal, Moderate, Full) for each tool, all requiring different prompt strategies"
  - "DACH market focus: Marketing and UX completely tailored to the German market, not just translated"

learnings:
  - "Spin-off from maklerupdate: The idea emerged while observing agent listings – empty rooms sell worse"
  - "Gemini is surprisingly good for image editing: Consistent results, good prompt adherence, affordable API costs"
  - "Credit system > Subscription for this use case: Users want to pay when they need it, not every month"
  - "B2B AI in the DACH market: GDPR compliance and German support are real differentiators"
---
