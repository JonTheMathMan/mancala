function gemMove(eventTarget)
{
	var gemsCupDisplay = document.getElementById("gemsCupView");
	if(gemsCup.gemsHeld===0 && eventTarget.pocketType==="house")
		{
			gemsCup.gemsHeld = eventTarget.gemsHeld;
			gemsCupDisplay.value = "holding:"+gemsCup.gemsHeld;
			eventTarget.gemsHeld = 0;
			eventTarget.gemsView.value = eventTarget.gemsHeld;
			eventTarget.src = houseGemSources[eventTarget.gemsHeld];
		}else if(eventTarget.pocketType==="house"){
			gemsCup.gemsHeld -=1;
			gemsCupDisplay.value = "holding:"+gemsCup.gemsHeld;
			eventTarget.gemsHeld +=1;
			eventTarget.gemsView.value = eventTarget.gemsHeld;
			if(eventTarget.gemsHeld<11)
				{
					eventTarget.src = houseGemSources[eventTarget.gemsHeld];
				}else{
					eventTarget.src = houseGemSources[10];
				}
		}else{
			eventTarget.gemsHeld += gemsCup.gemsHeld;
			eventTarget.gemsView.value = eventTarget.gemsHeld;
			gemsCup.gemsHeld = 0;
			gemsCupDisplay.value = "holding:"+gemsCup.gemsHeld;
			
			if(eventTarget.gemsHeld==0)
				{
					eventTarget.src = "./graphics/StorePocket.png";
				}else if(eventTarget.gemsHeld<6){
					eventTarget.src = "./graphics/StorePocketLessFull.png";
				}else if(eventTarget.gemsHeld<11){
					eventTarget.src = "./graphics/StorePocketMidFull.png";
				}else if(eventTarget.gemsHeld>=11){
					eventTarget.src = "./graphics/StorePocketFull.png";
				}
		}
}