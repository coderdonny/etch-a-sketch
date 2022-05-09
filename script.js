createGrid(32);
const gridContainer = document.querySelector('.gridContainer');
const slider = document.querySelector('#slider');

function createGrid(input) {
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

const rangeValue = document.querySelector('#rangValue');

slider.addEventListener('mousemove', function () {
	let num = document.querySelector('#slider').value;
	rangeSlide(num);
});

slider.addEventListener('mouseup', reset, function () {
	let num = document.querySelector('#slider').value;
	createGrid(num);
});

function rangeSlide(value) {
	output = `${value} x ${value}`;
	document.querySelector('#rangeValue').innerHTML = output;
}

function reset() {
	document.querySelector('.gridContainer').innerHTML = '';
	defaultGrid();
}

function gridListener(e) {
	const element = e.target;
	if (element.classList.contains('pixel')) {
		if (colorChoice === 'black') {
			element.style.backgroundColor = 'black';
		} else if (colorChoice === 'rainbow') {
			element.style.backgroundColor = randomColor();
		}
	}
}

document.addEventListener('mouseover', gridListener);

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', reset);

function randomColor() {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return `rgb(${r}, ${g}, ${b})`;
}

function defaultGrid() {
	let num = document.querySelector('#slider').value;
	createGrid(num);
}

let colorChoice = 'black';

const rainbowToggle = document.querySelector('#rainbow');

rainbowToggle.addEventListener('click', function () {
	const rainbowToggle = document.querySelector('#rainbow');
	if (rainbowToggle.value === 'YES') {
		rainbowToggle.innerHTML = 'Rainbow Mode: Off';
		rainbowToggle.style.backgroundColor = '#e30000';
		colorChoice = 'black';
		rainbowToggle.value = 'NO';
	} else if (rainbowToggle.value === 'NO') {
		rainbowToggle.innerHTML = 'Rainbow Mode: On';
		rainbowToggle.style.backgroundColor = 'rgb(8, 188, 8)';
		colorChoice = 'rainbow';
		rainbowToggle.value = 'YES';
	}
});
