---
title: Easy Invoice
intro: SaaS-Rechnungstool für deutsche Freelancer und Kleinunternehmer – vollständige Rechnungsverwaltung mit Ausgabenverfolgung und Team-Kollaboration für 8€/Monat
status: coming-soon
featured: true
role: Gründer & Lead Developer
timeline: 2020 - heute

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
  Deutsche Freelancer kämpfen mit unübersichtlichen, überladenen Tools wie Lexoffice oder sevDesk. Die meisten brauchen keine vollständige Buchhaltung – nur schnelle Rechnungen, Ausgaben tracken und am Jahresende einen Überblick für den Steuerberater. Bestehende Tools kosten 15-40€/Monat für Features, die niemand nutzt.

solution: |
  Easy Invoice ist das Rechnungstool, das ich seit 2020 selbst nutze – jetzt als SaaS für andere. Fokus auf das Wesentliche: Rechnungen erstellen in unter einer Minute, Ausgaben kategorisieren, monatliche Reports. Kein Buchhaltungs-Overhead, keine versteckten Kosten. 8€/Monat flat, unlimitierte Team-Mitglieder.

results:
  - value: "5 Jahre"
    metric: In eigener Nutzung getestet
  - value: "8€/Monat"
    metric: Flat-Rate, keine Limits
  - value: "<1 Min"
    metric: Zeit bis zur fertigen Rechnung

architecture: |
  Full-Stack TypeScript mit TanStack Router für Client-Side Routing und TanStack Query für optimistisches Data Fetching. Supabase (gehostet in Frankfurt) als Backend für DSGVO-Konformität und schnelle Latenzen im DACH-Raum. PDF-Generierung serverseitig mit Print-optimiertem Layout, E-Mail-Versand über Resend.

challenges:
  - "5 Jahre Tech-Stack Evolution: Von Firebase über Convex zurück zu Supabase – jedes Refactoring brachte neue Erkenntnisse"
  - "PDF-Layout: Pixel-perfekte Rechnungen, die auf jedem Drucker gleich aussehen, mit automatischer Seitenumbruch-Logik"
  - "Deutsche Steuer-Compliance: Reverse-Charge, Kleinunternehmerregelung, korrekte USt-Berechnung je nach Kundenland"
  - "Multi-Tenant Team-System: Einfaches Rollen-System (Owner/Admin/Member) pro Organisation"

learnings:
  - "Convex hat fantastische DX, aber für den deutschen Markt ist DSGVO-Konformität wichtiger – zurück zu Supabase mit EU-Hosting in Frankfurt"
  - "Eigene Tools bauen lohnt sich: 5 Jahre Nutzung = tiefes Verständnis für echte User-Probleme"
  - "AI-Features machen Spaß und bringen echten Mehrwert: Auto-Tagging, Texte schreiben, Korrekturlesen – bis hin zum Wingman für faire Stundensätze"
  - "DACH-Markt hat spezielle Anforderungen: QR-Codes für Überweisungen, IBAN-Validierung, deutsche Rechtschreibung in Templates"
---
