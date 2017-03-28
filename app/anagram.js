exports.anagramgenerator = function(word)
{
	var an = word;
	var anagrammes = function(an) 
	{
	    var anagrams = {};
	    an.forEach(function(str) 
	    {
	        var find = function(a, word) 
	        {
	            if (word == '') 
	                anagrams[a] = 1;
	            for (var i = 0; i < word.length; i++)
	                find(a + word[i], word.slice(0, i) + word.slice(i + 1));
	        };
	        find('', word);
	    });
	    return Object.keys(anagrams);
	}
	return anagrammes(an).toString();
}
