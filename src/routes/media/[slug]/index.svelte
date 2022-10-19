<script context="module">
	import mediaIndexes from '$lib/media/index.json';

	export async function load({ params }) {
		try {
			const { slug } = params;

			const mediaIndex = mediaIndexes.filter((idx) => idx.slug == slug)[0];

			if (mediaIndex) {
				return {
					props: {
						mediaIndex
					}
				};
			} else {
				return {
					status: 404,
					error: 'Not Found'
				};
			}
		} catch (e) {
			return {
				status: 500,
				error: new Error(e)
			};
		}
	}
</script>

<script>
	export let mediaIndex;
</script>

<svelte:head>
	<title>WebMediaTest / Media / {mediaIndex.name}</title>
</svelte:head>

<a href="/media">Go Back</a>
<br />
<br />

<h1>{mediaIndex.name}</h1>
<p>From: {mediaIndex.credit}</p>

<br />
<div>
	{#each Object.entries(mediaIndex.files) as [container, files]}
		<div>
			<h2>{container.toUpperCase()}</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Codecs</th>
						<th>Size</th>
						<th>File</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					{#each files as file}
						<tr>
							<td>{file.name}</td>
							<td>{file.codecs.join(', ')}</td>
							<td>{file.size}</td>
							<td><a href="/media/{mediaIndex.slug}/{file.file}" target="_blank">{file.file}</a></td
							>
							<td>
								{@html file.notes}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/each}
</div>

<style>
	thead {
		text-align: left;
		color: white;
		background-color: black;
	}

	td,
	th {
		padding-right: 32px;
	}
</style>
