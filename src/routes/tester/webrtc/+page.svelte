<svelte:head>
	<title>WebMediaTest / Media Tester / WebRTC</title>
	<script src="/js/flash_detect.js"></script>
</svelte:head>

<!-- 
	All of the following code is designed to maintain compability for non-HTML5 browsers. Deal with it.
-->

<h1>WebRTC Tester</h1>
<br />

<h2>Local Call</h2>
<div>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		id="local-call"
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
		function startLocalCall() {
			try {
				var constraints = {
					audio: true,
					video: true
				};

				navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
					console.log(stream);
					var video = document.getElementById('local-call');
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
	<button onclick="startLocalCall()"> Start </button>
	<button onclick="location.reload();"> End </button>
</div>
