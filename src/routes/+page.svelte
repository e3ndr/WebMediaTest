<script>
	export let data;
</script>

<svelte:head>
	<title>WebMediaTest</title>
</svelte:head>

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
<h2>Codec & Format Tester</h2>
<ul>
	<li><a href="/tester/video">Video Codecs</a></li>
	<li><a href="/tester/audio">Audio Codecs</a></li>
	<li><a href="/tester/images">Image Types</a></li>
	<li><a href="/tester/flash">Adobe Shockwave Flash Support</a></li>
</ul>

<br />
<br />
<br />
<br />
<p>
	Built using SvelteKit,
	<a href="https://web.archive.org/web/20190306095336/http://flv-player.net">FLV Player</a>,
	<a href="https://github.com/goker-dev/f4player/tree/master">f4player</a>, and served with
	CloudFlare. Code on <a href="https://github.com/e3ndr/WebMediaTest" target="_blank">Github</a>.
</p>
<br />
<div>
	HTTP Link: <a href="http://nossl.wmt.e3ndr.xyz" target="_blank">http://nossl.wmt.e3ndr.xyz </a>
	<br />
	<small>
		<a href="http://developers.cloudflare.com/ssl/static/origin_ca_ecc_root.pem">
			CloudFlare Root Certificate Download
		</a>
	</small>
</div>

<style>
	p {
		max-width: 800px;
	}
</style>
