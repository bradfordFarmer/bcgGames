class DeckController extends BaseNetworkController{

function getPlayerDecks(pLayerID : int){
	 	var form = new WWWForm();
	    form.AddField("action","allyData");
	    form.AddField("secretkey", secretKey );
	    form.AddField("playerID",pLayerID); 
	    var w = WWW(testData_url,form);
	    yield w;
		var received_data : String[] = Regex.Split(w.text,"</next>");
}
function findOpponent () { 
		var form = new WWWForm();
	    form.AddField("action","allyData");

} 
// Use this for initialization
function Start () {
	
}

// Update is called once per frame
function Update () {
	
}


}