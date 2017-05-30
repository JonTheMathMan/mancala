class GemMovement
	{
		constructor()
		{
			this.gemsHeld=0;
		}
		
		getGems()
		{
			if(this.gemsHeld==0)
				{
					return false;
				}
			return this.gemsHeld;
		}
		
		setGems(amount=0)
		{
			this.gemsHeld=amount;
		}
	}