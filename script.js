const gridContainer = document.querySelector('.gridContainer');
// const pixel = document.createElement('div');
// gridContainer.appendChild(pixel);
// pixel.classList.add('pixel');

function createGrid(input) {
	const gridContainer = document.querySelector('.gridContainer');
	for (let i = 0; i < input; i++) {
		const row = document.createElement('div');
		row.className = 'row';
		for (let j = 1; j <= input; j++) {
			const pixel = document.createElement('div');
			pixel.className = 'pixel';
			pixel.innerText = i * input + j;
			row.appendChild(pixel);
		}
		gridContainer.appendChild(row);
	}
}
createGrid(16);
