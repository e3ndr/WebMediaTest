<svelte:head>
	<script>
		if (!document.getElementsByClassName) {
			// Add a getElementsByClassName function if the browser doesn't have one
			// Limitation: only works with one class name
			// Copyright: Eike Send http://eike.se/nd
			// License: MIT License
			document.getElementsByClassName = function (search) {
				var d = document,
					elements,
					pattern,
					i,
					results = [];
				if (d.querySelectorAll) {
					// IE8
					return d.querySelectorAll('.' + search);
				}
				if (d.evaluate) {
					// IE6, IE7
					pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
					elements = d.evaluate(pattern, d, null, 0, null);
					while ((i = elements.iterateNext())) {
						results.push(i);
					}
				} else {
					elements = d.getElementsByTagName('*');
					pattern = new RegExp('(^|\\s)' + search + '(\\s|$)');
					for (i = 0; i < elements.length; i++) {
						if (pattern.test(elements[i].className)) {
							results.push(elements[i]);
						}
					}
				}
				return results;
			};
		}

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
	</script>
</svelte:head>

<a href="/">Go Back</a>
<br />
<br />

<slot />

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<a href="#top">Back to top</a>

<style type="text/css">
	:global(.to-test) {
		display: block;
		padding: 10px 5px;
	}

	:global(td .to-test) {
		/* position: absolute; */
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	:global(table) {
		border-collapse: collapse;
		border-spacing: 0;
		table-layout: fixed;
	}

	:global(table th) {
		font-weight: bold;
	}

	:global(table th),
	:global(table td) {
		font-family: Arial, sans-serif;
		border-color: black;
		border-style: solid;
		border-width: 1px;
		padding: 10px 5px;
		/* font-family: Arial, sans-serif; */
		font-size: 14px;
		text-align: left;
		vertical-align: top;
		position: relative;
		word-break: normal;
		overflow: hidden;
	}
</style>
