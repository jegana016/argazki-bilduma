XMLHttpRequestObject = new XMLHttpRequest();

function bistaratuErabiltzaileInfo(nick){
		XMLHttpRequestObject.onreadystatechange = function(){
	
		if ((XMLHttpRequestObject.readyState==4)&&(XMLHttpRequestObject.status==200 )){
			//document.getElementById("deskribapena").innerHTML=XMLHttpRequestObject.responseText;

			var string = XMLHttpRequestObject.responseText;
			var array=string.split('&');
			document.getElementById('nick').value=array[0];
			document.getElementById('password').value=array[1];
			document.getElementById('izena').value=array[2];
			document.getElementById('abizenak').value=array[3];
			document.getElementById('email').value=array[4];
			
		}
	}
	XMLHttpRequestObject.open("GET","./php/erakutsiErabiltzaileInfo.php?NICK="+nick.value+"&EGOERA=carouselakin", true);
	XMLHttpRequestObject.send();
}