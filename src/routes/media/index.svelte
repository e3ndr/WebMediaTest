<script>
	import mediaIndexes from '$lib/media/index.json';
</script>

<svelte:head>
	<title>WebMediaTest / Media</title>
</svelte:head>

<a href="/">Go Back</a>
<br />
<br />

<ul>
	{#each mediaIndexes as index}
		<li>
			<a href="/media/{index.slug}">
				{index.name}
				/
				{index.credit}
			</a>
		</li>
	{/each}
</ul>
