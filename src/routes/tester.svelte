<script>
	import { onMount } from 'svelte';

	const VIDEO_CODECS = {
		mpeg2: 'MPEG 2 / H.262',
		spark: 'Sorenson Spark / H.263',
		s263: 'ITU H.263',
		avc1: 'AVC1 / H.264',
		'avc1.42000a': '&emsp;&#8627; Baseline, 1.0',
		hev1: 'HEVC / H.265',
		'hev1.1.6.L93.B0': '&emsp;&#8627; Main, 3.1',
		vvc: 'VVC / H.266',
		vp3: 'On2 TrueMotion VP3',
		vp6: 'On2 TrueMotion VP6',
		vp8: 'VP8',
		vp9: 'VP9',
		vp10: 'VP10&#8224;&#8224;',
		av01: 'AV1',
		'av01.0.00M.08': '&emsp;&#8627; Main, 2.0',
		daala: 'Daala',
		thor: 'Thor',
		theora: 'Theora',
		svq1: 'Sorenson Video',
		mjpeg: 'Motion-JPEG'
	};

	const AUDIO_CODECS = {
		'mp4a.40.2': 'AAC',
		mp3: 'MP3',
		alac: 'Apple Lossless',
		flac: 'FLAC',
		opus: 'Opus',
		vorbis: 'Vorbis',
		g711: 'G.711&#8224;',
		ulaw: '&emsp;&#8627; μ-law',
		alaw: '&emsp;&#8627; A-law',
		g722: 'G.722&#8224;',
		amr: 'Adaptive-Multi-Rate',
		samr: '&emsp;&#8627; Narrowband',
		sawb: '&emsp;&#8627; Wideband',
		sawp: '&emsp;&#8627; Wideband+',
		'x-speex': 'Speex'
	};

	const FORMATS = {
		mp4: 'MP4',
		webm: 'WebM',
		ogg: 'OGG',
		mkv: 'Matroska&#8224;&#8224;',
		'3gpp': '3GP',
		'3gp2': '3GP2',
		quicktime: 'QuickTime (.mov)',
		'x-msvideo': 'AVI'
	};

	const SPECIAL = {
		'audio/mp4': 'MPEG-4 Part 3 (.m4a)',
		'audio/flac': 'FLAC',
		'audio/mpeg': 'MP3',
		'audio/wav': 'Wave (.wav)'
	};

	onMount(() => window.doInit());
</script>

<svelte:head>
	<title>WebMediaTest / Media Tester</title>
	<script src="/js/flash_detect.js"></script>
</svelte:head>

<a href="/">Go Back</a>
<br />
<br />

<h1 style="margin-bottom: 0;">Playable media as reported by your browser</h1>
<p style="margin-top: 0;">Hover each cell for the Mime Type used.</p>

<h2>Legend</h2>
<table style="width: auto;">
	<colgroup>
		<col span="1" style="width: 75px;" />
		<col span="1" style="width: auto;" />
	</colgroup>
	<tbody>
		<tr>
			<td style="font-weight: bold; color: white; background: red;"> No </td>
			<td> Not supported at all </td>
		</tr>
		<tr>
			<td style="font-weight: bold; color: white; background: gold;"> Maybe </td>
			<td> Might be supported, depends on a specific codec, resolution or bitrate. </td>
		</tr>
		<tr>
			<td style="font-weight: bold; color: white; background: green;"> Probably </td>
			<td>
				Very likely supported. Though, playback may be contrained by other factors (memory,
				resolution, etc).
			</td>
		</tr>
	</tbody>
</table>

<br />
<br />

<table style="width: auto;">
	<colgroup>
		<col span="1" style="width: 230px;" />
		{#each new Array(Object.keys(FORMATS).length) as _}
			<col span="1" style="width: 165px;" />
		{/each}
	</colgroup>

	<thead>
		<tr>
			<th style="text-align: center;"> Codec | Container </th>

			{#each Object.values(FORMATS) as format}
				<th> {@html format} </th>
			{/each}
		</tr>
	</thead>
	<tbody>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> (Container-only, video) </td>
			{#each Object.keys(FORMATS) as formatMime}
				<td title="video/{formatMime}" class="to-test" style="background: red;"> no </td>
			{/each}
		</tr>

		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> (Container-only, audio) </td>
			{#each Object.keys(FORMATS) as formatMime}
				<td title="audio/{formatMime}" class="to-test" style="background: red;"> no </td>
			{/each}
		</tr>

		{#each Object.entries(VIDEO_CODECS) as [codec, codecName]}
			<tr style="color: white;">
				<td style="font-weight: bold; color: black;"> {@html codecName} </td>
				{#each Object.keys(FORMATS) as formatMime}
					<td title="video/{formatMime}; codecs={codec}" class="to-test" style="background: red;">
						no
					</td>
				{/each}
			</tr>
		{/each}

		<tr>
			<td style="padding: 4px;" />
			{#each Object.keys(FORMATS) as _}
				<td style="padding: 4px;" />
			{/each}
		</tr>

		{#each Object.entries(AUDIO_CODECS) as [codec, codecName]}
			<tr style="color: white;">
				<td style="font-weight: bold; color: black;"> {@html codecName} </td>
				{#each Object.keys(FORMATS) as formatMime}
					<td title="audio/{formatMime}; codecs={codec}" class="to-test" style="background: red;">
						no
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
<br />

<table>
	<colgroup>
		<col span="1" style="width: auto;" />
		<col span="1" style="width: 584px;" />
	</colgroup>

	<tbody>
		<tr>
			<td style="text-align: right;"> &#8224; </td>
			<td> G.711 and G.722 are usually supported via WebRTC. </td>
		</tr>
		<tr>
			<td style="text-align: right;"> &#8224;&#8224; </td>
			<td>
				Matroska is usually supported on most browsers IF you use the WebM mime type when you serve
				the file. Browsers will generally play any codec in a Matroska file that they support.
			</td>
		</tr>
		<tr>
			<td style="text-align: right;"> &#8224;&#8224;&#8224; </td>
			<td>
				Google started work on VP10 in September of 2014. Later, after Google joined the Alliance
				for Open Media, they merged their work into what would become the AV1 codec. Daala and Thor
				were also merged into AV1 by Xiph and Cicso respectively.
			</td>
		</tr>
	</tbody>
</table>

<br />
<br />

<h2>Other formats</h2>
<table style="width: auto;">
	<colgroup>
		<col span="1" style="width: 175px;" />
		<col span="1" style="width: 150px;" />
	</colgroup>

	<thead>
		<tr>
			<th> Type </th>
			<th> Supported </th>
		</tr>
	</thead>
	<tbody>
		{#each Object.entries(SPECIAL) as [mime, name]}
			<tr style="color: white;">
				<td style="font-weight: bold; color: black;"> {@html name} </td>
				<td title={mime} class="to-test" style="background: red;"> no </td>
			</tr>
		{/each}
	</tbody>
</table>

<br />
<br />

<h2>Flash Support</h2>
<table style="width: auto;">
	<colgroup>
		<col span="1" style="width: 175px;" />
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
			<td style="font-weight: bold; color: black;"> Screen Video </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> Screen Video 2 </td>
			<td title="8" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> Sorenson Spark / H.263</td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> On2 TrueMotion VP6 </td>
			<td title="8" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> AVC1 / H.264 </td>
			<td title="9" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> MP3 </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> AAC </td>
			<td title="9" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> Speex </td>
			<td title="10" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> Asao </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> A-law </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> μ-law </td>
			<td title="6" class="flash-detect" style="background: red;"> No </td>
		</tr>
	</tbody>
</table>

<br />
<br />
<br />

<a href="#top">Back to top</a>

<div>
	<script>
		// This code is designed this way to maintain compability for non-HTML5 browsers. Deal with it.

		function tryFormatHtml(testElement, mime) {
			var result = testElement.canPlayType(mime);
			switch (result) {
				case '':
					return {
						color: 'red',
						text: 'No'
					};

				case 'maybe':
					return {
						color: 'gold',
						text: 'Maybe'
					};

				case 'probably':
					return {
						color: 'green',
						text: 'Probably'
					};
			}
		}

		function doTestViaMediaElement() {
			// document.getElementById('detection-method-used').innerText = 'HTMLMediaElement';
			var testElement = document.createElement('video');
			var toTest = document.getElementsByClassName('to-test');
			for (var i = 0; i < toTest.length; i++) {
				var elem = toTest[i];
				var mime = elem.title;
				var result = tryFormatHtml(testElement, mime);
				elem.innerText = result.text;
				elem.style = 'background-color: ' + result.color;
			}
		}

		function doFlashTest() {
			var toTest = document.getElementsByClassName('flash-detect');
			for (var i = 0; i < toTest.length; i++) {
				var elem = toTest[i];
				var version = elem.title;
				var result = FlashDetect.majorAtLeast(parseInt(version));
				elem.innerText = result ? 'Maybe' : 'No';
				elem.style = result ? 'background: gold;' : 'background: red;';
			}
		}

		function doInit() {
			doFlashTest();
			doTestViaMediaElement();
		}

		window.onload = doInit;
	</script>
</div>

<style type="text/css">
	table {
		border-collapse: collapse;
		border-spacing: 0;
		table-layout: fixed;
	}
	table td {
		border-color: black;
		border-style: solid;
		border-width: 1px;
		font-family: Arial, sans-serif;
		font-size: 14px;
		overflow: hidden;
		padding: 10px 5px;
		word-break: normal;
	}
	table th {
		border-color: black;
		border-style: solid;
		border-width: 1px;
		font-family: Arial, sans-serif;
		font-size: 14px;
		font-weight: bold;
		overflow: hidden;
		padding: 10px 5px;
		word-break: normal;
	}
	table th,
	table td {
		text-align: left;
		vertical-align: top;
	}
</style>
