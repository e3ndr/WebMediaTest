<script>
	export let data;
</script>

<h1>WebMediaTest</h1>
<p>
	Howdy, this website has sample media for testing the capabilities of lesser known/older browsers.
	<br />
	It's meant to be super compatible with most any device (hence the design, or lack thereof) and easy
	to use.
	<br />
	<br />
	This site also has Flash/FLV content for testing console browsers (like on the Wii or PSP).
</p>

<br />
<h2>Sample Media</h2>

<ul>
	{#each Object.entries(data.mediaIndexes) as [category, indexes]}
		{#each indexes as index}
			<li>
				<a href="/media/{category}/{index.slug}">
					{index.category}
					/
					{index.name}
					/
					{index.credit}
				</a>
			</li>
		{/each}
	{/each}
</ul>

<br />
<br />
<h2>
	<a href="/tester">See what my browser supports</a>
</h2>

<br />
<br />
<br />
<br />
<p>
	Built using SvelteKit, Served with Cloudflare, Code on <a
		href="https://github.com/e3ndr/WebMediaTest"
		target="_blank">Github</a
	>.
</p>
<br />
<div>
	&copy;
	<a href="https://wmt.e3ndr.xyz" target="_blank">https://wmt.e3ndr.xyz </a>
</div>

<style>
	p {
		max-width: 800px;
	}
</style>
