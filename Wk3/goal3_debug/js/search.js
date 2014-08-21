/* 
 * Name: Timothy Gilbert
 * Date: 08/21/2014
 * Debugging Goal  - Finished
 */

// Create privatized scope using a self-executing function
(function(){ // being function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), // set resulls DIV to element id
		searchInput = document.forms[0].search, // Set search input to the document form
		currentSearch = '' // set current search blank
	;
	
	// Validates search query
	var validate = function (query){ // set the validate function result
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){ // while the query has a space in it
			query = query.substring(1, query.length); // check the query length and remove white space
		};
		while(query.charAt(query.length-1) === ""){ // while the query does not have a space in it
			query = query.substring(0, query.length-1); 
		};
		
		// Check search length, must have 3 characters
		if(query.length < 3){ // query length is greater than three
			alert("Your search query is too small, try again."); // Alert
			searchInput.focus(); // focus on defined element
			return; //  return true
		};
		
		search(query); // search query (run fucntion)
	};
	
	// Finds search matches
	var search = function(query) { // define variable search as function query
		
		// split the user's search query string into an array
		var queryArray = query.split(" "); // set query array to query join 
		
		// array to store matched results from database.js
		var results = []; // set blank array

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ // for each lenght of the db results
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); // set dbTitleEnd and add a pipeline to each title
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd); // set variable dbitem set title to lowercase except first letter
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ // compare database and search array
				var qitem = queryArray[ii].toLowerCase(); // set variable qitem to query array item ii, all lower case (convert)
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); // set variable compare to database item
				if(compare !== -1){ // check if compare works
					results.push(db[i]); // return results 
				};
			};
		};
		
		results.sort(); // sort results
		
		// Check that matches were found, and run output functions
		if(results.length === 0){ // if results are not found 
			noMatch(); // don't return values
		}else{
			showMatches(results); // return results 
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ // set variable noMatch to fucntion 
		var html = ''+ // set html styling 
			'<p>No Results found.</p>'+ ///output html 
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' // show suggestion
	;
		resultsDIV.innerHTML = html; // push out html results to div 
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ //  showmatches function 
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',  // set variable html to results
			title, // title variable
			url // url variable
		; 
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ // for loop set variable i to zero, j to result length, increment
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); // put pipe at end of title 
			title = results[i].substring(0, titleEnd); // set title to whatever is before the pipe
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); // set url variable from array 
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; // html video length
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT. 
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ // once form is submitted do this funtion
		var query = searchInput.value; // set variable query to search input value 
		validate(query); // validate 

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false; // return false 
	};

})();