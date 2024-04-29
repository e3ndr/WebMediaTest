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
{:else if player == 'swf'}
	<embed src={data.file} width="426" height="240" />
{:else}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video id="video" src={data.file} width="426" height="240" controls autoplay />
	<br />
	<button onclick="document.getElementById('video').play();"> Play </button>
{/if}
