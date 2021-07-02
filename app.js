//logic for boxes
let boxSpan = document.querySelectorAll('.box');



boxSpan.forEach((box) => {
	box.addEventListener('click', () => {
		box.classList.toggle('bigBox')	
		console.log(boxWidths)
	})
})

let topName = document.querySelector('#firstName');


let initialWidth = null;

let bigBox = document.querySelector('.bigBox')

// boxSpan.forEach((box) => {
// 	box.addEventListener('transitionend', () => {
// 		box.classList.toggle('bigBoxText')
// 		document.getElementById('about').innerText = 
// 		"Hi I am Daniel"
// 	});
// })


// grab initialWidth to compare
window.addEventListener('load', (event) => {
	initialWidth = window.innerWidth;;
  });
  