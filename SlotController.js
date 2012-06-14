#pragma strict
class SlotController extends BaseNetworkController {
var slot1 : GameObject;
var slot2 : GameObject;
var slot3 : GameObject;
var slot4 : GameObject;
var slot5 : GameObject;

var slot1Texture : Texture2D;
var slot2Texture : Texture2D;
var slot3Texture : Texture2D;
var slot4Texture : Texture2D;
var slot5Texture : Texture2D;


function Start () {
  super.Start();
}

function Update () {

}
function cardLookUp (){

}


function slotStringToNum (name :String ){
var slotNum : int;
	switch(name){
	
	case 'one':	
		slotNum =1;
	break;
	
	case 'two':	
		slotNum =2;
	break;
	
	case 'three':	
		slotNum =3;
	break;
	
	case 'four':	
		slotNum =4;
	break;
	
	case 'five':
		slotNum=5;
	break;
	default:
		slotNum=0;
	break;
	}
	return slotNum;
}
// this does a database query card 
function lookUpCardNamed(cardNamed : String, userName : String) { 
    var form = new WWWForm();
    // Assuming the perl script manages high scores for different games
    form.AddField( "card", cardNamed );
    form.AddField( "userName", userName );
    form.AddField( "action", 'fetchCard' );
	yield WWW;
	
}

}