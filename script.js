const gridContainer = document.querySelector('.gridContainer');
const input = document.querySelector('input');

function createGrid(input) {
	if (input > 128) {
		alert('please enter a number less than 64');
	} else {
		const gridContainer = document.querySelector('.gridContainer');
		for (let i = 0; i < input; i++) {
			const row = document.createElement('div');
			row.className = 'row';
			for (let j = 1; j <= input; j++) {
				const pixel = document.createElement('div');
				pixel.className = 'pixel';
				row.appendChild(pixel);
			}
			gridContainer.appendChild(row);
		}
	}
}

input.addEventListener('change', function () {
	let num = document.querySelector('input').value;
	createGrid(num);
});
