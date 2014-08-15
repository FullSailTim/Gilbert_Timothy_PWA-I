/*
    Name: Timothy Gilbert
    Assignment: Goal 3 Debug
    Date: 8/14/14

 */

// Create privatized scope using a self-executing function
(function(){ // Start Function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), // Set resultsDIV to the Element ID
		searchInput = document.forms[0].search, // Set searchInput to the document form
		currentSearch = '' // set currentSearch blank
	;
	
	// Validates search query
	var validate = function(query){ // Set the validate function result
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){ //While the query has a space in it
			query = query.substring(1, query.length); // check the query length and remove the white space
		};
		while(query.charAt(query.length-1) === ""){ // While the query does not have a space in it
			query = query.substring(0, query.length-1); // remove the last character
		};
		
		// Check search length, must have 3 characters
		if(query.length < 3){ // check the query string to have atleast 3 characters
			alert("Your search query is too small, try again.");
			// (Alert is broke), Alert the error message
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); // Focus on the element defined
			return; // Return true
		};
		
		search(query); // run the search function
	};
	
	// Finds search matches
	var search = function(query) { // define the search function
		
		// split the user's search query string into an array
		var queryArray = query.split(" "); // set queryArray to the query.join
		
		// array to store matched results from database.js
		var results = []; // set a blank array

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ // for each of the length of the db results
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); // set dbTitleEnd, and add a pipe to each title
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd); // set dbItem, lowercase the titles except the first letter
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ // for loop for the array of input
				var qitem = queryArray[ii].toLowerCase(); // convert search to lowercase
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); // set compare to the dbitem of the search
				if(compare !== -1){ // check to make sure the compare worked
					results.push(db[i]); // return the results
				};
			};
		};
		
		results.sort(); // sort results
		
		// Check that matches were found, and run output functions
		if(results.length = 0){ // if results are not found
			noMatch(); // dont return any values
		}else{ // if results are found
			showMatches(results); // return results
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ // declare noMatch function
		var html = ''+ // set html styling
			'<p>No Results found.</p>'+ // output HTML
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'// show suggestion
	;
		resultsDIV.innerHTML = html; // push out html to the resultsDIV
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ // showMatches function
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', // More html styling
			title, // define blank variable
			url // another blank variable
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ // for loop for array for all the results
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); // put a pipe at the end of the title
			title = results[i].subString(0, titleEnd); // sets title to whatever is before the pipe
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); // set url variable from array
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; // html video link
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ // once the form is submitted, do this function
		var query = searchInput.value; // set query to searchInput (the value)
		validate(query); // validate the query

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false; // return false
	};

})();