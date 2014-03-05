var http = require("http");
var sockjs = require("sockjs");
var websocket_multiplexer = require("websocket-multiplex");
var redis = require("redis");

var sock_server = sockjs.createServer();
var multiplexer = new websocket_multiplexer.MultiplexServer(sock_server);

// configure following parameters
var channels = []; // list all models that inherit kicker.DiffTracker i.e. ['User', 'Car']
var REDIS_URL = 'localhost';
var REDIS_PORT = 6379;
var websocket_url = '0.0.0.0';
var websocket_port = 8013;


for(var i = 0; i < channels.length; i++){
    var channel = multiplexer.registerChannel(channels[i]);
    channel.on('connection', function(conn){
        var client = redis.createClient(REDIS_PORT, REDIS_URL);

        client.on("message", function (channel, message){
            conn.write(message);
        });

        client.subscribe(conn.topic);
    });
}
var server = http.createServer();
sock_server.installHandlers(server, {prefix:'/multiplexer'});
server.listen(websocket_port, websocket_url);
