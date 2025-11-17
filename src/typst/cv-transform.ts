/**
 * Transform CV data from Astro content collections to Typst format
 */

import type { CollectionEntry } from 'astro:content';
import type { TypstCvData, TypstWorkEntry, TypstEducationEntry } from './cv-types.js';
import { cvProfile } from '../lib/config/cv.js';

/**
 * Format date to German locale (DD.MM.YYYY for full dates, YYYY for years)
 */
function formatDate(date: Date | string | 'now', format: 'days' | 'year' = 'days'): string {
	if (date === 'now') {
		return format === 'days' ? 'heute' : new Date().getFullYear().toString();
	}

	const d = typeof date === 'string' ? new Date(date) : date;
	
	if (format === 'year') {
		return new Intl.DateTimeFormat('de-DE', {
			year: 'numeric'
		}).format(d);
	}
	
	return new Intl.DateTimeFormat('de-DE', {
		year: 'numeric',
		month: '2-digit'
	}).format(d);
}

/**
 * Transform work entry from Astro content collection to Typst format
 */
function transformWorkEntry(entry: CollectionEntry<'work'>): TypstWorkEntry {
	const now = new Date();
	const toDate = entry.data.to === 'now' ? now : entry.data.to;
	const fromFormatted = formatDate(entry.data.from, 'days');
	const toFormatted = formatDate(toDate, 'days');
	const dates = fromFormatted === toFormatted ? fromFormatted : `${fromFormatted} - ${toFormatted}`;

	return {
		company: entry.data.company,
		project: entry.data.project,
		position: entry.data.position,
		location: entry.data.location,
		from: fromFormatted,
		to: toFormatted,
		dates,
		type: entry.data.type,
		projectType: entry.data.projectType,
		intro: entry.data.intro,
		tasks: entry.data.tasks,
		technologies: Array.isArray(entry.data.technologies) ? entry.data.technologies : []
	};
}

/**
 * Transform education entry from Astro content collection to Typst format
 */
function transformEducationEntry(entry: CollectionEntry<'education'>): TypstEducationEntry {
	const now = new Date();
	const toDate = entry.data.to === 'now' ? now : entry.data.to;
	const fromFormatted = formatDate(entry.data.from, 'year');
	const toFormatted = formatDate(toDate, 'year');
	const dates = fromFormatted === toFormatted ? fromFormatted : `${fromFormatted} – ${toFormatted}`;

	return {
		title: entry.data.title,
		location: entry.data.location,
		from: fromFormatted,
		to: toFormatted,
		dates,
		intro: entry.data.intro,
		tasks: entry.data.tasks
	};
}

/**
 * Transform CV data from Astro content collections to Typst format
 */
export function transformCvToTypst(
	workEntries: CollectionEntry<'work'>[],
	educationEntries: CollectionEntry<'education'>[]
): TypstCvData {
	const now = new Date();

	// Sort work entries by date (newest first)
	const sortedWork = [...workEntries].sort((a, b) => {
		const toA = a.data.to === 'now' ? now : a.data.to;
		const toB = b.data.to === 'now' ? now : b.data.to;
		return toB.getTime() - toA.getTime();
	});

	// Separate main and side work
	const mainWork = sortedWork
		.filter((entry) => entry.data.type === 'main')
		.map(transformWorkEntry);

	const sideWork = sortedWork
		.filter((entry) => entry.data.type === 'side')
		.map(transformWorkEntry);

	// Transform education entries
	const education = educationEntries.map(transformEducationEntry);

	// Build profile from config
	const profile = {
		name: cvProfile.name,
		title: cvProfile.title,
		location: cvProfile.location,
		education: cvProfile.education,
		intro: cvProfile.intro,
		email: cvProfile.email,
		website: cvProfile.website
	};

	return {
		profile,
		mainWork,
		sideWork,
		education,
		locale: 'de-DE'
	};
}

