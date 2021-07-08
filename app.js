//logic for boxes
let boxSpan = document.querySelectorAll('.box');



boxSpan.forEach((box) => {
	box.addEventListener('click', () => {
		box.classList.toggle('bigBox')	
	})
})

let topName = document.querySelector('#firstName');


let bigBox = document.querySelector('.bigBox')


let skills = document.querySelector("#skills");

skills.addEventListener('transitionend', () => {
	if (skills.innerHTML === "Skills") {
		console.log('text')
		skills.innerHTML = "JavaScript SASS HTML5";
	} else {
		skills.innerHTML = "Skills";
	}	
})

let about = document.querySelector('#about')
about.addEventListener('transitionend', () => {
	setTimeout(()=> {
		let aboutMe = "About Me";
	let aboutText = "Hi, I'm Daniel Lufcy. I'm a fullstack JavaScript developer in Indianapolis. I love to build things that people love to use. Feel free to reach out if you would be interested in using me for your next project.";
	if (about.offsetWidth > 75) {
		console.log(about.offsetWidth)
		about.innerHTML = `${aboutText}`
	} 
	else {
		console.log(about.offsetWidth)
		about.innerHTML = "About Me"
	}
	}, 500)	
})


