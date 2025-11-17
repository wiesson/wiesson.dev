import { Bot, Database, Layers, Award, Zap, Download, FileText, Workflow, Building2, BarChart3, Code2, Rocket, TrendingUp, Wrench, Target, Users } from '@lucide/svelte';
import type { ComponentType } from 'svelte';

export interface BundledService {
	name: string;
	price: string;
	duration: string;
	features: string[];
}

export interface Example {
	title: string;
	description: string;
	tech: string[];
	results?: string;
}

export interface FAQ {
	q: string;
	a: string;
}

export interface Service {
	id: string;
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	icon: ComponentType;
	price: string;
	priceRange: { min: number; max: number; unit: string } | { value: number; unit: string };
	features: string[];
	href: string;
	bundledServices: BundledService[];
	examples: Example[];
	process: string[];
	faqs: FAQ[];
	badge?: 'Beliebt' | 'Neu' | 'Best Value';
}

export const services: Service[] = [
	{
		id: 'ai',
		slug: 'ai-development',
		title: 'AI Development & Automation',
		subtitle: 'Intelligente Systeme für komplexe Aufgaben',
		description: 'Multi-Agent-Systeme, LLM-Integration & Custom Workflows – von der Feature-Entwicklung bis zum kompletten AI-System',
		icon: Bot,
		price: '4.500 € - 45.000 €',
		priceRange: { min: 4500, max: 45000, unit: '€' },
		features: [
			'AI Feature Sprint in 5-7 Tagen',
			'High-Velocity MVP in 30 Tagen',
			'Multi-Agent Orchestrierung',
			'LLM-Integration & RAG-Systeme',
			'Custom Automation Workflows'
		],
		href: '/services/ai-development',
		badge: 'Beliebt',
		bundledServices: [
			{
				name: 'AI Feature Sprint',
				price: '4.500 € - 8.500 €',
				duration: '5-7 Tage',
				features: [
					'Ein großes oder 2-3 kleinere Features',
					'AI-Integration falls relevant',
					'Code Review & Refactoring',
					'Deployment in bestehende App',
					'Dokumentation'
				]
			},
			{
				name: 'High-Velocity MVP',
				price: '15.000 € - 28.000 €',
				duration: '30 Tage (fest)',
				features: [
					'Backend (Node.js/Python) + Frontend (SvelteKit/React)',
					'AI/LLM Integration (OpenAI, Claude, Custom)',
					'Datenbank-Schema & Migrations',
					'Authentication & User Management',
					'Deployment & CI/CD Pipeline',
					'Basic Analytics Integration'
				]
			},
			{
				name: 'Multi-Agent System',
				price: '18.000 € - 45.000 €',
				duration: '3-8 Wochen',
				features: [
					'3-10 spezialisierte Agents mit definierten Rollen',
					'Orchestrierung & Shared Memory',
					'Function Calling & Tool Integration',
					'Monitoring & Logging-Dashboard',
					'Error Handling & Self-Correction',
					'Dokumentation & Handover'
				]
			},
			{
				name: 'LLM Integration Package',
				price: '8.000 € - 18.000 €',
				duration: '2-4 Wochen',
				features: [
					'RAG-System oder Custom LLM-Pipeline',
					'Vector Database Setup (Pinecone, Weaviate)',
					'API Integration & Prompt Engineering',
					'Caching & Cost Optimization',
					'User Interface Components',
					'Testing & Monitoring'
				]
			},
			{
				name: 'Custom Automation Workflow',
				price: '5.000 € - 15.000 €',
				duration: '1-4 Wochen',
				features: [
					'Prozess-Analyse & Design',
					'Agentic Workflow Implementation',
					'Tool-Integration (APIs, Webhooks)',
					'Error Handling & Notifications',
					'Monitoring & Logging',
					'Dokumentation & Training'
				]
			}
		],
		examples: [
			{
				title: 'AI-Powered Travel Planning Platform',
				description: 'Multi-Agent-System für automatische Reiseplanung: Email-Analyse, Destination-Matching, Itinerary-Generierung mit Hotels, Aktivitäten und PDF-Export',
				tech: ['TypeScript', 'Claude AI', 'Supabase', 'Vector Search', 'Typst'],
				results: 'Von 2 Stunden manueller Arbeit zu 5 Minuten automatisierter Reiseplanung'
			},
			{
				title: 'Document Intelligence System',
				description: 'LLM-basierte Extraktion strukturierter Daten aus Verträgen, Rechnungen und PDFs mit OCR und Validation',
				tech: ['Python', 'OpenAI GPT-4', 'LangChain', 'PostgreSQL'],
				results: '90% Zeitersparnis bei Datenerfassung, 95%+ Accuracy'
			},
			{
				title: 'Customer Support Automation',
				description: 'AI-Agent für automatische Email-Klassifizierung, Antwort-Generierung und CRM-Integration',
				tech: ['Node.js', 'Claude API', 'Vector DB', 'HubSpot API'],
				results: '70% weniger Support-Anfragen, 24/7 Verfügbarkeit'
			}
		],
		process: [
			'Discovery Call: Requirements, Use Cases & Success Metrics (30-60 min)',
			'Konzept & Proposal: Architektur, Tech Stack, Timeline (1-2 Tage)',
			'Kick-Off: Zugriff auf Systeme, Prozess-Review (50% Anzahlung)',
			'Entwicklung: Iterative Entwicklung mit wöchentlichen Updates',
			'Delivery & Handover: Testing, Dokumentation, Training (50% Rest-Zahlung)'
		],
		faqs: [
			{
				q: 'Welche AI-Modelle nutzt ihr?',
				a: 'Wir arbeiten mit den führenden Modellen (OpenAI GPT-4, Claude, Gemini) und wählen das beste Modell für deinen Use Case. Bei Bedarf auch Self-Hosted oder Fine-Tuned Models.'
			},
			{
				q: 'Wie hoch sind die laufenden AI-Kosten?',
				a: 'Abhängig vom Volumen: Klein (100-500€/Monat), Mittel (500-2000€/Monat), Groß (2000€+/Monat). Wir optimieren für niedrige Kosten durch Caching, Prompt-Optimization und Model-Wahl.'
			},
			{
				q: 'Kann ich das System selbst erweitern?',
				a: 'Ja! Wir liefern sauberen, dokumentierten Code, API-Dokumentation und optional ein Training-Session. Du behältst volle Kontrolle.'
			}
		]
	},
	{
		id: 'data',
		slug: 'data-extraction',
		title: 'Data Extraction & Intelligence',
		subtitle: 'Automatisierte Datenextraktion & Verarbeitung',
		description: 'Web Scraping, Document Parsing & Data Pipelines – von einmaligen Snapshots bis zu kontinuierlichen Datenströmen',
		icon: Database,
		price: '6.000 € - 18.000 € oder 3.000 €/Monat',
		priceRange: { min: 6000, max: 18000, unit: '€' },
		features: [
			'Web Data Snapshots (10k-500k Datensätze)',
			'Self-Healing Data Pipelines',
			'LLM-basiertes Document Parsing',
			'API-Entwicklung für Datenzugriff',
			'Change Detection & Alerts'
		],
		href: '/services/data-extraction',
		bundledServices: [
			{
				name: 'Web Data Snapshot',
				price: '6.000 € - 18.000 €',
				duration: '1-3 Wochen',
				features: [
					'Custom Scraper (Playwright/Puppeteer + LLM)',
					'10.000 - 500.000 strukturierte Datensätze',
					'CSV/JSON/Parquet Export',
					'Validation & Deduplizierung',
					'Dokumentation der Datenstruktur'
				]
			},
			{
				name: 'Continuous Data Pipeline',
				price: '3.000 € - 9.000 €/Monat',
				duration: 'Ongoing (Setup: 4.000 € - 12.000 €)',
				features: [
					'Automatisierte Crawling-Pipeline',
					'Self-Healing bei Layout-Änderungen (LLM-based)',
					'Change Detection & Alerts',
					'Optional: REST API für Datenzugriff',
					'Monitoring Dashboard',
					'Monatliche Reports'
				]
			},
			{
				name: 'Document Parsing Engine',
				price: '8.000 € - 22.000 €',
				duration: '2-4 Wochen',
				features: [
					'OCR + LLM-based Extraction',
					'Schema Normalization',
					'Batch Processing oder API',
					'Validation & Quality Checks',
					'Export in gewünschtes Format',
					'Beispiel-Datensatz & Dokumentation'
				]
			}
		],
		examples: [
			{
				title: 'Real Estate Market Intelligence',
				description: 'Täglicher Crawl von 50.000+ Immobilien-Anzeigen über 20 Portale mit Preis-Tracking, Change Detection und Market Insights',
				tech: ['Python', 'Playwright', 'PostgreSQL', 'FastAPI', 'Grafana'],
				results: 'Vollständige Marktübersicht, 24h Aktualität, API-Zugriff'
			},
			{
				title: 'Contract Data Extraction',
				description: 'Extraktion von Vertrags-Metadaten (Parteien, Laufzeiten, Kündigungsfristen, Beträge) aus 10.000+ PDFs',
				tech: ['Python', 'OpenAI GPT-4', 'OCR', 'PostgreSQL'],
				results: '95%+ Accuracy, von 2 Wochen manueller Arbeit zu 2 Stunden'
			},
			{
				title: 'E-Commerce Price Monitoring',
				description: 'Stündliches Tracking von Konkurrenz-Preisen über 50+ Shops mit automatischen Alerts bei Preisänderungen',
				tech: ['Node.js', 'Puppeteer', 'Redis', 'Slack API'],
				results: 'Real-time Competitive Intelligence, automatische Repricing'
			}
		],
		process: [
			'Discovery Call: Datenquellen, Ziel-Schema, Volumen (30-60 min)',
			'Feasibility Check: Technische Machbarkeit, Legal Review (1-2 Tage)',
			'Kick-Off: Beispiel-Daten, API-Zugriff (50% Anzahlung)',
			'Entwicklung: Scraper-Entwicklung, Testing, Validation',
			'Delivery: Datensatz, Dokumentation, Optional: API & Monitoring (50% Rest)'
		],
		faqs: [
			{
				q: 'Ist Web Scraping legal?',
				a: 'Ja, wenn du dich an die Terms of Service hältst und keine geschützten Daten extrahierst. Wir prüfen vor Projektstart die rechtliche Machbarkeit.'
			},
			{
				q: 'Was passiert wenn sich das Website-Layout ändert?',
				a: 'Bei einmaligen Projekten: kostenloser Fix. Bei Continuous Pipelines: Self-Healing durch LLM-basierte Extraktion + Monitoring-Alerts.'
			},
			{
				q: 'Wie groß können die Datenmengen sein?',
				a: 'Von 10k bis 10M+ Datensätze. Bei sehr großen Volumen arbeiten wir mit Distributed Scraping und optimieren für Performance.'
			}
		]
	},
	{
		id: 'platform',
		slug: 'platform-development',
		title: 'SaaS & Platform Development',
		subtitle: 'Production-Ready Plattformen & Dashboards',
		description: 'Von Custom Dashboards bis zur kompletten SaaS-Plattform – Backend, Frontend, Billing, Deployment',
		icon: Layers,
		price: '5.000 € - 55.000 €',
		priceRange: { min: 5000, max: 55000, unit: '€' },
		features: [
			'Custom Dashboards & Admin Panels',
			'REST/GraphQL API Development',
			'Multi-Tenant SaaS Platforms',
			'Payment Integration (Stripe, Paddle)',
			'Production Deployment & CI/CD'
		],
		href: '/services/platform-development',
		bundledServices: [
			{
				name: 'Custom Dashboard / Admin Panel',
				price: '5.000 € - 14.000 €',
				duration: '1-3 Wochen',
				features: [
					'Responsive Dashboard (SvelteKit/React)',
					'Data Visualizations (Charts, Tables, Maps)',
					'Real-time Updates (optional)',
					'Filtering & Search',
					'Export-Funktionen (PDF, CSV, Excel)',
					'User Permissions'
				]
			},
			{
				name: 'API Development & Integration',
				price: '4.000 € - 12.000 €',
				duration: '1-3 Wochen',
				features: [
					'API Design & Documentation',
					'Authentication & Rate Limiting',
					'Error Handling & Validation',
					'Testing & Monitoring',
					'Deployment',
					'Client SDK (optional)'
				]
			},
			{
				name: 'SaaS Platform Build',
				price: '25.000 € - 55.000 €',
				duration: '6-12 Wochen',
				features: [
					'Backend API (Node.js/Python, REST/GraphQL)',
					'Frontend (SvelteKit/React/Next.js)',
					'Multi-Tenant Architecture',
					'User Roles & Permissions',
					'Payment Integration (Stripe/Paddle)',
					'Email & Notifications',
					'CI/CD & Production Deployment',
					'Monitoring & Error Tracking'
				]
			}
		],
		examples: [
			{
				title: 'Analytics Dashboard für SaaS',
				description: 'Real-time Analytics Dashboard mit Custom Charts, User Segmentation, Export-Funktionen und Role-based Access',
				tech: ['SvelteKit', 'PostgreSQL', 'Chart.js', 'Tailwind'],
				results: 'Interaktives Dashboard, < 200ms Load Time, 10k+ Events/Tag'
			},
			{
				title: 'API Platform für Datenprodukt',
				description: 'REST API mit 50+ Endpoints, Rate Limiting, Stripe Billing, API Keys, Developer Portal',
				tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Stripe'],
				results: '99.9% Uptime, 1M+ API Calls/Monat, Self-Service Onboarding'
			},
			{
				title: 'Multi-Tenant Project Management Tool',
				description: 'SaaS-Platform für Team Collaboration: Projects, Tasks, Time Tracking, Invoicing',
				tech: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'Vercel'],
				results: '50+ Kunden, 500+ aktive User, 99.9% Uptime'
			}
		],
		process: [
			'Discovery Call: Features, Tech Stack, Skalierung (30-60 min)',
			'Scope & Proposal: Architektur, Wireframes, Timeline (1-3 Tage)',
			'Kick-Off: Design, Database-Schema, Tech Setup (50% Anzahlung)',
			'Entwicklung: Iterative Sprints mit wöchentlichen Demos',
			'Delivery: Testing, Production Deployment, Handover (50% Rest)'
		],
		faqs: [
			{
				q: 'Welchen Tech Stack nutzt ihr?',
				a: 'Primär: SvelteKit/Next.js (Frontend), Node.js/Python (Backend), PostgreSQL/Supabase (DB), Vercel/Railway (Hosting). Wir passen uns aber an deine Präferenzen an.'
			},
			{
				q: 'Kann ich das Projekt später selbst weiterentwickeln?',
				a: 'Absolut! Clean Code, TypeScript, ausführliche Dokumentation, optional Training. Du behältst volle Kontrolle über den Code.'
			},
			{
				q: 'Was kostet Hosting & Wartung?',
				a: 'Klein (< 500€/Jahr): Vercel/Railway Free Tier. Mittel (500-2000€/Jahr): Managed Services. Groß (2000€+/Jahr): Dedizierte Infrastruktur. Wartung optional ab 500€/Monat.'
			}
		]
	},
	{
		id: 'retainer',
		slug: 'consulting-retainers',
		title: 'Technical Leadership & Retainers',
		subtitle: 'Ongoing Support & Strategic Tech Leadership',
		description: 'Von Support & Maintenance bis zu CTO-as-a-Service – kontinuierliche Entwicklung, Optimierung und strategische Beratung',
		icon: Award,
		price: '2.500 € - 12.000 €/Monat',
		priceRange: { min: 2500, max: 12000, unit: '€/Monat' },
		features: [
			'Support & Maintenance ab 2.500 €/Monat',
			'Growth Retainer (5.500 €/Monat)',
			'Velocity Retainer (10.000 €/Monat)',
			'CTO-as-a-Service (6.000 € - 12.000 €/Monat)',
			'AI Readiness Audit (4.500 € einmalig)'
		],
		href: '/services/consulting-retainers',
		badge: 'Best Value',
		bundledServices: [
			{
				name: 'Support & Maintenance',
				price: '2.500 €/Monat',
				duration: '~15 Stunden/Monat',
				features: [
					'Bug Fixes',
					'Security Updates',
					'Minor Feature Requests',
					'Support (72h Response)',
					'Monthly Health Check'
				]
			},
			{
				name: 'Growth Retainer',
				price: '5.500 €/Monat',
				duration: '~35 Stunden/Monat',
				features: [
					'Feature Development',
					'Bug Fixes & Maintenance',
					'Code Reviews',
					'Performance Monitoring',
					'Support (48h Response)'
				]
			},
			{
				name: 'Velocity Retainer',
				price: '10.000 €/Monat',
				duration: '~70 Stunden/Monat',
				features: [
					'Feature Development & Bug Fixes',
					'AI-Agent Maintenance & Optimization',
					'Architecture Reviews',
					'Performance Optimization',
					'Priority Support (24h Response)',
					'Monthly Strategy Calls'
				]
			},
			{
				name: 'CTO-as-a-Service',
				price: '6.000 € - 12.000 €/Monat',
				duration: '15-30 Stunden/Monat',
				features: [
					'Technical Strategy & Roadmap',
					'Architecture Decisions',
					'Team Mentoring & Reviews',
					'Vendor & Tool Evaluation',
					'Hiring Support (Technical Interviews)',
					'Investor/Board Updates'
				]
			},
			{
				name: 'AI Readiness Audit',
				price: '4.500 €',
				duration: '1 Woche',
				features: [
					'Current State Analysis',
					'AI Use Case Identification',
					'Tech Stack Recommendations',
					'Cost-Benefit Analysis',
					'Implementation Roadmap (Prio 1-3)',
					'2h Workshop mit deinem Team'
				]
			},
			{
				name: 'Architecture Review & Optimization',
				price: '3.000 € - 7.000 €',
				duration: '3-7 Tage',
				features: [
					'Codebase Analysis',
					'Performance Bottleneck Identification',
					'Security Review',
					'Scalability Assessment',
					'Refactoring Recommendations',
					'Priorisierte Action Items'
				]
			}
		],
		examples: [
			{
				title: 'CTO-as-a-Service für PropTech Startup',
				description: 'Part-time Technical Leadership für Series A Startup: Tech Strategy, Hiring, Architecture Decisions, Investor Updates',
				tech: ['Strategy', 'Hiring', 'Architecture', 'Mentoring'],
				results: '3 erfolgreiche Hires, 2x schnellere Feature Delivery, erfolgreiche Series A'
			},
			{
				title: 'Velocity Retainer für AI SaaS',
				description: 'Kontinuierliche Entwicklung neuer Features, AI-Model Optimization, Performance Tuning',
				tech: ['SvelteKit', 'Python', 'OpenAI', 'Supabase'],
				results: '8 neue Features in 3 Monaten, 50% niedrigere AI-Kosten'
			},
			{
				title: 'AI Readiness Audit für E-Commerce',
				description: 'Analyse bestehender Systeme, Identifikation von 12 AI Use Cases, Priorisierung & Roadmap',
				tech: ['Analysis', 'Workshop', 'Roadmap'],
				results: 'Klare 12-Monats AI-Roadmap, Executive Buy-in, Startpunkt für Implementation'
			}
		],
		process: [
			'Discovery Call: Ziele, Challenges, Team Setup (30-60 min)',
			'Proposal: Retainer-Struktur, Erwartungen, KPIs (1-2 Tage)',
			'Kick-Off: Onboarding, System-Zugriff, Erstes Planning',
			'Monthly Cycles: Sprints, Reporting, Adjustments',
			'Quarterly Reviews: Retrospektive, Strategie-Update'
		],
		faqs: [
			{
				q: 'Wie funktioniert die Stundenabrechnung?',
				a: 'Monatliches Retainer-Budget, rollierendes Stundenkonto. Ungenutzte Stunden verfallen nach 2 Monaten. Transparentes Time-Tracking.'
			},
			{
				q: 'Kann ich den Retainer jederzeit kündigen?',
				a: 'Ja, mit 1 Monat Kündigungsfrist. Keine Mindestlaufzeit (außer bei Setup-intensiven Projekten).'
			},
			{
				q: 'Was ist der Unterschied zwischen Velocity Retainer und CTO-as-a-Service?',
				a: 'Velocity = Hands-on Development & Optimierung. CTO-as-a-Service = Strategische Führung, weniger Coding. Oft kombinierbar.'
			}
		]
	}
];

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
	return services.filter((s) => s.id === category);
}
