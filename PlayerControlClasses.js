#pragma strict
import System.Collections.Generic;
class player extends MonoBehaviour {
	var deck : Array;
	var Promotions : Array;
	var name : String;
	var status : playerState;	
	var playerId : int;
	var cardsInHand : Array;
} 