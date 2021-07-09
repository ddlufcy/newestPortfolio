//logic for boxes
let boxSpan = document.querySelectorAll(".box");

boxSpan.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("bigBox");
  });
});

let topName = document.querySelector("#firstName");

let bigBox = document.querySelector(".bigBox");

//skills bubble
const skills = document.querySelector("#skills");
new ResizeObserver(() => {
	if (skills.offsetWidth > 95) {
		console.log("text");
		skills.innerHTML = "Here are the languages and Libraries I use:" 
		} else if (skills.offsetWidth < 95) {
		skills.innerHTML = "Skills";
		}
}).observe(skills);

//about bubble
const about = document.querySelector("#about");
new ResizeObserver(() => {
  if (about.offsetWidth > 95) {
	console.log("large");
	about.textContent = "Hi, I'm Daniel Lufcy. I'm a fullstack JavaScript developer in Indianapolis. I love to build things that people love to use. Feel free to reach out if you would be interested in using me for your next project.";
  } else if (about.offsetWidth < 100) {
    console.log("small");
    about.textContent = "About Me";
  }
}).observe(about);


