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
<br />

<h2>Media:</h2>
<ul>
	<li><a href="/tester/container-formats">Container Formats</a></li>
	<li><a href="/tester/video">Video Codecs</a></li>
	<li><a href="/tester/audio">Audio Codecs</a></li>
	<li><a href="/tester/images">Image Formats</a></li>
</ul>

<h2>Plugins:</h2>
<ul>
	<li><a href="/tester/flash">Adobe Shockwave Flash Support</a></li>
	<li><a href="/tester/silverlight">Microsoft Silverlight Support</a></li>
</ul>

<h2>APIs:</h2>
<ul>
	<li><a href="/tester/webrtc">WebRTC</a></li>
	<li><a href="/tester/misc">Miscellaneous (Plugins, APIs)</a></li>
</ul>

<h2>Useful things for old browsers:</h2>
<ul>
	<li>
		<a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills">
			Browser Polyfills (with Flash and Silverlight fallbacks)
		</a>
	</li>
	<li>
		<a href="https://ffmpeg.org"> FFMpeg (for encoding various different video formats) </a>
	</li>
	<li>
		<a href="https://www.google.com/search?q=hello+world+before%3A2010">
			Google's before: keyword
		</a>
		+
		<a href="https://web.archive.org/*/http://example.com"> The wayback machine. </a>
		Useful for finding things that might've been scrubbed from the internet.
	</li>
</ul>

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
