<script>
	export const STATIC = [
		'avif',
		'webp',
		'gif',
		'jpg',
		'png',
		'ico',
		'bmp',
		'heic',
		'tiff',
		'jxr',
		'xbm',
		'tga',
		'dds'
	];

	export const ANIMATED = ['apng', 'avif', 'gif', 'webp'];
</script>

<svelte:head>
	<title>WebMediaTest / Media Tester / Images</title>
</svelte:head>

<h1 style="margin-bottom: 0;">A table of image formats for you to take a gander at</h1>

<p>Animated images <b>should not</b> appear stacked or smeared!</p>
<table style="width: auto;">
	<thead>
		<tr>
			<th style="color: red;"> Bad &#10005; </th>
			<th style="color: green;"> Good &check; </th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<img
					src="/images/tester/bad_stacked.png"
					alt="A stacked animation."
					style="width: 100px; height: 100px; display: block;"
				/>
			</td>
			<td>
				<img
					src="/images/tester/good.png"
					alt="A good/proper animation."
					style="width: 100px; height: 100px; display: block;"
				/>
			</td>
		</tr>
	</tbody>
</table>

<h2>Static Image Support</h2>
<table style="width: auto;">
	<thead>
		<tr>
			{#each STATIC as extension}
				<th> {extension} </th>
			{/each}
		</tr>
	</thead>
	<tbody>
		<tr>
			{#each STATIC as extension}
				<td>
					<a href="/images/tester/static/opaque.{extension}">
						<img
							src="/images/tester/static/opaque.{extension}"
							alt={extension}
							style="width: 150px; display: block;"
							onerror="this.style.background = 'red';"
						/>
					</a>
				</td>
			{/each}
		</tr>
	</tbody>
</table>

<h2>Animated Image Support</h2>
<table style="width: auto;">
	<thead>
		<tr>
			<td />
			{#each ANIMATED as extension}
				<th> {extension} </th>
			{/each}
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="font-weight: bold;"> Opaque </td>
			{#each ANIMATED as extension}
				<td>
					<a href="/images/tester/animated/opaque.{extension}">
						<img
							src="/images/tester/animated/opaque.{extension}"
							alt={extension}
							style="width: 150px;"
							onerror="this.style.background = 'red';"
						/>
					</a>
				</td>
			{/each}
		</tr>
		<tr>
			<td style="font-weight: bold;"> Transparent </td>
			{#each ANIMATED as extension}
				<td>
					<a href="/images/tester/animated/transparent.{extension}">
						<img
							src="/images/tester/animated/transparent.{extension}"
							alt={extension}
							style="width: 150px;"
							onerror="this.style.background = 'red';"
						/>
					</a>
				</td>
			{/each}
		</tr>
	</tbody>
</table>
<p>
	Browsers that don't support animated PNG may try to display it as a normal static PNG. apng <b
		>should show movement</b
	>!
</p>
