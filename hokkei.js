var myIP = getIP();
// to minimize reloading/closing time

function Connection(ip,port){
	this.ip = ip || "localhost";
	this.port = port;
	this.socket = new WebSocket("ws://" + this.ip + ":" + this.port);
	this.refresh = function(){
		this.socket.send(myIP+" left for connection refresh");
		this.socket = new WebSocket("ws://" + this.ip + ":" + this.port);
	}
	this.socket.onmessage = function(m){
		//console.log(m.data);
	}
}

var Main = new Connection(c(30)+"."+c("1D")+"."+c("69")+"."+c("6N"),"42069");

function c(a){
	return parseInt(a.toString(),36);
}

function getIP(){
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://l2.io/ip",false);
    xmlhttp.send();

    return xmlhttp.responseText;
}