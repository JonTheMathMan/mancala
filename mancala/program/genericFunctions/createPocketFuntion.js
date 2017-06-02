function createPocket(pocketProperties={source:"",left:0,top:0,gems:"hello"})
{
	var board = document.getElementById("board");
	var newPocket = document.createElement("img");
	newPocket.src = pocketProperties.source;
	newPocket.style.position = "absolute";
	newPocket.style.left = pocketProperties.left;
	newPocket.style.top = pocketProperties.top;
	newPocket.gemsHeld = pocketProperties.gems;
	//newPocket.addEventListener("click",function(e){console.log(e.target.gemsHeld)});
	board.appendChild(newPocket);
	
	var gemsDisplay = document.createElement("textarea");
	gemsDisplay.style.position = "absolute";
	gemsDisplay.style.width = 50;
	gemsDisplay.style.height = 20;
	gemsDisplay.style.top = pocketProperties.top-20;
	gemsDisplay.style.left = pocketProperties.left;
	gemsDisplay.style.resize = "none";
	gemsDisplay.disabled = true;
	gemsDisplay.value = pocketProperties.gems;
	board.appendChild(gemsDisplay);
	newPocket.gemsView = gemsDisplay;
	return newPocket;
}