import React from 'react';

export default function Footer() {

	const currentYear = new Date().getFullYear();
	return (
		<footer>
			Written by <a href="https://github.com/thinhnw">thinhnw</a>, ⓒ  {currentYear}
		</footer>
	);
}
