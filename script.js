const squaresList = Array.from(document.getElementsByClassName("square"));

for(let square of squaresList) {
	square.addEventListener("mouseover", changeOthersColor);
	square.addEventListener("mouseleave", revertColors);
}
function changeOthersColor(event) {
	// event.target.style.backgroundColor = "blue";
	squaresList.forEach((element)=>{
		if(element.id != event.target.id) {
			element.classList.toggle("coffee");
		}
	})
}
function revertColors (event) {
	// event.target.style.backgroundColor = "lavender"
	squaresList.forEach((element)=> {
		if(element.id != event.target.id) {
			element.classList.toggle("coffee");
		}
	})
}