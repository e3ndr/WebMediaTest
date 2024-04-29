<script>
	export let data;

	const player = data.player;
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a href="#" onclick="history.go(-1)">Go Back</a>
<br />
<br />
<br />

{#if player == 'flv-player'}
	<!-- svelte-ignore a11y-missing-attribute -->
	<object type="application/x-shockwave-flash" data="/flv-player.swf" width="426" height="240">
		<param name="movie" value="/flv-player.swf" />
		<param name="allowFullScreen" value="true" />
		<param
			name="FlashVars"
			value="flv={encodeURIComponent(
				data.file
			)}&amp;showvolume=1&amp;showtime=2&amp;showfullscreen=1"
		/>
	</object>
{:else if player == 'flash-mp4'}
	<!-- svelte-ignore a11y-missing-attribute -->
	<object
		id="f4Player"
		width="426"
		height="240"
		type="application/x-shockwave-flash"
		data="/f4player.swf?v1.3.5"
	>
		<param name="movie" value="player.swf?v1.3.5" />
		<param name="quality" value="high" />
		<param name="menu" value="false" />
		<param name="scale" value="noscale" />
		<param name="allowfullscreen" value="true" />
		<param name="allowscriptaccess" value="always" />
		<param name="swlivevonnect" value="true" />
		<param name="cachebusting" value="false" />
		<param name="flashvars" value="skin=/f4player-skin.swf&video={encodeURIComponent(data.file)}" />
	</object>
{:else if player == 'swf'}
	<embed src={data.file} width="426" height="240" />
{:else}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video id="video" src={data.file} width="426" height="240" controls autoplay />
	<br />
	<button onclick="document.getElementById('video').play();"> Play </button>
{/if}
