function createPocket(passedInProperties={})
{
	//make the pocket img
	var pocketProperties = {
		elementType:"img",
		src:passedInProperties.source,
		left:passedInProperties.left,
		top:passedInProperties.top,
		gemsHeld:passedInProperties.gems,
		pocketType:passedInProperties.pocketType
	};
	var newPocket = addElementWithPropsToBoard(pocketProperties);
	newPocket.addEventListener("click",function(e){gemMove(e.target);});
	
	//make the gems textarea
	var gemsDisplayProperties = {
		left:passedInProperties.left,
		top:passedInProperties.top-20,
		value:passedInProperties.gems
	};
	var gemsDisplay = addElementWithPropsToBoard(gemsDisplayProperties);
	gemsDisplay.style.width = 50;
	gemsDisplay.style.height = 20;
	gemsDisplay.style.resize = "none";
	gemsDisplay.disabled = true;
	newPocket.gemsView = gemsDisplay;
	
	return newPocket;
}