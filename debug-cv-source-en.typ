#set page(
  paper: "a4",
  margin: (
    left: 20mm,
    right: 20mm,
    top: 20mm,
    bottom: 20mm,
  ),
  footer: [
    #align(center)[
      #text(size: 8pt)[Arne Wiese, Heinenkamp 2a, 40670 Meerbusch, +491751109743, arne\@wiese.me]
    ]
  ]
)

// Text defaults
#set text(
  font: ("Inter", "Helvetica", "Arial", "PT Sans"),
  fallback: true,
  size: 10pt,
  hyphenate: false
)

#set par(leading: 0.65em)

// Profile Section
#align(center)[
  #text(size: 18pt, weight: "bold")[Arne Wiese]
  
  #v(0.3em)
  
  #text(size: 11pt)[
    Freelancer & Consultant
    · Meerbusch
  ]
  
  #v(0.2em)
  #text(size: 9pt)[M.Sc. Energy Science and Technology]
  
  #v(0.5em)
  #text(size: 10pt)[10+ years of full-stack development – specialized in pragmatic solutions, rapid MVPs, and system architecture]
  
  #v(0.3em)
  
  #text(size: 9pt)[#raw("arne@wiese.me") · #raw("wiesson.dev")]
]

#v(1cm)

// Main Work Section
#text(size: 12pt, weight: "semibold")[Projects & Full-time Positions]
#v(0.5em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[04/2024 - 09/2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[AI Advisor & AI Agents / Frontnow GmbH]
        #linebreak()
        #text(size: 9pt)[Senior AI Software Engineer]
        #linebreak()
        #text(size: 9pt)[Primarily remote, occasionally in Berlin]
        #v(0.3em)
        #text(size: 9pt)[Development of a scalable AI product enrichment system that automatically enhances 100,000+ e-commerce products per shop and automates time-consuming manual processes]
        #v(0.3em)
        #text(size: 8pt)[TypeScript, Svelte, OpenAI, Google Gemini, PostgreSQL, Vector Search]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[03/2023 - 04/2024]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Douglas Platform Tech Team / Parfümerie Douglas GmbH]
        #linebreak()
        #text(size: 9pt)[Senior Software Engineer]
        #linebreak()
        #text(size: 9pt)[Remote]
        #v(0.3em)
        #text(size: 9pt)[Development and maintenance of central platform infrastructure to support feature teams with reusable components, performance monitoring tools, code quality standards, and mentoring]
        #v(0.3em)
        #text(size: 8pt)[TypeScript, React, Redux, React Testing Library, Jest, Figma]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[09/2021 - 11/2022]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Douglas Social Commerce / Parfümerie Douglas GmbH]
        #linebreak()
        #text(size: 9pt)[Senior Software Engineer]
        #linebreak()
        #text(size: 9pt)[Remote]
        #v(0.3em)
        #text(size: 9pt)[Integration of social commerce features with Livebuy.io video player and optimization of Web Vitals for improved user experience]
        #v(0.3em)
        #text(size: 8pt)[TypeScript, React, Redux, React Testing Library, Jest, Figma, Livebuy.io API]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[03/2021 - 02/2022]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Frontnw GmbH]
        #linebreak()
        #text(size: 9pt)[Lead Software Engineer]
        #linebreak()
        #text(size: 9pt)[Mainly remote, occasionally in Berlin]
        #v(0.3em)
        #text(size: 9pt)[Leading fullstack development of a B2B platform with successful migration from Firebase to Supabase and implementation of scalable data collection systems]
        #v(0.3em)
        #text(size: 8pt)[JavaScript, Tailwind, Sveltekit, Vite.js, Firebase, Firestore, Algolia, PostgreSQL]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[05/2020 - 03/2021]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[caroutlet.ch / carIT AG]
        #linebreak()
        #text(size: 9pt)[Software Architect]
        #linebreak()
        #text(size: 9pt)[Mainly remote, occasionally in Zurich (CH), Tuggen (CH)]
        #v(0.3em)
        #text(size: 9pt)[Architecture and re-development of a vehicle platform with complex multi-step checkout system and custom React components for 360° vehicle views]
        #v(0.3em)
        #text(size: 8pt)[Next.js, JavaScript, TypeScript, Vue.js, Node.js, Firebase, Google Cloud, Cloud Functions, Figma]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[12/2019 - 05/2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[carauktion.ch / carIT AG]
        #linebreak()
        #text(size: 9pt)[Interim Product Owner]
        #linebreak()
        #text(size: 9pt)[Mainly remote, occasionally in Zurich (CH), Tuggen (CH)]
        #v(0.3em)
        #text(size: 9pt)[Interim Product Owner coordinating platform development with international teams and aligning business and development]
        #v(0.3em)
        #text(size: 8pt)[JIRA, Confluence, Miro, Figma]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[07/2019 - 12/2019]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Parfümerie Douglas GmbH]
        #linebreak()
        #text(size: 9pt)[Senior Frontend Developer]
        #linebreak()
        #text(size: 9pt)[Düsseldorf]
        #v(0.3em)
        #text(size: 9pt)[Permanent position as Senior Frontend Developer focusing on feature development, technical mentoring, and team onboarding]
        #v(0.3em)
        #text(size: 8pt)[TypeScript, React, Jest, Enzyme, Redux, CSS, Hybris, Java, Scrum, Figma]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[02/2017 - 07/2019]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Energybox Ltd]
        #linebreak()
        #text(size: 9pt)[Lead Frontend Engineer]
        #linebreak()
        #text(size: 9pt)[Mainly in Cologne, occasionally in Hong Kong and USA (Washington DC)]
        #v(0.3em)
        #text(size: 9pt)[Permanent position as Lead Frontend Engineer leading the frontend team and developing an IoT platform for worldwide energy data monitoring with an extensive React component library (150+ components)]
        #v(0.3em)
        #text(size: 8pt)[TypeScript, MongoDB, React, AWS, Docker, Scrum]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[01/2018 - 11/2018]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[juts.ch / leadpoint.ch]
        #linebreak()
        #text(size: 9pt)[Software Engineer]
        #linebreak()
        #text(size: 9pt)[Remote, occasionally in Zurich (CH)]
        #v(0.3em)
        #text(size: 9pt)[Frontend development of a food box subscription platform with Stripe and PayPal integration for subscription payments]
        #v(0.3em)
        #text(size: 8pt)[JavaScript, React, Flow, Redux, Python, Django, PostgreSQL, Docker, Google Cloud, Stripe API, PayPal API]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[06/2015 - 02/2017]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[sipgate GmbH]
        #linebreak()
        #text(size: 9pt)[Software Developer]
        #linebreak()
        #text(size: 9pt)[Düsseldorf]
        #v(0.3em)
        #text(size: 9pt)[Permanent position as Software Developer focusing on REST API development, CRM integration, and migration to React/Redux architecture for telephony applications]
        #v(0.3em)
        #text(size: 8pt)[JavaScript, React, Redux, CSS, MySQL, Java, PHP, Scrum]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[09/2013 - 05/2015]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[TIGEV Ingenieurgesellschaft mbH]
        #linebreak()
        #text(size: 9pt)[Energy Data Management Engineer]
        #linebreak()
        #text(size: 9pt)[Münster]
        #v(0.3em)
        #text(size: 9pt)[Permanent position as Energy Data Management Engineer developing a web-based energy data management system with data visualization and integration of measuring devices and sensors]
        #v(0.3em)
        #text(size: 8pt)[PHP, JavaScript, Charts.js, Laravel, MySQL, CSS]
              ]
    )
  ]
    
#v(0.8em)

#v(0.5cm)

// Side Work Section
#text(size: 12pt, weight: "semibold")[Side Projects]
#v(0.5em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[01/2020 - 12/2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Easy Invoice / Arne Wiese]
        #v(0.3em)
        #text(size: 9pt)[Personal invoicing tool used since 2020, now available as SaaS for German freelancers and small businesses after several refactoring cycles – complete invoice management with expense tracking and team collaboration for 8€/month]
        #v(0.3em)
        #text(size: 8pt)[TanStack Router, TanStack Query, Supabase, TypeScript, shadcn/ui, Tailwind CSS, React, Resend, PDF Generation, Vercel]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[11/2020 - 12/2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Beautytester Service / Parfümerie Douglas GmbH]
        #v(0.3em)
        #text(size: 9pt)[Conception and development of a product testing service for over 20,000 users with multi-step registration flow and BazaarVoice API integration]
        #v(0.3em)
        #text(size: 8pt)[TypeScript, React, Jest, Enzyme, Next.js, PostgreSQL, BazaarVoice API, Figma]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[08/2023 - 12/2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[tourvy.com / Arne Wiese]
        #v(0.3em)
        #text(size: 9pt)[Development of an AI-powered travel planning software that generates complete travel offers in under 5 minutes through a 10-stage AI pipeline, reducing manual planning time by 90%]
        #v(0.3em)
        #text(size: 8pt)[TanStack Start, TanStack Query, Supabase, PostgreSQL, TypeScript, Drizzle ORM, Better Auth, OpenAI API, Inngest, Stripe, Mollie, Tailwind CSS, Zod, Playwright, Vitest, pnpm, Monorepo]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[05/2025 - 12/2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[maklerupdate.de / Arne Wiese]
        #v(0.3em)
        #text(size: 9pt)[Platform for automatic monitoring of 50+ real estate agents in the Greater Düsseldorf area (goal: 400), completely replacing manual website checks through AI-powered property extraction and daily crawling]
        #v(0.3em)
        #text(size: 8pt)[SvelteKit + Svelte 5, Supabase, TanStack Query, TypeScript, Drizzle ORM, OpenAI GPT-5 + Claude, Inngest (Background Jobs), Deno (CLI), Firecrawl API, MCP Servers, Tailwind CSS v4, Vercel, React Email + Resend]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[01/2016 - 06/2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[84rooms.com / Sebastian Schöllgen]
        #v(0.3em)
        #text(size: 9pt)[Development and long-term maintenance of a marketing platform for boutique hotels with Stripe integration and AI-powered content optimization]
        #v(0.3em)
        #text(size: 8pt)[Next.js, TypeScript, CSS, Django, Python, PostgreSQL, Vercel, Cloud Functions, Google Cloud, Stripe API]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[08/2021 - 05/2024]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Websites / Take Memories GmbH & Co. KG]
        #v(0.3em)
        #text(size: 9pt)[Migration of multiple WordPress websites to Astro and PayloadCMS with focus on zero-JavaScript approach for optimal performance and SEO]
        #v(0.3em)
        #text(size: 8pt)[Astro, PayloadCMS, MongoDB]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[01/2016 - 01/2022]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Whisky Adventskalender / Arne Wiese & Wilhelm Hemme]
        #v(0.3em)
        #text(size: 9pt)[Fullstack development of a web app for rating whisky with friends]
        #v(0.3em)
        #text(size: 8pt)[CSS, Django, Python, Postgres, Google Cloud]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[01/2021 - 01/2022]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[maklerupdate.de / Arne Wiese]
        #v(0.3em)
        #text(size: 9pt)[Development of a real estate platform for Düsseldorf with focus on data collection and search functionality]
        #v(0.3em)
        #text(size: 8pt)[React, TypeScript, Next.js, Firebase, Firestore, Vercel, Apify, Google Big-Query, Algolia]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[06/2021 - 08/2021]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[bonsai-bayreuth.de / Bonsai Bayreuth]
        #v(0.3em)
        #text(size: 9pt)[Development of a landing page with ordering system and CMS integration for restaurant menu]
        #v(0.3em)
        #text(size: 8pt)[JavaScript, Sveltekit]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[06/2021]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[stefanwiese.com / Stefan Wiese]
        #v(0.3em)
        #text(size: 9pt)[Development of a landing page with SvelteKit]
        #v(0.3em)
        #text(size: 8pt)[JavaScript, Sveltekit]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[04/2020 - 08/2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[maxis-zeitreisen.de / ProSiebenSat.1 Media SE (über Loyd Gmbh)]
        #v(0.3em)
        #text(size: 9pt)[Modernization of Vue.js platform with technology stack update and creation of reusable UI components]
        #v(0.3em)
        #text(size: 8pt)[Vue.js, JavaScript, CSS, Figma]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[06/2020 - 07/2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[upperhand.co / Impact Products GmbH]
        #v(0.3em)
        #text(size: 9pt)[Development of a multilingual landing page with Shopify integration for the e-commerce platform go-live]
        #v(0.3em)
        #text(size: 8pt)[TypeScript, Next.js, Shopify API, Figma]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[04/2020 - 06/2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[need-mask.com (non-profit) / ITA RWTH Aachen]
        #v(0.3em)
        #text(size: 9pt)[Development of a non-profit platform for Covid-19 protective equipment to handle high-volume orders with GraphQL, optimized for high request volumes]
        #v(0.3em)
        #text(size: 8pt)[React, TypeScript, Next.js, GraphQL, Hasura, PostgreSQL, Vercel, DigitalOcean]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[04/2020 - 05/2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Handelsblatt Social Media Monitor / Cyberium GmbH]
        #v(0.3em)
        #text(size: 9pt)[Conception and development of a dashboard for comparing social media metrics of over 15 German banks and insurance companies]
        #v(0.3em)
        #text(size: 8pt)[React, TypeScript, Charts, Firestore]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[04/2020 - 05/2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Helpathon / Ways GmbH]
        #v(0.3em)
        #text(size: 9pt)[Frontend development of a non-profit platform for visualizing and categorizing help ideas]
        #v(0.3em)
        #text(size: 8pt)[React, TypeScript, CSS, Charts]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[02/2020 - 03/2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[douglas.ch / Parfümerie Douglas GmbH]
        #v(0.3em)
        #text(size: 9pt)[Analysis and bug fixing of tracking implementation for the Swiss online shop]
        #v(0.3em)
        #text(size: 8pt)[TypeScript, React, Analytics]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[01/2019 - 04/2019]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[MONDAY.ROCKS GmbH]
        #v(0.3em)
        #text(size: 9pt)[Development of a web app for dynamic KPI visualization with interactive SVG graphics and CI/CD pipeline integration]
        #v(0.3em)
        #text(size: 8pt)[Vue.js, JavaScript, Firebase, GitLab CI, SVG]
              ]
    )
  ]
    
#v(0.8em)

#v(0.5cm)

// Education Section
#text(size: 12pt, weight: "semibold")[Education]
#v(0.5em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[2003 – 2006]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[General Higher Education Entrance Qualification (Abitur)]
        #linebreak()
        #text(size: 9pt)[Technical High School Oldenburg]
        #v(0.3em)
        #text(size: 9pt)[Technical university entrance qualification with a focus on mathematics and computer science, which formed the foundation for subsequent engineering and software studies.]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[2007 – 2010]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[B. Eng. in Energy Engineering]
        #linebreak()
        #text(size: 9pt)[Münster University of Applied Sciences]
        #v(0.3em)
        #text(size: 9pt)[Engineering degree with a focus on energy systems and technology. The bachelor's thesis combined process analysis with sustainable energy use through integration of CHP plants.]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[2011 – 2014]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[M. Sc in Energy Science and Technology]
        #linebreak()
        #text(size: 9pt)[University of Bayreuth, Germany]
        #v(0.3em)
        #text(size: 9pt)[Interdisciplinary master's program focused on sustainable energy systems. The master's thesis on developing a web-based monitoring system laid the foundation for later specialization in software development.]
              ]
    )
  ]
    
#v(0.8em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[2012 – 2013]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Study Abroad Semester at the Royal Institute of Technology (KTH)]
        #linebreak()
        #text(size: 9pt)[Stockholm, Sweden]
        #v(0.3em)
        #text(size: 9pt)[Study abroad semester with a focus on international research and industrial practice. Combination of collaboration in a research project on information system architecture and practical analysis at Scania AB.]
              ]
    )
  ]
    
#v(0.8em)

