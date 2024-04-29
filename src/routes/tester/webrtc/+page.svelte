<svelte:head>
	<title>WebMediaTest / Media Tester / WebRTC</title>
	<script src="/js/flash_detect.js"></script>
</svelte:head>

<!-- 
	All of the following code is designed to maintain compability for non-HTML5 browsers. Deal with it.
-->

<h1>WebRTC Tester</h1>
<br />

<h2>Media Test</h2>
<div>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		id="media-test"
		style="background: black;"
		autoplay
		playsinline
		controls
		muted
		width="256"
		height="144"
	/>
	<br />
	<script>
		function startMediaTest() {
			try {
				var constraints = {
					audio: true,
					video: true
				};

				navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
					console.log(stream);
					var video = document.getElementById('media-test');
					if ('srcObject' in video) {
						video.srcObject = stream;
					} else {
						video.src = (window.URL || window.webkitURL).createObjectURL(stream);
					}
				});
			} catch (e) {
				alert(e);
			}
		}
	</script>
	<button onclick="startMediaTest()"> Start </button>
	<button onclick="location.reload();"> End </button>
</div>
