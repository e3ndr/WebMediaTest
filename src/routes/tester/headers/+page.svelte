<script>
	export let data;
</script>

<svelte:head>
	<title>WebMediaTest / Browser Headers</title>
</svelte:head>

<h1>Browser Headers</h1>
<br />

<pre>
{#each data.headers as [key, value]}
		{key}: {value}<br />
	{/each}
</pre>
