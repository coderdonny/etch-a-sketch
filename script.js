const gridContainer = document.querySelector('.gridContainer');
const slider = document.querySelector('#slider');

function createGrid(input) {
	if (input > 128) {
		alert('please enter a number less than 128');
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

const rangeValue = document.querySelector('#rangValue');

slider.addEventListener('mousemove', function () {
	let num = document.querySelector('#slider').value;
	rangeSlide(num);
});

slider.addEventListener('change', function () {
	reset();
	let num = document.querySelector('#slider').value;
	rangeSlide(num);
	createGrid(num);
});

function rangeSlide(value) {
	output = `${value} x ${value}`;
	document.querySelector('#rangeValue').innerHTML = output;
}

function reset() {
	document.querySelector('.gridContainer').innerHTML = '';
}

function gridListener(e) {
	const element = e.target;
	if (element.classList.contains('pixel')) {
		element.style.backgroundColor = 'black';
	}
}

document.addEventListener('mouseover', gridListener);

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', reset);
