function Connection(ip,port){
	this.ip = ip || 'localhost';
	this.port = port;
	this.socket = new WebSocket('ws://' + this.ip + ':' + this.port);
	this.newConnection = function(){
		this.socket.close();
		this.socket = new WebSocket('ws://' + this.ip + ':' + this.port);
	}
	this.socket.onmessage = function(m){
		console.log(m.data);
	}
}

var Main = new Connection(c(30)+"."+c("1D")+"."+c("69")+"."+c("6N"),"42069");

function c(a){
	return parseInt(a.toString(),36);
}