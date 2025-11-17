// CV Template for A4 format
// Standard professional CV layout with profile, work experience, and education

#set page(
  paper: "a4",
  margin: (
    left: 20mm,
    right: 20mm,
    top: 20mm,
    bottom: 20mm,
  )
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
#let profile = cv-data.at("profile")
#align(center)[
  #text(size: 18pt, weight: "bold")[#profile.at("name")]
  
  #v(0.3em)
  
  #text(size: 11pt)[
    #profile.at("title")
    #if profile.at("location") != none [
      · #profile.at("location")
    ]
  ]
  
  #if profile.at("education") != none [
    #v(0.2em)
    #text(size: 9pt, fill: gray)[#profile.at("education")]
  ]
  
  #if profile.at("intro") != none [
    #v(0.5em)
    #text(size: 10pt)[#profile.at("intro")]
  ]
  
  #v(0.3em)
  
  #text(size: 9pt, fill: gray)[
    #profile.at("email")
    #if profile.at("website") != none [
      · #profile.at("website")
    ]
  ]
]

#v(1cm)

// Main Work Section
#let main_work = cv-data.at("main-work")
#if main_work.len() > 0 [
  #text(size: 12pt, weight: "semibold")[Projekte & Festanstellungen]
  #v(0.5em)
  
  #for entry in main_work [
    #grid(
      columns: (40mm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt, fill: gray)[#entry.dates]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[
          #if entry.project != none and entry.project != "" [
            #entry.project
            #text(fill: gray)[ / ]
          ]
          #entry.company
        ]
        
        #if entry.position != none and entry.position != "" [
          #linebreak()
          #text(size: 9pt, fill: gray)[#entry.position]
        ]
        
        #if entry.location != none and entry.location != "" [
          #linebreak()
          #text(size: 9pt, fill: gray)[#entry.location]
        ]
        
        #if entry.intro != none and entry.intro != "" [
          #v(0.3em)
          #text(size: 9pt)[#entry.intro]
        ]
        
        #if entry.tasks.len() > 0 [
          #v(0.3em)
          #block(
            width: 100%,
            [
              #for task in entry.tasks [
                #text(size: 9pt)[• #task]
                #linebreak()
              ]
            ]
          )
        ]
        
        #if entry.technologies.len() > 0 [
          #v(0.3em)
          #text(size: 8pt, fill: gray)[
            #entry.technologies.join(", ")
          ]
        ]
      ]
    )
    
    #v(0.8em)
  ]
]

#v(0.5cm)

// Side Work Section
#let side_work = cv-data.at("side-work")
#if side_work.len() > 0 [
  #text(size: 12pt, weight: "semibold")[Nebenprojekte]
  #v(0.5em)
  
  #for entry in side_work [
    #grid(
      columns: (40mm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt, fill: gray)[#entry.dates]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[
          #if entry.project != none and entry.project != "" [
            #entry.project
            #text(fill: gray)[ / ]
          ]
          #entry.company
        ]
        
        #if entry.position != none and entry.position != "" [
          #linebreak()
          #text(size: 9pt, fill: gray)[#entry.position]
        ]
        
        #if entry.location != none and entry.location != "" [
          #linebreak()
          #text(size: 9pt, fill: gray)[#entry.location]
        ]
        
        #if entry.intro != none and entry.intro != "" [
          #v(0.3em)
          #text(size: 9pt)[#entry.intro]
        ]
        
        #if entry.tasks.len() > 0 [
          #v(0.3em)
          #block(
            width: 100%,
            [
              #for task in entry.tasks [
                #text(size: 9pt)[• #task]
                #linebreak()
              ]
            ]
          )
        ]
        
        #if entry.technologies.len() > 0 [
          #v(0.3em)
          #text(size: 8pt, fill: gray)[
            #entry.technologies.join(", ")
          ]
        ]
      ]
    )
    
    #v(0.8em)
  ]
]

#v(0.5cm)

// Education Section
#if cv-data.education.len() > 0 [
  #text(size: 12pt, weight: "semibold")[Ausbildung]
  #v(0.5em)
  
  #for entry in cv-data.education [
    #grid(
      columns: (40mm, 1fr),
      column-gutter: 1cm,
      row-gutter: 0.3em,
      
      // Date column
      [
        #text(size: 9pt, fill: gray)[#entry.dates]
      ],
      
      // Content column
      [
        #text(size: 10pt, weight: "medium")[#entry.title]
        #linebreak()
        #text(size: 9pt, fill: gray)[#entry.location]
        
        #if entry.tasks.len() > 0 [
          #v(0.3em)
          #block(
            width: 100%,
            [
              #for task in entry.tasks [
                #text(size: 9pt)[• #task]
                #linebreak()
              ]
            ]
          )
        ]
      ]
    )
    
    #v(0.8em)
  ]
]

