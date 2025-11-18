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
    Senior AI Software Engineer
    · Meerbusch
  ]
  
  #v(0.2em)
  #text(size: 9pt)[M.Sc. Energy Science and Technology]
  
  #v(0.5em)
  #text(size: 10pt)[10+ Jahre Full-Stack-Entwicklung – spezialisiert auf pragmatische Lösungen, schnelle MVPs und KI-Integration]
  
  #v(0.3em)
  
  #text(size: 9pt)[#raw("arne@wiese.me") · #raw("wiesson.dev")]
]

#v(1cm)

// Main Work Section
#text(size: 12pt, weight: "semibold")[Projekte & Festanstellungen]
#v(0.5em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[04.2024 - 09.2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[AI Advisor & AI Agents / Frontnow GmbH]
        #linebreak()
        #text(size: 9pt)[Senior AI Software Engineer]
        #linebreak()
        #text(size: 9pt)[Überwiegend remote, gelegentlich in Berlin]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung eines skalierbaren KI-Produktanreicherungssystems, das 100.000+ E-Commerce-Produkte pro Shop automatisch anreichert und zeitaufwändige manuelle Prozesse automatisiert]
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
        #text(size: 9pt)[03.2023 - 04.2024]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Douglas Platform Tech Team / Parfümerie Douglas GmbH]
        #linebreak()
        #text(size: 9pt)[Senior Software Engineer]
        #linebreak()
        #text(size: 9pt)[Remote]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung und Pflege der zentralen Platform-Infrastruktur zur Unterstützung von Feature-Teams mit wiederverwendbaren Komponenten, Performance-Monitoring-Tools, Code-Quality-Standards und Mentoring]
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
        #text(size: 9pt)[09.2021 - 11.2022]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Douglas Social Commerce / Parfümerie Douglas GmbH]
        #linebreak()
        #text(size: 9pt)[Senior Software Engineer]
        #linebreak()
        #text(size: 9pt)[Remote]
        #v(0.3em)
        #text(size: 9pt)[Integration von Social Commerce Features mit Livebuy.io Video-Player und Optimierung der Web Vitals für verbesserte User Experience]
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
        #text(size: 9pt)[03.2021 - 02.2022]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Frontnw GmbH]
        #linebreak()
        #text(size: 9pt)[Lead Software Engineer]
        #linebreak()
        #text(size: 9pt)[Überwiegend remote, gelegentlich in Berlin]
        #v(0.3em)
        #text(size: 9pt)[Leitung der Fullstack-Entwicklung einer B2B-Plattform mit erfolgreicher Migration von Firebase zu Supabase und Implementierung skalierbarer Datenerfassungssysteme]
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
        #text(size: 9pt)[05.2020 - 03.2021]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[caroutlet.ch / carIT AG]
        #linebreak()
        #text(size: 9pt)[Software Architekt]
        #linebreak()
        #text(size: 9pt)[Überwiegend remote, gelegentlich in Zürich (CH), Tuggen (CH)]
        #v(0.3em)
        #text(size: 9pt)[Architektur und Neuentwicklung einer Fahrzeugplattform mit komplexem mehrstufigen Checkout-System und maßgeschneiderten React-Komponenten für 360°-Fahrzeugansichten]
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
        #text(size: 9pt)[12.2019 - 05.2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[carauktion.ch / carIT AG]
        #linebreak()
        #text(size: 9pt)[Interim Product Owner]
        #linebreak()
        #text(size: 9pt)[Überwiegend remote, gelegentlich in Zürich (CH), Tuggen (CH)]
        #v(0.3em)
        #text(size: 9pt)[Interim Product Owner für die Koordination der Plattform-Entwicklung mit internationalen Teams und Abstimmung zwischen Business und Entwicklung]
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
        #text(size: 9pt)[07.2019 - 12.2019]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Parfümerie Douglas GmbH]
        #linebreak()
        #text(size: 9pt)[Senior Frontend Developer]
        #linebreak()
        #text(size: 9pt)[Düsseldorf]
        #v(0.3em)
        #text(size: 9pt)[Festanstellung als Senior Frontend Developer mit Fokus auf Feature-Entwicklung, technisches Mentoring und Team-Onboarding]
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
        #text(size: 9pt)[02.2017 - 07.2019]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Energybox Ltd]
        #linebreak()
        #text(size: 9pt)[Lead Frontend Engineer]
        #linebreak()
        #text(size: 9pt)[Überwiegend in Köln, gelegentlich in Hongkong und USA (Washington DC)]
        #v(0.3em)
        #text(size: 9pt)[Leitung des Frontend-Teams und Entwicklung einer IoT-Plattform für weltweites Energiedaten-Monitoring mit umfangreicher React-Komponenten-Bibliothek (150+ Komponenten)]
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
        #text(size: 9pt)[01.2018 - 11.2018]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[juts.ch / leadpoint.ch]
        #linebreak()
        #text(size: 9pt)[Software Engineer]
        #linebreak()
        #text(size: 9pt)[Remote, gelegentlich in Zürich (CH)]
        #v(0.3em)
        #text(size: 9pt)[Frontend-Entwicklung einer Food-Box-Subscription-Plattform mit Stripe und PayPal Integration für Abo-Zahlungen]
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
        #text(size: 9pt)[06.2015 - 02.2017]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[sipgate GmbH]
        #linebreak()
        #text(size: 9pt)[Software Entwickler]
        #linebreak()
        #text(size: 9pt)[Düsseldorf]
        #v(0.3em)
        #text(size: 9pt)[Festanstellung als Software Entwickler mit Fokus auf REST-API-Entwicklung, CRM-Integration und Migration zu React/Redux-Architektur für Telefonie-Anwendungen]
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
        #text(size: 9pt)[09.2013 - 05.2015]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[TIGEV Ingenieurgesellschaft mbH]
        #linebreak()
        #text(size: 9pt)[Ingenieur Energiedatenmanagement]
        #linebreak()
        #text(size: 9pt)[Münster]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung eines webbasierten Energiedatenmanagement-Systems mit Datenvisualisierung und Anbindung von Messgeräten und Sensoren]
        #v(0.3em)
        #text(size: 8pt)[PHP, JavaScript, Charts.js, Laravel, MySQL, CSS]
              ]
    )
  ]
    
#v(0.8em)

#v(0.5cm)

// Side Work Section
#text(size: 12pt, weight: "semibold")[Nebenprojekte]
#v(0.5em)

#block(breakable: false)[
    #grid(
      columns: (3.5cm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt)[11.2020 - 11.2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Beautytester Service / Parfümerie Douglas GmbH]
        #v(0.3em)
        #text(size: 9pt)[Konzeption und Entwicklung eines Produkttest-Services für über 20.000 User mit mehrstufigem Registrierungsflow und BazaarVoice API-Integration]
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
        #text(size: 9pt)[08.2023 - 11.2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[tourvy.de - Entwicklung Reiseplanungssoftware / Arne Wiese]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung einer KI-gestützten Reiseplanungssoftware, die durch eine 10-stufige AI-Pipeline vollständige Reiseangebote in unter 5 Minuten generiert und die manuelle Planungszeit um 90% reduziert]
        #v(0.3em)
        #text(size: 8pt)[SvelteKit 2, Svelte 5, TypeScript, Drizzle ORM, PostgreSQL, Supabase, Better Auth, OpenAI API, Inngest, Stripe, Mollie, Tailwind CSS, Zod, Playwright, Vitest, pnpm, Monorepo]
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
        #text(size: 9pt)[05.2025 - 11.2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[maklerupdate.de / Arne Wiese]
        #v(0.3em)
        #text(size: 9pt)[Plattform zur automatischen Überwachung von 50+ Maklern im Großraum Düsseldorf (Ziel: 400), die durch KI-gestützte Property-Extraction und tägliches Crawling manuelle Website-Checks vollständig ersetzt]
        #v(0.3em)
        #text(size: 8pt)[SvelteKit + Svelte 5, TypeScript, Supabase (PostgreSQL + PostGIS), Drizzle ORM, OpenAI GPT-5 + Claude, Inngest (Background Jobs), Deno (CLI), Firecrawl API, MCP Servers, Tailwind CSS v4, Vercel, React Email + Resend]
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
        #text(size: 9pt)[01.2016 - 06.2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[84rooms.com / Sebastian Schöllgen]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung und langfristige Betreuung einer Marketing-Plattform für Boutique-Hotels mit Stripe-Integration und KI-gestützter Content-Optimierung]
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
        #text(size: 9pt)[08.2021 - 05.2024]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Websites / Take Memories GmbH & Co. KG]
        #v(0.3em)
        #text(size: 9pt)[Migration mehrerer WordPress-Websites zu Astro und PayloadCMS mit Fokus auf Zero-JavaScript-Ansatz für optimale Performance und SEO]
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
        #text(size: 9pt)[01.2016 - 01.2022]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Whisky Adventskalender / Arne Wiese & Wilhelm Hemme]
        #v(0.3em)
        #text(size: 9pt)[Fullstack-Entwicklung einer WebApp zur Whisky-Bewertung mit Freunden]
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
        #text(size: 9pt)[01.2021 - 01.2022]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[maklerupdate.de / Arne Wiese]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung einer Immobilien-Plattform für Düsseldorf mit Fokus auf Datenerfassung und Suchfunktionalität]
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
        #text(size: 9pt)[06.2021 - 08.2021]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[bonsai-bayreuth.de / Bonsai Bayreuth]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung einer Landing Page mit Bestellsystem und CMS-Anbindung für Restaurant-Speisekarte]
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
        #text(size: 9pt)[06.2021]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[stefanwiese.com / Stefan Wiese]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung einer Landing Page mit SvelteKit]
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
        #text(size: 9pt)[04.2020 - 08.2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[maxis-zeitreisen.de / ProSiebenSat.1 Media SE (über Loyd Gmbh)]
        #v(0.3em)
        #text(size: 9pt)[Modernisierung der Vue.js-Plattform mit Aktualisierung des Technologie-Stacks und Erstellung wiederverwendbarer UI-Komponenten]
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
        #text(size: 9pt)[06.2020 - 07.2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[upperhand.co / Impact Products GmbH]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung einer mehrsprachigen Landing Page mit Shopify-Integration für den Go-Live der E-Commerce-Plattform]
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
        #text(size: 9pt)[04.2020 - 06.2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[need-mask.com (non-profit) / ITA RWTH Aachen]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung einer Non-Profit-Plattform für Covid-19 Schutzausrüstung zur Abwicklung großvolumiger Bestellungen mit GraphQL und optimiert für hohes Anfragevolumen]
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
        #text(size: 9pt)[04.2020 - 05.2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Handelsblatt Social Media Monitor / Cyberium GmbH]
        #v(0.3em)
        #text(size: 9pt)[Konzeption und Entwicklung eines Dashboards zum Vergleich von Social-Media-Kennzahlen von über 15 deutschen Banken und Versicherungen]
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
        #text(size: 9pt)[04.2020 - 05.2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Helpathon / Ways GmbH]
        #v(0.3em)
        #text(size: 9pt)[Frontend-Entwicklung einer gemeinnützigen Plattform zur Visualisierung und Kategorisierung von Hilfsideen]
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
        #text(size: 9pt)[02.2020 - 03.2020]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[douglas.ch / Parfümerie Douglas GmbH]
        #v(0.3em)
        #text(size: 9pt)[Analyse und Fehlerbehebung der Tracking-Implementierung für den Schweizer Onlineshop]
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
        #text(size: 9pt)[01.2019 - 04.2019]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[MONDAY.ROCKS GmbH]
        #v(0.3em)
        #text(size: 9pt)[Entwicklung einer WebApp für dynamische Kennzahlen-Visualisierung mit interaktiven SVG-Grafiken und CI/CD-Pipeline-Integration]
        #v(0.3em)
        #text(size: 8pt)[Vue.js, JavaScript, Firebase, GitLab CI, SVG]
              ]
    )
  ]
    
#v(0.8em)

#v(0.5cm)

// Education Section
#text(size: 12pt, weight: "semibold")[Ausbildung]
#v(0.5em)

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
        #text(size: 10pt, weight: "medium")[B. Eng. in Energietechnik]
        #linebreak()
        #text(size: 9pt)[Fachhochschule Münster]
        #v(0.3em)
        #text(size: 9pt)[Ingenieurstudium mit Fokus auf Energiesysteme und -technik. Die Bachelorarbeit kombinierte Prozessanalyse mit nachhaltiger Energienutzung durch Integration von KWK-Anlagen.]
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
        #text(size: 10pt, weight: "medium")[Auslandssemester am Royal Institute of Technology (KTH)]
        #linebreak()
        #text(size: 9pt)[Stockholm, Schweden]
        #v(0.3em)
        #text(size: 9pt)[Auslandssemester mit Schwerpunkt auf internationaler Forschung und industrieller Praxis. Kombination aus Mitarbeit in einem Forschungsprojekt zur Informationssystem-Architektur und praktischer Analyse bei Scania AB.]
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
        #text(size: 9pt)[Universität Bayreuth]
        #v(0.3em)
        #text(size: 9pt)[Interdisziplinäres Masterstudium mit Fokus auf nachhaltige Energiesysteme. Die Masterarbeit zur Entwicklung eines webbasierten Monitoring-Systems legte den Grundstein für die spätere Spezialisierung auf Softwareentwicklung.]
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
        #text(size: 9pt)[2003 – 2006]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[Allgemeine Hochschulreife]
        #linebreak()
        #text(size: 9pt)[Technisches Gymnasium Oldenburg]
        #v(0.3em)
        #text(size: 9pt)[Technische Hochschulreife mit Schwerpunkt auf Mathematik und Informatik, die die Grundlage für das spätere ingenieur- und softwaretechnische Studium bildete.]
              ]
    )
  ]
    
#v(0.8em)

