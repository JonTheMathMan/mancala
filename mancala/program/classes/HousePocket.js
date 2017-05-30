class HousePocket
	{
		constructor(leftX=0,topY=0)
		{
			var houseGraphic = createImg(leftX,topY,houseProperties);
			this.gemAmount=0;
			houseGraphic.creator = this;
			houseGraphic.addEventListener("click",this.moveGems);
		}
		
		moveGems(e)
		{
			
		}
	}