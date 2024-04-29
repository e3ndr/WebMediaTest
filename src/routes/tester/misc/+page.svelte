<svelte:head>
	<title>WebMediaTest / Media Tester / Miscellaneous</title>
</svelte:head>

<!-- 
	All of the following code is designed to maintain compability for non-HTML5 browsers. Deal with it.
-->

<h1>Miscellaneous</h1>
<br />

<h2>Reported Plugins</h2>
<div>
	<table style="width: auto;">
		<colgroup>
			<col span="1" style="width: 200px;" />
			<col span="1" style="width: 350px;" />
		</colgroup>

		<thead>
			<tr>
				<th> Name </th>
				<th> Description </th>
			</tr>
		</thead>
		<tbody id="installed-plugins" />
	</table>
	<script>
		// This code is designed this way to maintain compability for non-HTML5 browsers. Deal with it.
		// https://learn.microsoft.com/en-us/previous-versions/windows/silverlight/dotnet-windows-silverlight/cc838126(v=vs.95)

		function doPluginsTest() {
			var table = document.getElementById('installed-plugins');
			var plugins = navigator.plugins;

			if (!plugins || plugins.length == 0) {
				table.innerHTML += '<tr><td><i>No plugins detected</i></td><td></td></tr>';
				return;
			}

			for (var i = 0; i < plugins.length; i++) {
				var plugin = plugins[i];

				table.innerHTML +=
					'<tr><td>' + plugin.name + '</td><td>' + plugin.description + '</td></tr>';
			}
		}
	</script>
</div>

<div>
	<script>
		function doInit() {
			try {
				doPluginsTest();
			} catch (e) {
				alert(e);
			}
		}

		window.onload = doInit;
	</script>
</div>
