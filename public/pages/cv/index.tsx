import PageHeader from "../../components/PageHeader";
import CvListing, { Listing } from "../../components/CvListing";

const workExperience: Listing[] = [
  {
    position: "Software Entwickler",
    company: "Arne Wiese",
    project: "maklerupdate.de",
    location: "Düsseldorf",
    type: "side",
    from: "2021-01-01",
    to: "now",
    tasks: ["Entwicklung einer Immobilien-Plattform für Düsseldorf"],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Firebase",
      "Firestore",
      "Vercel",
      "Apify",
      "Google Big-Query",
      "Algolia",
    ],
  },
  {
    company: "Parfümerie Douglas GmbH",
    project: "Gewinnspiel Service",
    position: "Senior Software Engineer",
    location: "Remote",
    type: "side",
    from: "2021-03-01",
    to: "2021-07-01",
    tasks: [
      "Integration eines mehrstufigen Gewinnspielformulars für Beauty-Produkte in Onlineshop-Plattform (Backend und Frontend)",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Jest",
      "Enzyme",
      "Next.js",
      "Postgres",
      "Figma",
    ],
  },
  {
    company: "Stefan Wiese",
    project: "stefanwiese.com",
    position: "Lead Software Engineer",
    location: "Düsseldorf",
    type: "side",
    from: "2021-06-01",
    to: "2021-06-01",
    tasks: ["Entwicklung Landingpage"],
    technologies: ["JavaScript", "Svelte"],
  },
  {
    company: "Frontnow",
    position: "Lead Software Engineer",
    location: "Düsseldorf, Berlin",
    type: "project",
    from: "2021-03-01",
    to: "now",
    tasks: ["Entwicklung einer Plattform für Einkäufer und Lieferanten"],
    technologies: [
      "JavaScript",
      "Tailwind",
      "Svelte",
      "Vite.js",
      "Firebase",
      "Firestore",
      "Algolia",
      "Tailwind",
    ],
  },
  {
    company: "Parfümerie Douglas GmbH",
    project: "Beautytester Service",
    position: "Senior Software Engineer",
    location: "Remote",
    type: "side",
    from: "2020-11-01",
    to: "2021-03-01",
    tasks: [
      "Konzeption und Entwicklung eines Produkttest-Services für voraussichtlich ca. 20.000 User pro Kampagne sowie Anbindung weiterer externer Services über Rest-APIs",
      "Integration eines mehrstufigen Registrierungsformulars für Produkttests in Onlineshop-Plattform (Backend und Frontend)",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Jest",
      "Enzyme",
      "Next.js",
      "Postgres",
      "BazaarVoice API",
      "Figma",
    ],
  },
  {
    company: "carIT AG",
    project: "caroutlet.ch",
    position: "Software Architekt",
    location: "Zürich (CH), Tuggen (CH), Remote",
    type: "project",
    from: "2020-05-01",
    to: "2021-03-01",
    tasks: [
      "Übernahme einer bereits zum Teil implementierten Fahrzeugplattform zur Sicherstellung des geplanten Go-Live mit gohugo.io und Vue.js",
      "Abstimmung externer Schnittstellen mit Partnerunternehmen sowie Implementierung (u.a. digitale Einreichung von Leasing- und Versicherungsanträgen)",
      "Entwicklung eines mehrstufigen Vue.js basierten Checkouts mit ca. 90 Formular-Feldern",
      "Re-Konzeptionierung und Neuentwicklung der Plattform mit React/Next.js und Backend mittels Firebase/Firestore",
      "Eigenentwicklung maßgeschneiderter, performanter React Komponenten (u.a. 360° Fahrzeugansicht, Zoom-Ansicht)",
    ],
    technologies: [
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Node.js",
      "Firebase",
      "Google Cloud",
      "Cloud Functions",
      "Figma",
    ],
  },
  {
    company: "Impact Products GmbH",
    project: "upperhand.co",
    position: "Software Engineer",
    location: "Remote",
    type: "side",
    from: "2020-06-01",
    to: "2020-07-01",
    tasks: [
      "Erstellung einer mehrsprachigen Landingpage nach Designvorgabe zur Sicherstellung des kurzfristig geplanten Go-Live",
      "Anbindung Newsletter-Funktionalität durch Shopify API zur Verknüpfung mit folgendem Shop-Projekt",
    ],
    technologies: ["TypeScript", "Next.js", "Shopify API", "Figma"],
  },
  {
    company: "carIT AG",
    project: "carauktion.ch",
    position: "Interim Product Owner",
    location: "Zürich (CH), Tuggen (CH), Remote",
    type: "project",
    from: "2019-12-01",
    to: "2020-05-01",
    tasks: [
      "Koordination der API- und Frontend Entwicklung mit externen Dienstleistern",
      "Erstellung und Verteilung von Tasks (User-Stories) an internationales Team",
    ],
    technologies: [],
  },
  {
    position: "Software Entwickler",
    company: "ITA RWTH Aachen",
    project: "need-mask.com (non-profit)",
    location: "Remote",
    type: "side",
    from: "2020-04-01",
    to: "2020-06-01",
    tasks: [
      "Entwicklung einer gemeinnützigen Plattform zur Vermittlung von Schutzausrüstung zur Bewältigung der Covid-19 Krise mit der RWTH Aachen und zwei weiteren Entwicklern. (Zwischenzeitlich wurden über die Plattform mehrere Millionen Schutzausrüstungen (wie Masken) pro Tag angefragt)",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "GraphQL",
      "Hasura",
      "Postgres",
      "Vercel",
      "DigitalOcean",
    ],
  },
  {
    position: "Software Engineer",
    company: "Cyberium GmbH",
    project: "Handelsblatt Social Media Monitor",
    location: "Düsseldorf",
    from: "2020-04-01",
    to: "2020-05-01",
    type: "side",
    tasks: [
      "Konzeption und Entwicklung eines Dashboards zum Vergleich von Socialmedia-Kennzahlen von über 15 deutscher Banken und Versicherungen",
      "Anbindung verschiedener APIs zum Abruf der Daten sowie Normalisierung (inkl. Gruppierung nach Tages-, Wochen- und Monatsintervallen)",
    ],
    technologies: ["React", "TypeScript", "Charts", "Firestore"],
  },
  {
    position: "Senior Software Engineer",
    project: "Helpathon",
    company: "Ways GmbH",
    location: "Remote",
    type: "side",
    from: "2020-04-01",
    to: "2020-05-01",
    tasks: [
      'Front-End-Entwicklung des gemeinnützigen "Helpathon"-Projekts zur Visualisierung und Kategorisierung der Ideen Dortmunder Unternehmer und Bürger',
    ],
    technologies: ["React", "TypeScript", "CSS", "Charts"],
  },
  {
    position: "Software Engineer",
    project: "maxis-zeitreisen.de",
    company: "ProSiebenSat.1 Media SE (über Loyd Gmbh)",
    type: "side",
    location: "Remote",
    from: "2020-04-01",
    to: "2020-08-01",
    tasks: [
      "Aktualisierung der Website auf neue Vue.js-Version und Webpack-Konfiguration",
      "Entfernung von Code/Style Dopplungen und Erstellung verschiedener Vue.js UI-Komponenten",
      "Pflege des Systems und Erweiterung der Inhalte",
    ],
    technologies: ["Vue.js", "JavaScript", "CSS", "Figma"],
  },
  {
    position: "Software Engineer",
    project: "douglas.ch",
    company: "Parfümerie Douglas GmbH",
    location: "Düsseldorf",
    type: "side",
    from: "2020-02-01",
    to: "2020-03-01",
    tasks: [
      "Analyse und Fehlerbehebung der Tracking-Implementierung vom CH Onlineshop",
    ],
    technologies: ["TypeScript", "React", "Analytics"],
  },
  {
    position: "Senior Frontend Developer",
    company: "Parfümerie Douglas GmbH",
    location: "Düsseldorf",
    type: "permanent",
    from: "2019-07-01",
    to: "2019-12-01",
    tasks: [
      "Integration gesponsorter Produkte in das Produkt-Listing",
      "Integration der Douglas Beauty-Stories in das Produkt-Listing",
      "Organisation von Workshops zur Vermittlung von Wissen in JavaScript und React für internationales Team",
      "Recruitment und Onboarding neuer Entwickler",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Jest",
      "Enzyme",
      "Redux",
      "CSS",
      "Hybris",
      "Java",
      "Scrum",
      "Figma",
    ],
  },
  {
    position: "Lead Frontend Engineer / Senior Software Engineer",
    company: "Energybox Ltd",
    location: "Köln, Hongkong, USA (Washington DC)",
    type: "permanent",
    from: "2017-02-01",
    to: "2019-07-01",
    tasks: [
      "Ab 02.2019 Lead Frontend Engineer",
      "Entwicklung einer Plattform zur Verwaltung von weltweit eingesetzten IoT-Geräten zur Datenerfassung mit Schwerpunkt Energiedaten",
      "Entwicklung Kundendashboard zur Einsicht von Messdaten und Kennzahlen",
      "Aufbau einer React Komponenten Bibliothek mit über 150 Komponenten",
      "DevOps u.a. Docker Swarm und AWS, CI/CD",
      "Aufbau und Moderation von agilen Entwicklungsprozessen",
    ],
    technologies: ["TypeScript", "MongoDB", "React", "AWS", "Docker", "Scrum"],
  },
  {
    position: "Software Engineer",
    company: "MONDAY.ROCKS GmbH",
    location: "Düsseldorf",
    type: "side",
    from: "2019-01-01",
    to: "2019-04-01",
    tasks: [
      "Entwicklung einer WebApp mit Fokus auf Darstellung von Kennzahlen mit dynamischen SVGs",
      "Erstellung verschiedener Vue.js UI-Komponenten",
      "Aufbau CI/CD mit Gitlab",
    ],
    technologies: ["Vue.js", "JavaScript", "Firebase"],
  },
  {
    position: "Software Engineer",
    project: "juts.ch",
    company: "leadpoint.ch",
    location: "Remote",
    from: "2018-01-01",
    to: "2018-11-01",
    type: "side",
    tasks: [
      "Frontend Entwicklung einer Webapplikation zum Angebot und zur Abwicklung von „Foodboxen“ im Abonnement",
      "Implementierung der regelmäßigen Zahlungsabwicklung mit Stripe und PayPal",
      "Unterstützung des Backend-Entwicklers beim Aufbau der REST-API mit Python/Django",
      "Aufbau CI/CD mit Bitbucket, Docker-Compose, Google Cloud und Netlify",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Flow",
      "Redux",
      "Python",
      "Django",
      "Postgres",
      "Docker",
      "Google Cloud",
      "Stripe API",
      "Paypal API",
    ],
  },
  {
    position: "Software Engineer",
    company: "Sebastian Schöllgen",
    project: "eightyfourrooms.com",
    location: "Düsseldorf",
    from: "2016-01-01",
    type: "side",
    to: "now",
    tasks: [
      "Fullstack Entwicklung einer Marketing-Plattform für Boutique-Hotels und Reiseguides",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "CSS",
      "Django",
      "Python",
      "Postgres",
      "Vercel",
      "Cloud Functions",
      "Google Cloud",
    ],
  },
  {
    position: "Software Engineer",
    company: "Wilhelm Hemme",
    project: "Whisky Adventskalender",
    location: "Düsseldorf",
    from: "2016-01-01",
    type: "side",
    to: "now",
    tasks: [
      "Fullstack Entwicklung einer WebApp zur Bewertung von Whisky mit Freunden",
    ],
    technologies: ["CSS", "Django", "Python", "Postgres", "Google Cloud"],
  },
  {
    position: "Software Entwickler",
    company: "sipgate GmbH",
    location: "Düsseldorf",
    type: "permanent",
    from: "2015-06-01",
    to: "2017-02-01",
    tasks: [
      "Fullstack-Entwicklung in verschiedenen cross-funktionalen Scrum Teams",
      "Weiterentwicklung einer REST-API und HTTP push-API für Telefonie-Anwendungen",
      "Integration der sipgate Produkte in externe CRM Anwendungen",
      "Migration von sipgate Produkten zu React und Redux basierten Webanwendungen",
    ],
    technologies: [
      "JavaScript",
      "React",
      "CSS",
      "MySQL",
      "Java",
      "PHP",
      "Scrum",
    ],
  },
  {
    position: "Software Engineer / Ingenieur Energiedatenmanagement",
    company: "TIGEV Ingenieurgesellschaft mbH",
    location: "Münster",
    type: "permanent",
    from: "2013-09-01",
    to: "2015-05-01",
    tasks: [
      "Fullstack Entwicklung eines webbasierten Energiedatenmanagementsystems",
      "Planung von Messkonzepten zur Erfassung von Energiedaten",
      "Vor-Ort Inbetriebnahme von Datenloggern und Sensoren",
    ],
    technologies: ["PHP", "JavaScript", "Charts", "Laravel", "MySQL", "CSS"],
  },
];

const education: Listing[] = [
  {
    title: "M. Sc in Energy Science and Technology",
    location: "Universität Bayreuth",
    from: "2011-04-01",
    to: "2014-05-01",
    tasks: [
      "Masterarbeit zum Thema: „Development of a web-based Machine-tool Monitoring System“",
    ],
    type: "education",
    technologies: [],
    project: "",
    company: "",
    position: "",
  },
  {
    title: "Auslandssemester am Royal Institute of Technology (KTH)",
    location: "Stockholm, Schweden",
    from: "2012-10-01",
    to: "2013-05-01",
    tasks: [
      "Mitarbeit im internationalen Forschungsprojekt „Line Information System Architecture“",
      "Analyse der automatischen Qualitätskontrolle von LKW Dieselmotoren bei Scania AB",
    ],
    type: "education",
    technologies: [],
    project: "",
    company: "",
    position: "",
  },
  {
    title: "B. Eng. in Energietechnik",
    location: "Fachhochschule Münster",
    from: "2007-10-01",
    to: "2010-11-01",
    tasks: [
      "Bachelorarbeit zum Thema: „Untersuchung eines Galvanikprozesses hinsichtlich der Temperaturen zur Einbindung eines Blockheizkraftwerkes“",
    ],
    type: "education",
    technologies: [],
    project: "",
    company: "",
    position: "",
  },
  {
    title: "Allgemeine Hochschulreife",
    location: "Technisches Gymnasium Oldenburg",
    from: "2003-08-01",
    to: "2006-05-01",
    tasks: ["Leistungskurse Mathematik und Informatik"],
    type: "education",
    technologies: [],
    project: "",
    company: "",
    position: "",
  },
];

const CvPage = () => {
  return (
    <>
      <PageHeader />

      <CvListing
        title="Arbeitserfahrung"
        items={workExperience.filter((item) => item.type !== "side")}
      />

      <CvListing
        title="Nebenprojekte"
        items={workExperience.filter((item) => item.type === "side")}
      />

      <CvListing title="Ausbildung" items={education} />
    </>
  );
};

export default CvPage;
