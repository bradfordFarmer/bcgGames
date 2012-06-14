#pragma strict
import System.Collections.Generic;

class ability  {
	var owner : int;
	var name : String;
	var type : abilityTypes;
	var effect : abilityEffects;
	var abilityside : side;
	var abilityAoe : areaOfEffect;
}

class card extends MonoBehaviour {
	public var name : String;
	public var id : int;
	public var cost : int;
	public var text : String;
	public var thumbImgLocation : String;
	public var fullImgLocation : String;
	public var abilities : ability[];
	public var type : String;
    public var cardRarity : rarity;
    public var cardSet :  sets;
}

class unit extends card { 
	var str : int;
	var sta:  int;
	var def: int;
	var faction: String;
	var profession: String;
	var promocost : String;
	var promoreq : String;
	var damageTake : int ;
	var promoteToCardID : int;
} 


class event extends card{ 
	var eventUsers : Array;
} 

class plan extends card{ 
	var planRequiriements : Array;
	var active: int;
} 

class hero extends unit{
	var deployRequirements : Array;
} 