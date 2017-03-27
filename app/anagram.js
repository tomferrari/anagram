exports.tch = function(word)
{
	var letters = word.split(''),
		i = 0,
		l = letters.length,
		letterFreq = {};

	for (; i < l; i++)
	{
		if (letterFreq[ letters[i] ])
			letterFreq[ letters[i] ]++;
		else
			letterFreq[ letters[i] ] = 1;
	}

	return letterFreq;
	
}
