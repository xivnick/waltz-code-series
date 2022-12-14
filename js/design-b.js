
(() => {
const hours = document.querySelector('.b #hours');
const minutes = document.querySelector('.b #minutes');
const seconds = document.querySelector('.b #seconds');

for(let i = 0; i < 12; i++){
	hours.innerHTML += `<div class="hour-box row-${Math.floor(i / 6)} col-${i % 6}"></div>`;
}

for(let i = 0; i < 60; i++){
	minutes.innerHTML += `<div class="minute-box row-${Math.floor(i / 30) * 6 + i % 6} col-${Math.floor(i / 6) % 5} color-${i % 6}"></div>`;
}

const second_data = [
	[0, 8], [0, 9], [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 15],
	[1, 15], [2, 15], [3, 15], [4, 15], [5, 15], [6, 15], [7, 15],
	[8, 15], [9, 15], [10, 15], [11, 15], [12, 15], [13, 15], [14, 15], [15, 15],
	[15, 14], [15, 13], [15, 12], [15, 11], [15, 10], [15, 9], [15, 8],
	[15, 7], [15, 6], [15, 5], [15, 4], [15, 3], [15, 2], [15, 1], [15, 0],
	[14, 0], [13, 0], [12, 0], [11, 0], [10, 0], [9, 0], [8, 0],
	[7, 0], [6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0], [0, 0],
	[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]
];

for(let d of second_data){
	seconds.innerHTML += `<div class="second-box row-${d[0]} col-${d[1]}"></div>`;
}
})();