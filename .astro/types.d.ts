declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;
	export type CollectionEntry<C extends keyof AnyEntryMap> = Flatten<AnyEntryMap[C]>;

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2023-01-24-hello-world.md": {
	id: "2023-01-24-hello-world.md";
  slug: "2023-01-24-hello-world";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"education": {
"2003-08-01-allgemeine-hochschulreife.md": {
	id: "2003-08-01-allgemeine-hochschulreife.md";
  slug: "2003-08-01-allgemeine-hochschulreife";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
"2007-10-01-b-eng-in-energietechnik.md": {
	id: "2007-10-01-b-eng-in-energietechnik.md";
  slug: "2007-10-01-b-eng-in-energietechnik";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
"2011-04-01-m-sc-in-energy-science-and-technology.md": {
	id: "2011-04-01-m-sc-in-energy-science-and-technology.md";
  slug: "2011-04-01-m-sc-in-energy-science-and-technology";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
"2012-10-01-auslandssemester-am-royal-institute-of-technology-kth.md": {
	id: "2012-10-01-auslandssemester-am-royal-institute-of-technology-kth.md";
  slug: "2012-10-01-auslandssemester-am-royal-institute-of-technology-kth";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
};
"work": {
"2013-09-01-tigev-ingenieurgesellschaft-mbh.md": {
	id: "2013-09-01-tigev-ingenieurgesellschaft-mbh.md";
  slug: "2013-09-01-tigev-ingenieurgesellschaft-mbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2015-06-01-sipgate-gmbh.md": {
	id: "2015-06-01-sipgate-gmbh.md";
  slug: "2015-06-01-sipgate-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2016-01-01-sebastian-schoellgen.md": {
	id: "2016-01-01-sebastian-schoellgen.md";
  slug: "2016-01-01-sebastian-schoellgen";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2016-01-01-wilhelm-hemme.md": {
	id: "2016-01-01-wilhelm-hemme.md";
  slug: "2016-01-01-wilhelm-hemme";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2017-02-01-energybox-ltd.md": {
	id: "2017-02-01-energybox-ltd.md";
  slug: "2017-02-01-energybox-ltd";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2018-01-01-leadpointch.md": {
	id: "2018-01-01-leadpointch.md";
  slug: "2018-01-01-leadpointch";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2019-01-01-mondayrocks-gmbh.md": {
	id: "2019-01-01-mondayrocks-gmbh.md";
  slug: "2019-01-01-mondayrocks-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2019-07-01-parfuemerie-douglas-gmbh.md": {
	id: "2019-07-01-parfuemerie-douglas-gmbh.md";
  slug: "2019-07-01-parfuemerie-douglas-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2019-12-01-carit-ag.md": {
	id: "2019-12-01-carit-ag.md";
  slug: "2019-12-01-carit-ag";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2020-02-01-parfuemerie-douglas-gmbh.md": {
	id: "2020-02-01-parfuemerie-douglas-gmbh.md";
  slug: "2020-02-01-parfuemerie-douglas-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2020-04-01-cyberium-gmbh.md": {
	id: "2020-04-01-cyberium-gmbh.md";
  slug: "2020-04-01-cyberium-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2020-04-01-ita-rwth-aachen.md": {
	id: "2020-04-01-ita-rwth-aachen.md";
  slug: "2020-04-01-ita-rwth-aachen";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2020-04-01-prosiebensat1-media-se-ueber-loyd-gmbh.md": {
	id: "2020-04-01-prosiebensat1-media-se-ueber-loyd-gmbh.md";
  slug: "2020-04-01-prosiebensat1-media-se-ueber-loyd-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2020-04-01-ways-gmbh.md": {
	id: "2020-04-01-ways-gmbh.md";
  slug: "2020-04-01-ways-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2020-05-01-carit-ag.md": {
	id: "2020-05-01-carit-ag.md";
  slug: "2020-05-01-carit-ag";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2020-06-01-impact-products-gmbh.md": {
	id: "2020-06-01-impact-products-gmbh.md";
  slug: "2020-06-01-impact-products-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2020-11-01-parfuemerie-douglas-gmbh.md": {
	id: "2020-11-01-parfuemerie-douglas-gmbh.md";
  slug: "2020-11-01-parfuemerie-douglas-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2021-01-01-arne-wiese.md": {
	id: "2021-01-01-arne-wiese.md";
  slug: "2021-01-01-arne-wiese";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2021-03-01-frontnow-gmbh.md": {
	id: "2021-03-01-frontnow-gmbh.md";
  slug: "2021-03-01-frontnow-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2021-06-01-stefan-wiese.md": {
	id: "2021-06-01-stefan-wiese.md";
  slug: "2021-06-01-stefan-wiese";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2021-07-01-bonsai-bayreuth.md": {
	id: "2021-07-01-bonsai-bayreuth.md";
  slug: "2021-07-01-bonsai-bayreuth";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2021-08-01-take-memories-gmbh-co-kg.md": {
	id: "2021-08-01-take-memories-gmbh-co-kg.md";
  slug: "2021-08-01-take-memories-gmbh-co-kg";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2021-09-01-parfuemerie-douglas-gmbh.md": {
	id: "2021-09-01-parfuemerie-douglas-gmbh.md";
  slug: "2021-09-01-parfuemerie-douglas-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"2023-03-01-parfuemerie-douglas-gmbh.md": {
	id: "2023-03-01-parfuemerie-douglas-gmbh.md";
  slug: "2023-03-01-parfuemerie-douglas-gmbh";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
