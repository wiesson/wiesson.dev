/**
 * TypeScript types for Typst CV data structures
 * These types match the expected format for the CV template
 */

export interface TypstProfile {
	name: string;
	title: string;
	location?: string;
	education?: string;
	intro?: string;
	email?: string;
	website?: string;
}

export interface TypstWorkEntry {
	company: string;
	project?: string | null;
	position?: string | null;
	location?: string | null;
	from: string; // Formatted date (e.g., "04.2024" or "2024")
	to: string; // Formatted date (e.g., "09.2025" or "heute")
	dates: string; // Combined date string (e.g., "04.2024 - 09.2025")
	type: 'main' | 'side';
	projectType: 'permanent' | 'project';
	intro?: string | null;
	tasks: string[];
	technologies?: string[];
}

export interface TypstEducationEntry {
	title: string;
	location: string;
	from: string; // Formatted year (e.g., "2011")
	to: string; // Formatted year (e.g., "2014")
	dates: string; // Combined date string (e.g., "2011 - 2014")
	intro?: string;
	tasks: string[];
}

export interface TypstCvData {
	profile: TypstProfile;
	mainWork: TypstWorkEntry[];
	sideWork: TypstWorkEntry[];
	education: TypstEducationEntry[];
	locale?: string;
}

