/**
 Name: Timothy Gilbert
 Assignment: Goal 2 - Duel 2
 Date: 08/14/14
*/

// self-executing function
(function(){

    console.log("FIGHT!!!"); // Display FIGHT!!! into the console window

    //player name
    var fighter1 = ["Spiderman", 20, 100]; // Set Fighter 1 Array to be Spiderman, with 20 max damage and 100 life
    var fighter2 = ["Batman", 20, 100]; // Set Fighter 2 Array to be Batman, with 20 max damage and 100 life

    //initiate round
    var round=0; // Set the round to 0

    function fight(){ // Declare a function called fight
        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]); // Alert the start of the round, player names and health
        for (var i = 0; i < 10; i++) // for each loop (i) to auto increment as long as its less than 10
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1[1] * .5; // Set minimum damage for player one
            var minDamage2 = fighter2[1] * .5; // Set Minimum damage for player two
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1); // Returns the largest integer for Player 1
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2); // Returns the largest integer for Player 2

            //inflict damage
            fighter1[2]-=f1; // Subtract the damage from the life of Player One
            fighter2[2]-=f2; // Subtract the damage from the life of Player Two

            console.log(fighter1[0]+": "+fighter1[2] + " " + fighter2[0]+":"+fighter2[2]); // Return the name and current health

            //check for victor
            var result = winnerCheck(); // run winnerCheck function to check if winner.
            console.log(result); // Show the result in the console window
            if (result==="no winner")  // Check if there is no winner
            {
                round++; // Auto increment the round
                alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]); // Alert that the round is over and current health for players

            } else{ // If No winner do this.
                alert(result); // Alert the result
                break; // Stop the loop
            };

          };
    };

    function winnerCheck(){ // Declare winnerCheck function
        var result="no winner"; // Set the result to no winner by default
        if (fighter1[2]<1 && fighter2[2]<1) // Check if both players health is below 1
        {
            result = "You Both Die"; // Set result to both die
        } else if(fighter1[2]<1){ // Check If Player One Health is less than 1
            result =fighter2[0]+" WINS!!!" // Set Player Two as the winner
        } else if (fighter2[2]<1) // Check if Player Two Health
        {
            result = fighter1[0]+" WINS!!!" // Set Player One as the Winner
        };
       return result; // Return to the result to the original loop
    };

    /*******  The program gets started below *******/
    fight(); // Start the fight

})();