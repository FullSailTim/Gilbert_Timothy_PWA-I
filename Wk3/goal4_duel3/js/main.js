/**
 * Timothy Gilbert
 * Goal 4 - Duel 3
 * Date: 08/21/2014

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
 (function (){ // Start Function

    console.log("*** FIGHT ***"); // Display start message
    
    //Define DOM Pieces 
    var fighter1_txt = document.querySelector("#kabal").querySelector("p");
    var fighter2_txt = document.querySelector("#kratos").querySelector("p");
    var round_txt = document.querySelector("#round_number").querySelector("input");
    var button = document.getElementById("fight_btn"); 
    
    console.log();

    // Setup Button

     button.addEventListener("click", function() {fight()}, false);
    
    // Fighters Array 
    
    var fighters = [
    {
    	
    		name: "Kabal", 
    		damage: 20, 
    		health: 100 
    },
	{
			name: "Kratos",
			damage: 20, 
			health: 100 
	}];
	
	var round = 1; 
	
	round_txt.value = "Click Fight to Start!";
	fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health; 
	fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;


    function fight() {
    	
    	 // start fight function 
    	 
    	 fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    	 fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
    	 
    	 var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5); 
    	 var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);
    	 
    	 fighters[0].health -= f1;
    	 fighters[1].health -= f2;
    	 
    	 console.log(fighters[0].health, fighters[1].health);
    	 
    	 var result = winnerCheck(); 
    	 console.log(result); 
    	 
    	 round_txt.value = "Round #" + round + " Results";
    	 round++; 
    	 if (result == "no winner")
    	 {
    	 	fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    	 	fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
    	 }else{
    	 	fighter1_txt.innerHTML = result;
    	 	fighter2_txt.innerHTML= "";
    	 	
    	 	button.removeEventListener("Click", fight, false); 
    	 	
    	 	document.querySelector('.buttonblue').innerHTML = 'DONE!!!'; 
    	 }
    };

    function winnerCheck(){ // declare winner check function 
        var result="no winner"; // set default to no winner 
        if (fighters[0].health<1 && fighters[1].health<1) // if player one and player two have no life
        {
            result = "You Both Die"; // return result 
        } else if(fighters[0].health<1){ // if player one is less than one
            result =fighters[1].name+" WINS!!!" // return result
        } else if (fighters[1].health<1) // if player two is less than one
        {
            result = fighters[0].name+" WINS!!!" // return result
        };
       return result; // return result 
    };

    /*******  The program gets started below *******/
    fight(); // start fight 

})();