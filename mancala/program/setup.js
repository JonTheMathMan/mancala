//houses
	//row one
for(var i=1;i<7;i++)
	{
		createPocket({source:"./graphics/HousePocket.png",left:i*50+5,top:20,gems:4,pocketType:"house"});
	}
	//row two
for(var u=1;u<7;u++)
	{
		createPocket({source:"./graphics/HousePocket.png",left:u*50+5,top:90,gems:4,pocketType:"house"});
	}

//stores
createPocket({source:"./graphics/StorePocket.png",left:5,top:30});
createPocket({source:"./graphics/StorePocket.png",left:355,top:30});