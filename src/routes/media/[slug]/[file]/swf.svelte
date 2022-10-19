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

<embed src="/media/{slug}/{file}" width="426" height="240" />
