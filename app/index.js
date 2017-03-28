var http = require('http') ;
var url = require('url') ;
var anagram = require('./anagram.js') ;

var server = http.createServer(function (requete, resultat) {
    var page = url.parse(requete.url).pathname;
    var pagear = page.split('/');
    var count = pagear[1].length;
    var data;
    resultat.writeHead(200,{"Content-Type": "text/plain; charset=UTF-8"});

    	if (count < 6)
    	{
        	data = anagram.anagramgenerator(pagear);
    	}
    	else
    	{
    		data = ("Erreur, veuillez un mot de 5 caractères ou moins");
    	}

    resultat.end(data);
});

server.listen(8888);
