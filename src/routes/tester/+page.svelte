<script>
	import {
		CONTAINER_FORMATS,
		VIDEO_CODECS,
		AUDIO_CODECS,
		SPECIAL_FORMATS
	} from '$lib/testCodecs.mjs';

	import { onMount } from 'svelte';

	onMount(() => window.doInit());
</script>

<svelte:head>
	<title>WebMediaTest / Media Tester</title>
	<script src="/js/flash_detect.js"></script>

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
				elem.style = 'background-color: ' + result.color + '; color: white;';
			}
		}

		function doFlashTest() {
			if (typeof window.FlashDetect == 'undefined') return;

			var toTest = document.getElementsByClassName('flash-detect');
			for (var i = 0; i < toTest.length; i++) {
				var elem = toTest[i];
				var version = elem.title;
				var result = FlashDetect.majorAtLeast(parseInt(version));
				elem.innerText = result ? 'Maybe' : 'No';
				elem.style = result ? 'background: gold; color: white;' : 'background: red; color: white;';
			}
		}

		function doInit() {
			try {
				doFlashTest();
			} catch (e) {
				alert(e);
			}
			try {
				doTestViaMediaElement();
			} catch (e) {
				alert(e);
			}
		}

		window.onload = doInit;
	</script>
</svelte:head>

<a href="/">Go Back</a>
<br />
<br />

<h1 style="margin-bottom: 0;">Playable media as reported by your browser</h1>
<p style="margin-top: 0;">Hover each cell for the Mime Type used.</p>

<p>
	Note that the test files are not meant to be indicative of quality, they are only for testing
	player compatibility.
</p>

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
		{#each CONTAINER_FORMATS as _}
			<col span="1" style="width: 165px;" />
		{/each}
	</colgroup>

	<thead>
		<tr>
			<th style="text-align: center;"> Codec | Container </th>

			{#each CONTAINER_FORMATS as { name: formatName }}
				<th> {@html formatName} </th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each VIDEO_CODECS as { mime: codecMime, name: codecName, slug: codecSlug, testFile: codecTestFile, subType: isCodecSubType, containers: codecContainers }}
			<tr style="color: white;">
				<td>
					{#if codecTestFile}
						<a
							href="/test-media/{codecSlug}/{codecTestFile}"
							style="font-weight: bold; color: black;"
							style:margin-left={isCodecSubType ? '8px;' : '0;'}
						>
							{@html codecName}
						</a>
					{:else}
						<span
							style="font-weight: bold; color: black;"
							style:margin-left={isCodecSubType ? '8px;' : '0;'}
						>
							{@html codecName}
						</span>
					{/if}
				</td>
				{#each CONTAINER_FORMATS as { mime: formatMime, slug: formatSlug }}
					<td style="padding: 0;">
						{#if formatSlug && codecSlug && codecContainers.includes(formatMime)}
							<a
								href="/test-media/{codecSlug}/{formatSlug}"
								title="video/{formatMime}; codecs={codecMime}"
								class="to-test"
								style="background: red;"
							>
								No
							</a>
						{:else}
							<span
								title="video/{formatMime}; codecs={codecMime}"
								class="to-test"
								style="background: red;"
							>
								No
							</span>
						{/if}
					</td>
				{/each}
			</tr>
		{/each}

		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> (Container-only, video) </td>
			{#each CONTAINER_FORMATS as { mime: formatMime }}
				<td style="padding: 0;">
					<span title="video/{formatMime}" class="to-test" style="background: red;"> No </span>
				</td>
			{/each}
		</tr>

		<tr>
			<td style="padding: 4px;" />
			{#each CONTAINER_FORMATS as _}
				<td style="padding: 4px;" />
			{/each}
		</tr>

		{#each AUDIO_CODECS as { mime: codecMime, name: codecName, slug: codecSlug, testFile: codecTestFile, subType: isCodecSubType, containers: codecContainers }}
			<tr style="color: white;">
				<td>
					{#if codecTestFile}
						<a
							href="/test-media/{codecSlug}/{codecTestFile}"
							style="font-weight: bold; color: black;"
							style:margin-left={isCodecSubType ? '8px;' : '0;'}
						>
							{@html codecName}
						</a>
					{:else}
						<span
							style="font-weight: bold; color: black;"
							style:margin-left={isCodecSubType ? '8px;' : '0;'}
						>
							{@html codecName}
						</span>
					{/if}
				</td>
				{#each CONTAINER_FORMATS as { mime: formatMime, slug: formatSlug }}
					<td style="padding: 0;">
						{#if formatSlug && codecSlug && codecContainers.includes(formatMime)}
							<a
								href="/test-media/{codecSlug}/{formatSlug}"
								title="video/{formatMime}; codecs={codecMime}"
								class="to-test"
								style="background: red; color: white;"
							>
								No
							</a>
						{:else}
							<span
								title="video/{formatMime}; codecs={codecMime}"
								class="to-test"
								style="background: red; color: white;"
							>
								No
							</span>
						{/if}
					</td>
				{/each}
			</tr>
		{/each}

		<tr style="color: white;">
			<td style="font-weight: bold; color: black;"> (Container-only, audio) </td>
			{#each CONTAINER_FORMATS as { mime: formatMime }}
				<td style="padding: 0;">
					<span title="audio/{formatMime}" class="to-test" style="background: red;"> No </span>
				</td>
			{/each}
		</tr>
	</tbody>
</table>
<br />

<table>
	<colgroup>
		<col span="1" style="width: auto;" />
		<col span="1" style="width: 584px;" />
	</colgroup>

	<tbody>
		<tr id="footnote1">
			<td style="text-align: right;"> &#8224; </td>
			<td> G.711 and G.722 are usually supported via WebRTC. </td>
		</tr>
		<tr id="footnote2">
			<td style="text-align: right;"> &#8224;&#8224; </td>
			<td>
				Matroska is usually supported on most browsers IF you use the WebM mime type when you serve
				the file. Browsers will generally play any codec in a Matroska file that they support.
			</td>
		</tr>
		<tr id="footnote3">
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
		{#each Object.entries(SPECIAL_FORMATS) as [mime, name]}
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

<br />
<br />
<br />

<a href="#top">Back to top</a>

<style type="text/css">
	.to-test {
		display: block;
		padding: 10px 5px;
	}

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
