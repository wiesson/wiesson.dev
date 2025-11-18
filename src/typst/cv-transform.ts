/**
 * Transform CV data from Astro content collections to Typst format
 */

import type { CollectionEntry } from 'astro:content';
import type { TypstCvData, TypstWorkEntry, TypstEducationEntry } from './cv-types.js';
import { getCvProfile } from '../lib/config/cv.js';

/**
 * Format date with language support (DD.MM.YYYY for full dates, YYYY for years)
 */
function formatDate(date: Date | string | 'now', format: 'days' | 'year' = 'days', lang: string = 'de'): string {
	if (date === 'now') {
		const presentText = lang === 'en' ? 'present' : 'heute';
		return format === 'days' ? presentText : new Date().getFullYear().toString();
	}

	const d = typeof date === 'string' ? new Date(date) : date;
	const locale = lang === 'en' ? 'en-US' : 'de-DE';

	if (format === 'year') {
		return new Intl.DateTimeFormat(locale, {
			year: 'numeric'
		}).format(d);
	}

	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: '2-digit'
	}).format(d);
}

/**
 * Transform work entry from Astro content collection to Typst format
 */
function transformWorkEntry(entry: CollectionEntry<'work'> | CollectionEntry<'work-en'>, lang: string = 'de'): TypstWorkEntry {
	const now = new Date();
	const toDate = entry.data.to === 'now' ? now : entry.data.to;
	const fromFormatted = formatDate(entry.data.from, 'days', lang);
	const toFormatted = formatDate(toDate, 'days', lang);
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
function transformEducationEntry(entry: CollectionEntry<'education'> | CollectionEntry<'education-en'>, lang: string = 'de'): TypstEducationEntry {
	const now = new Date();
	const toDate = entry.data.to === 'now' ? now : entry.data.to;
	const fromFormatted = formatDate(entry.data.from, 'year', lang);
	const toFormatted = formatDate(toDate, 'year', lang);
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
	workEntries: CollectionEntry<'work'>[] | CollectionEntry<'work-en'>[],
	educationEntries: CollectionEntry<'education'>[] | CollectionEntry<'education-en'>[],
	lang: string = 'de'
): TypstCvData {
	const now = new Date();
	const locale = lang === 'en' ? 'en-US' : 'de-DE';

	// Sort work entries by date (newest first)
	const sortedWork = [...workEntries].sort((a, b) => {
		const toA = a.data.to === 'now' ? now : a.data.to;
		const toB = b.data.to === 'now' ? now : b.data.to;
		return toB.getTime() - toA.getTime();
	});

	// Separate main and side work
	const mainWork = sortedWork
		.filter((entry) => entry.data.type === 'main')
		.map((entry) => transformWorkEntry(entry, lang));

	const sideWork = sortedWork
		.filter((entry) => entry.data.type === 'side')
		.map((entry) => transformWorkEntry(entry, lang));

	// Transform education entries
	const education = educationEntries.map((entry) => transformEducationEntry(entry, lang));

	// Build profile from config with language support
	const cvProfile = getCvProfile(lang);
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
		locale
	};
}

