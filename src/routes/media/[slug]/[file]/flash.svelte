<script context="module">
	export async function load({ params }) {
		try {
			const { slug, file } = params;

			return {
				props: {
					slug,
					file
				}
			};
		} catch (e) {
			return {
				status: 500,
				error: new Error(e)
			};
		}
	}
</script>

<script>
	export let slug;
	export let file;
</script>

<a href="/media/{slug}">Go Back</a>
<br />
<br />
<br />

<!-- svelte-ignore a11y-missing-attribute -->
<object type="application/x-shockwave-flash" data="/flv-player.swf" width="426" height="240">
	<param name="movie" value="/flv-player.swf" />
	<param name="allowFullScreen" value="true" />
	<param
		name="FlashVars"
		value="flv={encodeURIComponent(`/media/${slug}/${file}`)}&amp;width=426"
	/>
</object>
