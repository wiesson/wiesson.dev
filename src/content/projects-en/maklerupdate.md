---
title: maklerupdate.de
intro: Personal tool for automatic monitoring of real estate agent websites in the Düsseldorf area. Crawls websites, extracts properties via AI, sends daily email updates.
url: https://maklerupdate.de
status: mvp
featured: true
role: Founder & Lead Developer
timeline: 2021 - present

technologies:
  - TanStack Start
  - React
  - TanStack Query
  - Convex
  - TypeScript
  - OpenAI GPT
  - Claude
  - Inngest
  - Firecrawl
  - Tailwind CSS v4
  - Vercel

problem: |
  Anyone looking for property in Düsseldorf has to check dozens of agent websites daily. Most listings are never on ImmoScout – local agents only list on their own websites. Manually clicking through 50+ pages takes hours, and you still miss new offers.

solution: |
  maklerupdate automatically crawls all monitored agent websites 3x daily, extracts new properties via AI, and sends daily digest emails to subscribers. Instead of hours of clicking: define search criteria once, receive relevant new listings by email every day.

results:
  - value: "50+"
    metric: Monitored agents
  - value: "3x daily"
    metric: Automatic crawling
  - value: "0 minutes"
    metric: Manual effort

architecture: |
  TanStack Start frontend with Convex as reactive backend. Multi-strategy property extraction: LLM-powered DOM selector discovery for static sites, JSON API detection for React SPAs, heuristic fallbacks. Event-driven background jobs via Inngest with automatic retry and monitoring.

challenges:
  - "Heterogeneous agent websites: Every site has different structure – from WordPress themes to custom React apps"
  - "DOM Selector Discovery: GPT/Claude analyze HTML and automatically find the right CSS selectors for price, address, area"
  - "Change Detection: Only report actual new properties, not every layout change on the website"
  - "Rate Limiting & Politeness: Not getting blocked as a bot, respectful crawl intervals"

learnings:
  - "LLMs are surprisingly good at understanding HTML structures and suggesting selectors"
  - "Firecrawl removes a lot of pain from crawling: JavaScript rendering, anti-bot bypassing, structured markdown output"
  - "Migrating from SvelteKit to TanStack Start: Consistent stack across all projects significantly simplifies maintenance"
  - "Convex Actions are perfect for AI-powered extraction pipelines with automatic retry"
---
