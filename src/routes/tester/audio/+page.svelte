<script>
	import { CONTAINER_FORMATS } from '$lib/codecsConst.mjs';

	const AUDIO_CODECS = [
		{
			subType: false,
			mime: 'mp4a.40.2',
			name: 'AAC',
			slug: 'aac',
			containers: ['mp4', 'mkv', '3gpp', 'quicktime', 'x-msvideo', 'mp2t'],
			testFile: 'media.mp4'
		},
		{
			subType: false,
			mime: 'mp3',
			name: 'MP3',
			slug: 'mp3',
			containers: ['mp4', 'mkv', 'quicktime', 'x-msvideo', 'mp2t'],
			testFile: 'media.avi'
		},
		{
			subType: false,
			mime: 'alac',
			name: 'Apple Lossless',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 'flac',
			name: 'FLAC',
			slug: 'flac',
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 'opus',
			name: 'Opus',
			slug: 'opus',
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 'vorbis',
			name: 'Vorbis',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 'g711',
			name: 'G.711<a href="#footnote2">&#8224;&#8224;</a>',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: true,
			mime: 'ulaw',
			name: '&#8627; μ-law<a href="#footnote2">&#8224;&#8224;</a>',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: true,
			mime: 'alaw',
			name: '&#8627; A-law<a href="#footnote2">&#8224;&#8224;</a>',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 'g722',
			name: 'G.722<a href="#footnote2">&#8224;&#8224;</a>',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 'amr',
			name: 'Adaptive-Multi-Rate',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: true,
			mime: 'samr',
			name: '&#8627; Narrowband',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: true,
			mime: 'sawb',
			name: '&#8627; Wideband',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: true,
			mime: 'sawp',
			name: '&#8627; Wideband+',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 'x-speex',
			name: 'Speex',
			slug: null,
			containers: [],
			testFile: null
		}
	];

	const SPECIAL_AUDIO_FORMATS = [
		{
			mime: 'audio/mp4',
			name: 'MPEG-4 Part 3 (.m4a)',
			testFile: null
		},
		{
			mime: 'audio/flac',
			name: 'FLAC',
			testFile: null
		},
		{
			mime: 'audio/mpeg',
			name: 'MP3',
			testFile: null
		},
		{
			mime: 'audio/wav',
			name: 'Wave (.wav)',
			testFile: null
		},
		{
			mime: 'audio/mp4',
			name: 'MPEG-4 Part 3 (.m4a)',
			testFile: null
		}
	];
</script>

<svelte:head>
	<title>WebMediaTest / Media Tester / Audio</title>

	<script>
		// This code is designed this way to maintain compability for non-HTML5 browsers. Deal with it.

		function doTestViaMediaElement() {
			if (!window.HTMLAudioElement || !window.HTMLAudioElement.prototype.canPlayType) return;

			// document.getElementById('detection-method-used').innerText = 'HTMLMediaElement';
			var testElement = document.createElement('audio');
			var toTest = document.getElementsByClassName('to-test');
			for (var i = 0; i < toTest.length; i++) {
				var elem = toTest[i];
				var mime = elem.title;
				var result = tryFormatHtml(testElement, mime);
				elem.innerText = result.text;
				elem.style.backgroundColor = result.color;
				elem.style.color = 'white';
			}
		}

		function doInit() {
			try {
				doTestViaMediaElement();
			} catch (e) {
				alert(e);
			}
		}

		window.onload = doInit;
	</script>
</svelte:head>

<h1 style="margin-bottom: 0;">Playable audio codecs as reported by your browser</h1>
<p style="margin-top: 0;">Hover each cell for the MimeType used.</p>

<p>
	*These test files are not meant to be indicative of quality, they are only for testing player
	compatibility.
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
		<col span="1" style="width: 200px;" />
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
		{#each AUDIO_CODECS as { mime: codecMime, name: codecName, slug: codecSlug, testFile: codecTestFile, subType: isCodecSubType, containers: codecContainers }}
			<tr style="color: white;">
				<td>
					{#if codecTestFile}
						<a
							href="/media/player?file={encodeURIComponent(
								`/test-media/${codecSlug}/${codecTestFile}`
							)}"
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
								href="/media/player?file={encodeURIComponent(
									`/test-media/${codecSlug}/${formatSlug}`
								)}"
								title="audio/{formatMime}; codecs={codecMime}"
								class="to-test"
								style="background: red;"
							>
								No
							</a>
						{:else}
							<span
								title="audio/{formatMime}; codecs={codecMime}"
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
			<td style="font-weight: bold; color: black;"> (Container-only) </td>
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
			<td>
				Matroska is usually supported on most browsers IF you use the WebM mime type when you serve
				the file. Browsers will generally play any codec in a Matroska file that they support.
			</td>
		</tr>
		<tr id="footnote2">
			<td style="text-align: right;"> &#8224;&#8224; </td>
			<td> G.711 and G.722 are usually only supported via WebRTC. </td>
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
		{#each SPECIAL_AUDIO_FORMATS as { mime, name, testFile }}
			<tr style="color: white;">
				<td style="font-weight: bold; color: black;"> {@html name} </td>
				<td style="padding: 0;">
					{#if testFile}
						<a
							href="/media/player?file={encodeURIComponent(testFile)}"
							title={mime}
							class="to-test"
							style="background: red;"
						>
							No
						</a>
					{:else}
						<span title={mime} class="to-test" style="background: red;"> No </span>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
