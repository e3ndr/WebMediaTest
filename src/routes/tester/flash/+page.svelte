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
</script>

<svelte:head>
	<title>WebMediaTest / Media Tester / Flash</title>
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
				<td title={required} class="flash-detect" style="background: red;"> No </td>
			</tr>
		{/each}
	</tbody>
</table>
