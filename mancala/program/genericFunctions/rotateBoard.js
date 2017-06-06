function rotateBoard()
{
	var board = document.getElementById("board");
	rotateElementAnother180deg(board);
	for(var i=0;i<board.children.length;i++)
		{
			rotateElementAnother180deg(board.children[i]);
		}
}

function rotateElementAnother180deg(element)
{
	
	var rotationStr = element.style.transform;
	rotationStr==="" ? rotationStr="0":"";
	var expression = /\d+/g;
	var numberOnlyStr = rotationStr.match(expression).join('');
	var newRotation = Number(numberOnlyStr)+180;
	element.style.transform = "rotate("+newRotation+"deg)";
}