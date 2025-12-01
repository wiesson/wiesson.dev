---
title: "TanStack + Convex + shadcn: Der moderne Stack für SaaS in 2025"
description: Warum ich für Easy Invoice nicht Next.js oder Supabase gewählt habe – und was ich dabei gelernt habe.
tags:
  - TanStack
  - Convex
  - shadcn
  - React
  - Architecture
---

<!-- DRAFT - Technical deep-dive -->

## Warum nicht Next.js?

TODO:
- App Router Komplexität
- Server Components für ein SaaS?
- Vercel-Lock-in

TanStack Router bietet:
- File-based Routing ohne Next
- Type-safe von Grund auf
- Volle Kontrolle über Rendering

## Warum Convex statt Supabase?

TODO:
- Realtime out of the box
- Kein SQL schreiben
- TypeScript-first
- Queries als Funktionen

Die Trade-offs:
- Weniger etabliert
- Vendor Lock-in (aber: Export möglich)
- Lernkurve für das reaktive Modell

## shadcn/ui: Copy-Paste done right

TODO:
- Keine npm-Abhängigkeit
- Volle Kontrolle über den Code
- Radix-Primitives als Basis
- Tailwind-Integration

## Der komplette Stack

```
Frontend:
- TanStack Router
- TanStack Query (für externe APIs)
- React 19
- shadcn/ui
- Tailwind CSS

Backend:
- Convex (Database + Functions + Realtime)
- Resend (Emails)

Infrastructure:
- Vercel (Hosting)
- Convex Cloud (Backend)
```

## Lessons Learned

TODO:
- Was ich anders machen würde
- Wann dieser Stack Sinn macht
- Wann nicht

## Performance-Zahlen

TODO:
- Time to Interactive
- Bundle Size
- Cold Start Zeiten

---

**Hinweis:** Dieser Artikel ist in Arbeit.
