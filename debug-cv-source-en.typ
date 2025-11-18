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
  #text(size: 10pt)[10+ years of full-stack development – specialized in pragmatic solutions, rapid MVPs, and AI integration]
  
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
        #text(size: 9pt)[05/2025 - 11/2025]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[maklerupdate.de / Arne Wiese]
        #v(0.3em)
        #text(size: 9pt)[Platform for automatic monitoring of 400+ real estate agents in the Greater Düsseldorf area, completely replacing manual website checks through AI-powered property extraction and daily crawling]
        #v(0.3em)
        #text(size: 8pt)[SvelteKit + Svelte 5, TypeScript, Supabase (PostgreSQL + PostGIS), Drizzle ORM, OpenAI GPT-5 + Claude, Inngest (Background Jobs), Deno (CLI), Firecrawl API, MCP Servers, Tailwind CSS v4, Vercel, React Email + Resend]
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

