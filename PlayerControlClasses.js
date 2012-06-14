#pragma strict

class player extends System.ValueType {
	var deck : Array;
	var Promotions : Array;
	var name : String;
	var status : playerState;	
	var playerId : int;
	var cardsInHand : Array;
} 