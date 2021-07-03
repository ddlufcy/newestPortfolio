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


let about = document.getElementById('fullTextAbout')




// grab initialWidth to compare
window.addEventListener('load', (event) => {
	initialWidth = window.innerWidth;;
  });
  