function createPocket(passedInProperties={})
{
	//set default properties and concatenate with the passed in properties so that any amount of properties can be passed in, and they can be passed in any order.
	var pocketProperties = {source:"",left:0,top:0,gems:0,pocketType:"unknownPocketType"};
	Object.assign(pocketProperties,passedInProperties);
	
	//a board variable for easy access
	var board = document.getElementById("board");
	
	//make the pocket img
	var newPocket = document.createElement("img");
	newPocket.src = pocketProperties.source;
	newPocket.style.position = "absolute";
	newPocket.style.left = pocketProperties.left;
	newPocket.style.top = pocketProperties.top;
	newPocket.gemsHeld = pocketProperties.gems;
	newPocket.pocketType = pocketProperties.pocketType;
	newPocket.addEventListener("click",function(e){gemMove(e.target);});
	board.appendChild(newPocket);
	
	//make the gems textarea
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