<script>
	const SILVERLIGHT_VERSIONS = [
		{
			name: 'Silverlight 1.0',
			version: '1.0.30715'
		},
		{
			name: 'Silverlight 2',
			version: '2.0.40115'
		},
		{
			name: 'Silverlight 3',
			version: '3.0.50106'
		},
		{
			name: 'Silverlight 4',
			version: '4.0.60310.0'
		},
		{
			name: 'Silverlight 5',
			version: '5.0.60401.0'
		}
	];
</script>

<svelte:head>
	<title>WebMediaTest / Silverlight</title>
	<script src="/js/silverlight.js"></script>

	<script>
		// This code is designed this way to maintain compability for non-HTML5 browsers. Deal with it.
		// https://learn.microsoft.com/en-us/previous-versions/windows/silverlight/dotnet-windows-silverlight/cc838126(v=vs.95)

		function doSilverlightTest() {
			if (typeof window.Silverlight == 'undefined') return;

			var toTest = document.getElementsByClassName('silverlight-detect');
			for (var i = 0; i < toTest.length; i++) {
				var elem = toTest[i];
				var version = elem.title;
				var result = Silverlight.isInstalled(version);

				if (result) {
					elem.innerText = 'Yes';
					elem.style.backgroundColor = 'green';
					elem.style.color = 'white';
				} else {
					elem.innerText = 'No';
					elem.style.backgroundColor = 'red';
					elem.style.color = 'white';
				}
			}
		}

		function doInit() {
			try {
				doSilverlightTest();
			} catch (e) {
				alert(e);
			}
		}

		window.onload = doInit;
	</script>
</svelte:head>

<!-- 
	All of the following code is designed to maintain compability for non-HTML5 browsers. Deal with it.
-->

<h1>Silverlight Version Detector</h1>
<br />

<table style="width: auto;">
	<colgroup>
		<col span="1" style="width: 170px;" />
		<col span="1" style="width: 40px;" />
		<col span="1" style="width: 85px;" />
	</colgroup>

	<thead>
		<tr>
			<th> Version </th>
			<th> Installed? </th>
		</tr>
	</thead>
	<tbody>
		{#each SILVERLIGHT_VERSIONS as { name, version }}
			<tr style="color: white;">
				<td style="font-weight: bold; color: black;"> {name} </td>
				<td title={version} class="silverlight-detect" style="background: black;"> Unknown </td>
			</tr>
		{/each}
	</tbody>
</table>
