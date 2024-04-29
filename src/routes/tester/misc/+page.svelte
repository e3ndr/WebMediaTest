<script>
	const APIS = [
		{ name: 'navigator', check: 'window.navigator' },
		{ name: 'navigator.plugins', check: 'window.navigator && window.navigator.plugins' }
	];
</script>

<svelte:head>
	<title>WebMediaTest / Miscellaneous</title>
</svelte:head>

<!-- 
	All of the following code is designed to maintain compability for non-HTML5 browsers. Deal with it.
-->

<h1>Miscellaneous</h1>
<br />

<div>
	<script>
		function doInit() {
			try {
				doApiTests();
			} catch (e) {
				alert(e.toString());
			}
			try {
				doPluginsTest();
			} catch (e) {
				alert(e.toString());
			}
		}

		window.onload = doInit;
	</script>
</div>

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
<br />
<br />

<h2>Supported APIs</h2>
<div>
	<table style="width: auto;">
		<colgroup>
			<col span="1" style="width: 200px;" />
			<col span="1" style="width: 350px;" />
		</colgroup>

		<thead>
			<tr>
				<th> Name </th>
				<th> Supported </th>
			</tr>
		</thead>
		<tbody>
			{#each APIS as { name, check }}
				{@const id = `api-${Math.random().toString(28).replace('0.', '')}`}
				<tr style="color: white;">
					<td style="font-weight: bold; color: black;"> {name} </td>
					<td {id} style="background: black;"> Unknown </td>
					<!-- prettier-ignore -->
					<span class="scriptify" style="display: none;">
						(function() {'{'}
							var elem = document.getElementById('{id}');
							if ({check}) {'{'}
								elem.innerText = 'Supported';
								elem.style.backgroundColor = 'green';
								elem.style.color = 'white';
							{'}'} else {'{'}
								elem.innerText = 'Unsupported';
								elem.style.backgroundColor = 'red';
								elem.style.color = 'white';
							{'}'}
						{'}'})()
					</span>
				</tr>
			{/each}
		</tbody>
	</table>
	<script>
		function doApiTests() {
			var toTest = document.getElementsByClassName('scriptify');
			for (var i = 0; i < toTest.length; i++) {
				var src = toTest[i].innerText;
				var s = document.createElement('script');
				s.innerText = src;
				document.appendChild(s);
			}
		}
	</script>
</div>
<br />
<br />
