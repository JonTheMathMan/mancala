function setup()
{
	//houses
		//rows
	for(var u=0;u<2;u++)
		{
				//columns
			for(var i=1;i<7;i++)
				{
					createPocket({source:"./graphics/HousePocketStone4.png",left:i*50+5,top:u*50+(u+1)*20,gems:4,pocketType:"house"});
				}
		}

	//stores
	createPocket({source:"./graphics/StorePocket.png",left:5,top:30,gems:0});
	createPocket({source:"./graphics/StorePocket.png",left:355,top:30,gems:0});
}
setup();