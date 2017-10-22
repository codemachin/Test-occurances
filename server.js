var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var request = require('request')
// module to request from remote urls


app.use('/',express.static(__dirname + '/public'));


// route to get top n occurances
app.get('/occur/:n',function(req,res){

	request.get('http://terriblytinytales.com/test.txt', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        var csv = body.toString();

	        dothemath(csv,res,req.params.n);
	    }
	});

});

var dothemath = function(text,res,n){


	var wordsRegex =  /([\w'-]+)/g;
	// string match regex

	array = text.match(wordsRegex);
	var hits = [];
	var helper = [];

	
	for(var x in array){
		var co=0;
		// check if the word has already been processed
		for(var y in helper){
			if(helper[y]==array[x]){
				co++;
			}
		}
		// if word not processed then calculate the occurance for that word
		if(co==0){
			var myName = array[x];
			var c=0;
			for (var i = 0; i < array.length; i++) {
				
			  if (array[i] === myName || array[i] === myName + "." || array[i] === myName + "!") {
			    c++
			  }
			}
			hits.push({word:array[x],count:c})
			helper.push(array[x])
			
		}
		
	}
	// sorting the array
	hits.sort(function(a, b) {
	    return parseFloat(b.count) - parseFloat(a.count);
	});

	// getting the top n numbers
	var newHits = hits.slice(0,n)
	res.send(newHits)


}


/////////////////////////////// error handling illegal routes /////////////////////////////////////

app.use(function(req, res) {
   
  res.status(404).send("You hit an incorrect path. Check again");
    
}); 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




