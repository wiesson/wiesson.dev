declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"2023-01-24-hello-world.mdx": {
  id: "2023-01-24-hello-world.mdx",
  slug: "2023-01-24-hello-world",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},
"education": {
"2003-08-01-allgemeine-hochschulreife.md": {
  id: "2003-08-01-allgemeine-hochschulreife.md",
  slug: "2003-08-01-allgemeine-hochschulreife",
  body: string,
  collection: "education",
  data: InferEntrySchema<"education">
},
"2007-10-01-b-eng-in-energietechnik.md": {
  id: "2007-10-01-b-eng-in-energietechnik.md",
  slug: "2007-10-01-b-eng-in-energietechnik",
  body: string,
  collection: "education",
  data: InferEntrySchema<"education">
},
"2011-04-01-m-sc-in-energy-science-and-technology.md": {
  id: "2011-04-01-m-sc-in-energy-science-and-technology.md",
  slug: "2011-04-01-m-sc-in-energy-science-and-technology",
  body: string,
  collection: "education",
  data: InferEntrySchema<"education">
},
"2012-10-01-auslandssemester-am-royal-institute-of-technology-kth.md": {
  id: "2012-10-01-auslandssemester-am-royal-institute-of-technology-kth.md",
  slug: "2012-10-01-auslandssemester-am-royal-institute-of-technology-kth",
  body: string,
  collection: "education",
  data: InferEntrySchema<"education">
},
},
"work": {
"2013-09-01-tigev-ingenieurgesellschaft-mbh.md": {
  id: "2013-09-01-tigev-ingenieurgesellschaft-mbh.md",
  slug: "2013-09-01-tigev-ingenieurgesellschaft-mbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2015-06-01-sipgate-gmbh.md": {
  id: "2015-06-01-sipgate-gmbh.md",
  slug: "2015-06-01-sipgate-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2016-01-01-sebastian-schllgen.md": {
  id: "2016-01-01-sebastian-schllgen.md",
  slug: "2016-01-01-sebastian-schllgen",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2016-01-01-wilhelm-hemme.md": {
  id: "2016-01-01-wilhelm-hemme.md",
  slug: "2016-01-01-wilhelm-hemme",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2017-02-01-energybox-ltd.md": {
  id: "2017-02-01-energybox-ltd.md",
  slug: "2017-02-01-energybox-ltd",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2018-01-01-leadpointch.md": {
  id: "2018-01-01-leadpointch.md",
  slug: "2018-01-01-leadpointch",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2019-01-01-mondayrocks-gmbh.md": {
  id: "2019-01-01-mondayrocks-gmbh.md",
  slug: "2019-01-01-mondayrocks-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2019-07-01-parfuemerie-douglas-gmbh.md": {
  id: "2019-07-01-parfuemerie-douglas-gmbh.md",
  slug: "2019-07-01-parfuemerie-douglas-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2019-12-01-carit-ag.md": {
  id: "2019-12-01-carit-ag.md",
  slug: "2019-12-01-carit-ag",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2020-02-01-parfuemerie-douglas-gmbh.md": {
  id: "2020-02-01-parfuemerie-douglas-gmbh.md",
  slug: "2020-02-01-parfuemerie-douglas-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2020-04-01-cyberium-gmbh.md": {
  id: "2020-04-01-cyberium-gmbh.md",
  slug: "2020-04-01-cyberium-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2020-04-01-ita-rwth-aachen.md": {
  id: "2020-04-01-ita-rwth-aachen.md",
  slug: "2020-04-01-ita-rwth-aachen",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2020-04-01-prosiebensat1-media-se-ueber-loyd-gmbh.md": {
  id: "2020-04-01-prosiebensat1-media-se-ueber-loyd-gmbh.md",
  slug: "2020-04-01-prosiebensat1-media-se-ueber-loyd-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2020-04-01-ways-gmbh.md": {
  id: "2020-04-01-ways-gmbh.md",
  slug: "2020-04-01-ways-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2020-05-01-carit-ag.md": {
  id: "2020-05-01-carit-ag.md",
  slug: "2020-05-01-carit-ag",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2020-06-01-impact-products-gmbh.md": {
  id: "2020-06-01-impact-products-gmbh.md",
  slug: "2020-06-01-impact-products-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2020-11-01-parfuemerie-douglas-gmbh.md": {
  id: "2020-11-01-parfuemerie-douglas-gmbh.md",
  slug: "2020-11-01-parfuemerie-douglas-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2021-01-01-arne-wiese.md": {
  id: "2021-01-01-arne-wiese.md",
  slug: "2021-01-01-arne-wiese",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2021-03-01-frontnow-gmbh.md": {
  id: "2021-03-01-frontnow-gmbh.md",
  slug: "2021-03-01-frontnow-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2021-06-01-stefan-wiese.md": {
  id: "2021-06-01-stefan-wiese.md",
  slug: "2021-06-01-stefan-wiese",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2021-08-01-take-memories-gmbh-co-kg.md": {
  id: "2021-08-01-take-memories-gmbh-co-kg.md",
  slug: "2021-08-01-take-memories-gmbh-co-kg",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
"2021-09-01-parfuemerie-douglas-gmbh.md": {
  id: "2021-09-01-parfuemerie-douglas-gmbh.md",
  slug: "2021-09-01-parfuemerie-douglas-gmbh",
  body: string,
  collection: "work",
  data: InferEntrySchema<"work">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
