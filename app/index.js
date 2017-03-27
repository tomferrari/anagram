var http = require('http') ;
var url = require('url') ;
var anagram = require('./anagram.js') ;

var server = http.createServer(function (requete, resultat) {
    var page = url.parse(requete.url).pathname;
    var count = page.length;
    var data;
    resultat.writeHead(200,{"Content-Type": "text/plain; charset=UTF-8"});

        data = anagram.tch(page);

    resultat.end(data);
});

server.listen(8888);