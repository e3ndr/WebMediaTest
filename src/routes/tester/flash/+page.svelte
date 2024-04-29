<script>
	const FLASH_CODECS = [
		{
			name: 'Screen Video',
			required: 6
		},
		{
			name: 'Screen Video 2',
			required: 8
		},
		{
			name: 'Sorenson Spark / H.263',
			required: 6
		},
		{
			name: 'On2 TrueMotion VP6',
			required: 8
		},
		{
			name: 'AVC1 / H.264',
			required: 9
		},
		{
			name: 'MP3',
			required: 6
		},
		{
			name: 'AAC',
			required: 9
		},
		{
			name: 'Speex',
			required: 10
		},
		{
			name: 'Asao',
			required: 6
		},
		{
			name: 'A-law',
			required: 6
		},
		{
			name: 'μ-law',
			required: 6
		}
	];

	const SWF_FLASH_AIR = [
		['44', '33', '33'],
		['43', '32', '32'],
		['42', '31', '31'],
		['41', '30', '30'],
		['40', '29', '29'],
		['39', '28', '28'],
		['38', '27', '27'],
		['37', '26', '26'],
		['36', '25', '25'],
		['35', '24', '24'],
		['34', '23', '23'],
		['33', '22', '22'],
		['32', '21', '21'],
		['31', '20', '20'],
		['30', '19', '19'],
		['29', '18', '18'],
		['28', '17', '17'],
		['27', '16', '16'],
		['26', '15', '15'],
		['25', '14', '14'],
		['24', '13', '13'],
		['23', '12', '4'],
		['22', '11.9', '3.9'],
		['21', '11.8', '3.8'],
		['20', '11.7', '3.7'],
		['19', '11.6', '3.6'],
		['18', '11.5', '3.5'],
		['17', '11.4', '3.4'],
		['16', '11.3', '3.3'],
		['15', '11.2', '3.2'],
		['14', '11.1', '3.1'],
		['13', '11', '3'],
		['12', '10.3', '2.7'],
		['11', '10.2', '2.6'],
		['10', '10', '1.5'],
		['9', '9', ''],
		['8', '8', ''],
		['7', '7', ''],
		['6', '6', '']
	];
</script>

<svelte:head>
	<title>WebMediaTest / Flash</title>
	<script src="/js/flash_detect.js"></script>

	<script>
		// This code is designed this way to maintain compability for non-HTML5 browsers. Deal with it.

		function doFlashTest() {
			if (typeof window.FlashDetect == 'undefined') return;

			if (FlashDetect.installed) {
				document.getElementById('flash-support-message').innerText =
					'Your browser supports Flash! "' + FlashDetect.raw + '"';
			} else {
				document.getElementById('flash-support-message').innerText =
					'Your browser does not support Flash.';
			}

			var toTest = document.getElementsByClassName('flash-detect');
			for (var i = 0; i < toTest.length; i++) {
				var elem = toTest[i];
				var version = elem.title;
				var result = FlashDetect.majorAtLeast(parseInt(version));

				if (result) {
					elem.innerText = 'Maybe';
					elem.style.backgroundColor = 'gold';
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
				doFlashTest();
			} catch (e) {
				alert(e);
			}
		}

		window.onload = doInit;
	</script>
</svelte:head>

<h1 style="margin-bottom: 0;">Playable codecs based on the current Flash version.</h1>
<p id="flash-support-message" />

<table style="width: auto;">
	<colgroup>
		<col span="1" style="width: 170px;" />
		<col span="1" style="width: 40px;" />
		<col span="1" style="width: 85px;" />
	</colgroup>

	<thead>
		<tr>
			<th> Codec </th>
			<th> Since </th>
			<th> Supported </th>
		</tr>
	</thead>
	<tbody>
		{#each FLASH_CODECS as { name, required }}
			<tr style="color: white;">
				<td style="font-weight: bold; color: black;"> {name} </td>
				<td style="color: black; text-align: right;"> {required} </td>
				<td title={required} class="flash-detect" style="background: black;"> Unknown </td>
			</tr>
		{/each}
	</tbody>
</table>
<br />
<br />

<h2>Containers</h2>
<table style="width: auto;">
	<colgroup>
		<col span="1" style="width: 170px;" />
		<col span="1" style="width: 40px;" />
		<col span="1" style="width: 85px;" />
	</colgroup>

	<thead>
		<tr>
			<th> Container </th>
			<th> Since </th>
			<th> Supported </th>
		</tr>
	</thead>
	<tbody>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> SWF </td>
			<td style="color: black; text-align: right;"> 6 </td>
			<td title="6" class="flash-detect" style="background: black;"> Unknown </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> FLV </td>
			<td style="color: black; text-align: right;"> 7 </td>
			<td title="7" class="flash-detect" style="background: black;"> Unknown </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> F4V </td>
			<td style="color: black; text-align: right;"> 9 </td>
			<td title="9" class="flash-detect" style="background: black;"> Unknown </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> ISOMBFF </td>
			<td style="color: black; text-align: right;"> 9 </td>
			<td title="9" class="flash-detect" style="background: black;"> Unknown </td>
		</tr>
	</tbody>
</table>
<br />
<br />

<h2>SWF &lt&gt; Flash &lt&gt; Air Versions</h2>
<table style="width: auto;">
	<colgroup>
		<col span="1" style="width: 170px;" />
		<col span="1" style="width: 40px;" />
		<col span="1" style="width: 85px;" />
	</colgroup>

	<thead>
		<tr>
			<th> SWF </th>
			<th> Flash </th>
			<th> AIR </th>
		</tr>
	</thead>
	<tbody>
		{#each SWF_FLASH_AIR as [swf, flash, air]}
			<tr>
				<td> {swf} </td>
				<td> {flash} </td>
				<td> {air} </td>
			</tr>
		{/each}
	</tbody>
</table>
