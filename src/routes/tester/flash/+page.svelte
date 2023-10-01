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
		<col span="1" style="width: 200px;" />
		<col span="1" style="width: 150px;" />
		<col span="1" style="width: 150px;" />
	</colgroup>

	<thead>
		<tr>
			<th> Codec </th>
			<th> Supported </th>
		</tr>
	</thead>
	<tbody>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> Screen Video (6+) </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> Screen Video 2 (8+) </td>
			<td title="8" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> Sorenson Spark / H.263 (6+) </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> On2 TrueMotion VP6 (8+) </td>
			<td title="8" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> AVC1 / H.264 (9+) </td>
			<td title="9" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> MP3 (6+) </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> AAC (9+) </td>
			<td title="9" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> Speex (10+) </td>
			<td title="10" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> Asao (6+) </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> A-law (6+) </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> μ-law (6+) </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
	</tbody>
</table>
