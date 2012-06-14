#pragma strict
class AllySlotController extends SlotController{


function Awake () {
	slot1= GameObject.Find("allyslot1");
	slot2= GameObject.Find("allyslot2");
	slot3= GameObject.Find("allyslot3");
	slot4= GameObject.Find("allyslot4");
	slot5= GameObject.Find("allyslot5");

}
function Start(){
	super.Start();

}
function Update () {

}

function instertCardIntoAllySlot( slotNumCardName : String){
	
	
}

}