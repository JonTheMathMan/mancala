function addElementWithPropsToBoard(passedProperties={})
{
	var defaultProperties = Object.assign({elementType:"textarea",value:"This is a default Element.",left:0,top:0},passedProperties);
	var newElement = Object.assign(document.createElement(defaultProperties.elementType),defaultProperties);
	newElement.style.position = "absolute";
	newElement.style.left = newElement.left;
	newElement.style.top = newElement.top;
	document.getElementById("board").appendChild(newElement);
	return newElement;
}