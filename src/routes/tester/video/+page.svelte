<script>
	import { CONTAINER_FORMATS } from '$lib/codecsConst.mjs';

	const VIDEO_CODECS = [
		{
			subType: false,
			mime: 'mpeg2',
			name: 'MPEG 2 / H.262',
			slug: 'mpeg2',
			containers: ['mp4', 'mkv', 'quicktime', 'x-msvideo', 'mp2t'],
			testFile: 'media.ts'
		},
		{
			subType: false,
			mime: 'spark',
			name: 'Sorenson Spark / H.263',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 's263',
			name: 'ITU H.263',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 'avc1',
			name: 'AVC1 / H.264',
			slug: 'avc1',
			containers: [],
			testFile: null
		},
		{
			subType: true,
			mime: 'avc1.42000a',
			name: '&#8627; Baseline, 1.0',
			slug: 'avc1',
			containers: ['mp4', 'mkv', '3gpp', 'quicktime', 'x-msvideo', 'mp2t'],
			testFile: 'media.mp4'
		},
		{
			subType: false,
			mime: 'hev1',
			name: 'HEVC / H.265',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: true,
			mime: 'hev1.1.6.L93.B0',
			name: '&#8627; Main, 3.1',
			slug: 'hevc',
			containers: ['mp4', 'mkv', 'quicktime', 'mp2t'],
			testFile: 'media.mp4'
		},
		{
			subType: false,
			mime: 'vvc',
			name: 'VVC / H.266',
			slug: 'vvc',
			containers: [],
			testFile: null // Don't think I can find an encoder for this...
		},
		{
			subType: false,
			mime: 'vp3',
			name: 'On2 TrueMotion VP3',
			slug: 'vp3',
			containers: [],
			testFile: null // Don't think I can find an encoder for this...
		},
		{
			subType: false,
			mime: 'vp6',
			name: 'On2 TrueMotion VP6',
			slug: 'vp6',
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 'vp8',
			name: 'VP8',
			slug: 'vp8',
			containers: ['webm', 'mkv', 'x-msvideo'],
			testFile: 'media.webm'
		},
		{
			subType: false,
			mime: 'vp9',
			name: 'VP9',
			slug: 'vp9',
			containers: ['mp4', 'webm', 'mkv', 'x-msvideo'],
			testFile: 'media.webm'
		},
		{
			subType: false,
			mime: 'vp10',
			name: 'VP10<a href="#footnote2">&#8224;&#8224;</a>',
			slug: null,
			containers: [],
			testFile: null // Don't think I can find an encoder for this...
		},
		{
			subType: false,
			mime: 'av01',
			name: 'AV1',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: true,
			mime: 'av01.0.00M.08',
			name: '&#8627; Main, 2.0',
			slug: 'av1',
			containers: ['mp4', 'webm', 'mkv', 'x-msvideo'],
			testFile: 'media.webm'
		},
		{
			subType: false,
			mime: 'daala',
			name: 'Daala<a href="#footnote2">&#8224;&#8224;</a>',
			slug: null,
			containers: [],
			testFile: null // Don't think I can find an encoder for this...
		},
		{
			subType: false,
			mime: 'thor',
			name: 'Thor<a href="#footnote2">&#8224;&#8224;</a>',
			slug: null,
			containers: [],
			testFile: null // Don't think I can find an encoder for this...
		},
		{
			subType: false,
			mime: 'theora',
			name: 'Theora',
			slug: 'theora',
			containers: ['ogg', 'mkv', 'quicktime', 'x-msvideo'],
			testFile: 'media.ogg'
		},
		{
			subType: false,
			mime: 'svq1',
			name: 'Sorenson Video',
			slug: null,
			containers: [],
			testFile: null
		},
		{
			subType: false,
			mime: 'mjpeg',
			name: 'Motion-JPEG',
			slug: null,
			containers: [],
			testFile: null
		}
	];

	const SPECIAL_VIDEO_FORMATS = [
		{
			mime: 'application/x-mpegURL',
			name: 'Apple HLS',
			testFile: null
		}
	];
</script>

<svelte:head>
	<title>WebMediaTest / Media Tester / Video</title>

	<script>
		// This code is designed this way to maintain compability for non-HTML5 browsers. Deal with it.

		function doTestViaMediaElement() {
			if (!window.HTMLVideoElement || !window.HTMLVideoElement.prototype.canPlayType) return;

			// document.getElementById('detection-method-used').innerText = 'HTMLMediaElement';
			var testElement = document.createElement('video');
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

<h1 style="margin-bottom: 0;">Playable video codecs as reported by your browser</h1>
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
			<td style="font-weight: bold; color: black;"> (Container-only) </td>
			{#each CONTAINER_FORMATS as { mime: formatMime }}
				<td style="padding: 0;">
					<span title="video/{formatMime}" class="to-test" style="background: red;"> No </span>
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
		<tr id="footnote3">
			<td style="text-align: right;"> &#8224;&#8224; </td>
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
		{#each SPECIAL_VIDEO_FORMATS as { mime, name, testFile }}
			<tr style="color: white;">
				<td style="font-weight: bold; color: black;"> {@html name} </td>
				<td style="padding: 0;">
					{#if testFile}
						<a
							href="/media/player?file={encodeURIComponent(testFile)}"
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
