function gemMove(eventTarget)
{
	var gemsCupDisplay = document.getElementById("gemsCupView");
	if(gemsCup.gemsHeld===0 && eventTarget.pocketType==="house")
		{
			gemsCup.gemsHeld = eventTarget.gemsHeld;
			gemsCupDisplay.value = gemsCup.gemsHeld;
			eventTarget.gemsHeld = 0;
			eventTarget.gemsView.value = eventTarget.gemsHeld;
		}else if(eventTarget.pocketType==="house"){
			gemsCup.gemsHeld -=1;
			gemsCupDisplay.value = gemsCup.gemsHeld;
			eventTarget.gemsHeld +=1;
			eventTarget.gemsView.value = eventTarget.gemsHeld;
		}else{
			eventTarget.gemsHeld += gemsCup.gemsHeld;
			eventTarget.gemsView.value = eventTarget.gemsHeld;
			gemsCup.gemsHeld = 0;
			gemsCupDisplay.value = gemsCup.gemsHeld;
		}
}