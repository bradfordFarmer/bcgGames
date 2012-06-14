#pragma strict
class GameMananger extends BaseNetworkController {

	var ally : player;
	var enemy : player;
	function Start () {
		super.Start();
		
	}	
	
	function Update() {
		
	}
	
	function gameLookup (){


	}
	
	function setMyPlayerID(playerID : String){
		ally.playerId=int.Parse(playerID);
	} 
	
	
	function getUnitFromData(data : String[]) { 
		var myUnit : unit;		
		unit.name = data[1];
		unit.id =parseInt(data[2]);
		unit.cost =parseInt(data[3]); 
		unit.text=data[4];
		return myUnit;
	}
	function getCardDataForID (cardID : String){
		var form = new WWWForm();
	    form.AddField("action","CardInfoForID");
	    form.AddField("secretkey", secretKey );
	    form.AddField("cardID",cardID); 
		var w = WWW(testData_url,form);
	    yield w;
		var received_data : String[] = Regex.Split(w.text,"</next>");
		switch (received_data[0]){ 
		 case 'unit': 
		 	var myUnit : unit = getUnitFromData (received_data); 
		 	return myUnit;
		 break;
		 case 'event': 
		 break;
		 case 'plan' : 
		 
		 break; 
		default: 
		break; 
		}	
	}
	 
	 // we only load the string of card for the deck  plus we get the players starting hand. 
	function getPlayerActiveDeck(pLayerID : int ,side : String){
		var startingHard: int=0;
	 	var form = new WWWForm();
	    form.AddField("action","playerActiveDeck");
	    form.AddField("secretkey", secretKey );
	    form.AddField("playerID",pLayerID); 
	    var w = WWW(testData_url,form);
	    yield w;
		var received_data : String[] = Regex.Split(w.text,"</next>");
		for(var data : String in received_data) {
				ally.deck.push(getCardDataForID(data));
		}
	}
	function findOpponent () { 
		var form = new WWWForm();
	    form.AddField("action","allyData");
	} 
}