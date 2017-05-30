function createImg(leftX=0,topY=0,properties=[])
{
	var newImg = document.createElement("img");
	newImg.src = properties[0];
	newImg.style.position = "absolute";
	newImg.style.left = leftX;
	newImg.style.top = topY;
	document.getElementById("board").appendChild(newImg);
	
	return newImg;
}