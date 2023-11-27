const squaresList = Array.from(document.getElementsByClassName("square"));

for(let square of squaresList) {
	square.addEventListener("mouseover", changeOthersColor);
	square.addEventListener("mouseleave", revertColors);
}
function changeOthersColor(event) {
	// event.target.style.backgroundColor = "blue";
	squaresList.forEach((element)=>{
		if(element != event.target) {
			element.classList.toggle("coffee");
		}
	})
}
function revertColors (event) {
	// event.target.style.backgroundColor = "lavender"
	squaresList.forEach((element)=> {
		if(element.classList.contains("coffee")) {
			element.classList.remove("coffee");
		}
	})
}