<script>
	const FILES = {
		webm: [
			{
				name: '2160p',
				codecs: ['VP9', 'Opus'],
				file: '/container-formats/webm/vp9,opus__2160p.webm',
				size: '9.82MB',
				notes: ''
			},
			{
				name: '720p',
				codecs: ['VP8', 'Opus'],
				file: '/container-formats/webm/vp8,opus__720p.webm',
				size: '4.88MB',
				notes: ''
			}
		],
		mp4: [
			{
				name: '2160p',
				codecs: ['HEVC', 'AAC'],
				file: '/container-formats/mp4/hevc,aac__2160p.mp4',
				size: '18.2MB',
				notes: ''
			},
			{
				name: '2160p',
				codecs: ['H264', 'AAC'],
				file: '/container-formats/mp4/h264,aac__2160p.mp4',
				size: '16.1MB',
				notes: ''
			},
			{
				name: '1080p',
				codecs: ['H264', 'AAC'],
				file: '/container-formats/mp4/h264,aac__1080p.mp4',
				size: '18.1MB',
				notes: ''
			},
			{
				name: '720p',
				codecs: ['H264', 'AAC'],
				file: '/container-formats/mp4/h264,aac__720p.mp4',
				size: '18.0MB',
				notes: ''
			},
			{
				name: '360p',
				codecs: ['H264', 'AAC'],
				file: '/container-formats/mp4/h264,aac__360p.mp4',
				size: '17.8MB',
				notes: ''
			}
		],
		matroska: [
			{
				name: '1080p',
				codecs: ['H264', 'AAC'],
				file: '/container-formats/matroska/h264,aac__1080p.mkv',
				size: '18.1MB',
				notes: 'Browsers will actually play MKV files!' //  Since Webm is based on Matroska they have the same headers, and if the browser does a content probe it will think it's a Webm file and start playback.
			}
		],
		flv: [
			{
				name: '240p (Flash 7+)',
				codecs: ['Sorenson Spark', 'MP3'],
				file: '/container-formats/flv/sorenson-spark,mp3__240p.flv',
				size: '3.03MB',
				notes: 'Should work on the Wii.'
			},
			{
				name: '240p (Flash 8+, broken video)',
				codecs: ['VP6', 'MP3'],
				file: '/container-formats/flv/vp6,mp3__240p.flv',
				size: '5.94MB',
				notes: ''
			},
			{
				name: '240p (Flash 9+)',
				codecs: ['H264', 'MP3'],
				file: '/container-formats/flv/h264,mp3__240p.flv',
				size: '5.22MB',
				notes: 'Should work on the Wii.'
			},
			{
				name: '240p (Flash 9+)',
				codecs: ['H264', 'AAC'],
				file: '/container-formats/flv/h264,aac__240p.flv',
				size: '5.23MB',
				notes: ''
			}
		],
		swf: [
			{
				name: '240p (Flash 6+)',
				codecs: ['Sorenson Spark', 'MP3'],
				file: '/container-formats/swf/sorenson-spark,mp3__240p.swf',
				size: '3.01MB',
				notes:
					'Partially works on the PSP (audio plays, no video). <br /> The Wii plays it but struggles to keep up.'
			}
		]
	};

	const PLAYERS = {
		flv: ['FLV Player'],
		swf: ['SWF'],
		webm: ['HTML5'],
		mp4: ['HTML5', 'FLASH MP4'],
		matroska: ['HTML5']
	};
</script>

<svelte:head>
	<title>WebMediaTest / Media / Container Formats</title>
</svelte:head>

<h1>Various container formats with both Audio and Video</h1>
<p>
	Credit: <a href="https://www.youtube.com/watch?v=CcHo03GzMN8" target="_blank">
		Russian Dance - Tchaikovsky Nutcracker Suite - Lud and Schlatt's Musical Emporium
	</a>
</p>

<!-- // TODO add a hls playlist. 
	 // TODO add a dash playlist. -->

<br />
<div>
	<table>
		{#each Object.entries(FILES) as [container, files]}
			{@const supportedPlayers = PLAYERS[container]}

			<tr>
				<td colspan="6">
					<h2>{container.toUpperCase()}</h2>
				</td>
			</tr>
			<tr class="header">
				<th>Name</th>
				<th>Codecs</th>
				<th>Size</th>
				<th>File</th>
				<th>Player</th>
				<th>Notes</th>
			</tr>
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
							&nbsp;&nbsp;
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
		{/each}
	</table>
</div>

<style>
	tr.header {
		text-align: left;
		color: white;
		background-color: black;
	}

	td,
	th {
		padding-right: 32px;
	}
</style>
