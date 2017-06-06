function createPocket(passedInProperties={})
{
	//make the pocket img
	var newPocket = addElementWithPropsToBoard({elementType:"img",src:passedInProperties.source,left:passedInProperties.left,top:passedInProperties.top,gemsHeld:passedInProperties.gems,pocketType:passedInProperties.pocketType});
	newPocket.addEventListener("click",function(e){gemMove(e.target);});
	
	//make the gems textarea
	var gemsDisplay = addElementWithPropsToBoard({left:passedInProperties.left,top:passedInProperties.top-20,value:passedInProperties.gems});
	gemsDisplay.style.width = 50;
	gemsDisplay.style.height = 20;
	gemsDisplay.style.resize = "none";
	gemsDisplay.disabled = true;
	newPocket.gemsView = gemsDisplay;
	
	return newPocket;
}