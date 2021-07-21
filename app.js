//imports
import { skillsList } from './modules/skills.js'
import { aboutText } from './modules/about.js'


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
		skills.innerHTML = `${skillsList}` //list imported from the skills.js module
		} else if (skills.offsetWidth < 95) {
		skills.innerHTML = "Skills";
		}
}).observe(skills);

//about bubble
const about = document.querySelector("#about");
new ResizeObserver(() => {
  if (about.offsetWidth > 95 && 200) {
	console.log("large");
		about.textContent = `${aboutText}` // text imported from about.js
  } else if (about.offsetWidth < 100 || 200) {
    console.log("small");
	clearTimeout()
    about.textContent = "About Me";
  }
}).observe(about);

console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)

