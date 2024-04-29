<script>
	export let data;
</script>

<svelte:head>
	<title>WebMediaTest / Media / {data.name}</title>
</svelte:head>

<a href="/">Go Back</a>
<br />
<br />

<h1>{data.name}</h1>
<p>From: {data.credit}</p>

<!-- // TODO add a hls playlist. 
	 // TODO add a dash playlist. -->

<br />
<div>
	<table>
		{#each Object.entries(data.files) as [container, files]}
			{@const supportedPlayers = {
				flv: ['FLV Player'],
				swf: ['SWF'],
				webm: ['HTML5'],
				mp4: ['HTML5'],
				matroska: ['HTML5']
			}[container]}

			<thead>
				<tr>
					<td class="title-header" colspan="6">
						<h2>{container.toUpperCase()}</h2>
					</td>
				</tr>
				<tr>
					<th>Name</th>
					<th>Codecs</th>
					<th>Size</th>
					<th>File</th>
					<th>Player</th>
					<th>Notes</th>
				</tr>
			</thead>
			<tbody>
				{#each files as file}
					<tr>
						<td>{file.name}</td>
						<td>{file.codecs.join(', ')}</td>
						<td>{file.size}</td>
						<td>
							<a href={file.file} target="_blank">
								{file.file.substring(file.file.lastIndexOf('/') + 1)}
							</a>
						</td>
						<td>
							{#each supportedPlayers as player}
								{@const playerType = player.toLowerCase().replace(' ', '-')}
								<a href="/media/player?file={encodeURIComponent(file.file)}&player={playerType}">
									{player}
								</a>
							{/each}
						</td>
						<td>
							{@html file.notes}
						</td>
					</tr>
				{/each}
				<td colspan="6">
					<br />
					<br />
				</td>
			</tbody>
		{/each}
	</table>
</div>

<style>
	.title-header {
		color: black;
		background-color: white;
	}

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
