function createImg(imgProperties={source:"",left:0,top:0})
{
	var newImg = document.createElement("img");
	newImg.src = imgProperties.source;
	newImg.style.position = "absolute";
	newImg.style.left = imgProperties.left;
	newImg.style.top = imgProperties.top;
	document.getElementById("board").appendChild(newImg);
	return newImg;
}