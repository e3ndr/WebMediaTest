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

<h2>Local Call</h2>
<div>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		id="local-call-self"
		style="background: black;"
		autoplay
		playsinline
		controls
		muted
		width="256"
		height="144"
	/>
	<video
		id="local-call-remote"
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

				navigator.mediaDevices.getUserMedia(constraints).then(function (selfStream) {
					console.log('Self:', selfStream);
					var selfVideo = document.getElementById('local-call-self');
					var remoteVideo = document.getElementById('local-call-remote');
					var selfPC = new RTCPeerConnection({});
					var remotePC = new RTCPeerConnection({});

					if ('srcObject' in selfVideo) {
						selfVideo.srcObject = selfStream;
					} else {
						selfVideo.src = (window.URL || window.webkitURL).createObjectURL(selfStream);
					}

					selfStream.getTracks().forEach(function (track) {
						selfPC.addTrack(track, selfStream);
					});

					selfPC.addEventListener('icecandidate', function (e) {
						remotePC.addIceCandidate(e.candidate);
					});

					remotePC.addEventListener('icecandidate', function (e) {
						selfPC.addIceCandidate(e.candidate);
					});

					remotePC.addEventListener('track', function (e) {
						var remoteStream = e.streams[0];
						console.log('Remote:', remoteStream);
						if ('srcObject' in remoteVideo) {
							remoteVideo.srcObject = remoteStream;
						} else {
							remoteVideo.src = (window.URL || window.webkitURL).createObjectURL(remoteStream);
						}
					});

					remotePC
						.createOffer({
							offerToReceiveAudio: 1,
							offerToReceiveVideo: 1
						})
						.then(function (offer) {
							remotePC.setLocalDescription(offer);
							selfPC.setRemoteDescription(offer);

							selfPC.createAnswer().then(function (answer) {
								selfPC.setLocalDescription(answer);
								remotePC.setRemoteDescription(answer);
							});
						});
				});
			} catch (e) {
				alert(e);
			}
		}
	</script>
	<button onclick="startLocalCall()"> Start </button>
	<button onclick="location.reload();"> End </button>
</div>
