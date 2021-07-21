
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
		skills.innerHTML = `
		<dl>
			<dd>Here are the languages and Libraries I use:</dd><br>
			<span class="skillRow">
				<dt>JavaScript</dt>
				<img src="https://img.icons8.com/ios-filled/50/000000/javascript.png"/> 
				<br>
			</span>
			<span class="skillRow">
				<dt class="skillRow">CSS3/SCSS</dt>
				<img src="https://img.icons8.com/color/48/000000/sass.png"/>
				<br>
			</span>
			<span class="skillRow">
				<dt class="skillRow">React</dt>
				<img src="https://img.icons8.com/office/40/000000/react.png"/>
				<br>
			</span>
			<span class="skillRow">
				<dt class="skillRow">HTML5</dt>
				<img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
				<br>
			</span>
			<span class="skillRow">
				<dt class="skillRow">NodeJS</dt>
				<img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
				<br>
			</span>
			<span class="skillRow">
				<dt class="skillRow">SQL</dt><img src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
				<br>
			</span>
			<span class="skillRow">
				<dt class="skillRow">GIT</dt><img src="https://img.icons8.com/color/48/000000/git.png"/>
				<br>
			</span>
			<span class="skillRow">
				<dt class="skillRow">And many more ...</dt>
				<br>
			</span>				
		<dl/>
		` 
		} else if (skills.offsetWidth < 95) {
		skills.innerHTML = "Skills";
		}
}).observe(skills);

//about bubble
const about = document.querySelector("#about");
new ResizeObserver(() => {
  if (about.offsetWidth > 95) {
	console.log("large");
	about.textContent = "Hi, I'm Daniel Lufcy. I'm a fullstack JavaScript developer in Indianapolis. I have been a JavaScript developer for two years. I love to build things that people love to use. Feel free to reach out if you would be interested in using me for your next project.";
  } else if (about.offsetWidth < 100) {
    console.log("small");
    about.textContent = "About Me";
  }
}).observe(about);


