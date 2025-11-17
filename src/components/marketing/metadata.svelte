<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		image?: string;
		type?: 'website' | 'article';
		publishedTime?: string;
		author?: string;
	}

	let {
		title = 'Tourvy - AI-powered trip planning for travel agencies',
		description = 'AI-powered trip planning for travel agencies. From email request to complete proposal in under 5 minutes.',
		image,
		type = 'website',
		publishedTime,
		author,
	}: Props = $props();

	const siteUrl = 'https://www.tourvy.com';
	const imageUrl = image || `${siteUrl}/og-image.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:site_name" content="Tourvy" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={siteUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={imageUrl} />

	{#if type === 'article' && publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}

	{#if author}
		<meta property="article:author" content={author} />
	{/if}
</svelte:head>
