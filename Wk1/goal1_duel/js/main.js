/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!"); // Display FIGHT!!! into the console window

    //player name
    var playerOneName = "Spiderman"; // Set Player One Name to Superman
    var playerTwoName = "Batman"; // Set Player Two Name to Batman

    //player damage
    var player1Damage = 20; // Set Player 1 Damage to 20
    var player2Damage = 20; // Set Player 2 Damage to 20

    //player health
    var playerOneHealth = 100; // Set Player 1 Health to 100
    var playerTwoHealth = 100; // Set Player 2 Health to 100

    //initiate round
    var round=0; // Set the round to 0

    function fight(){ // Declare a function called fight
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); // Alert the start of the round, player names and health
        for (var i = 0; i < 10; i++) // for each loop (i) to auto increment as long as its less than 10
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; // Set minimum damage for player one
            var minDamage2 = player2Damage * .5; // Set Minimum damage for player two
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); // Returns the largest integer for Player 1
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); // Returns the largest integer for Player 2

            //inflict damage
            playerOneHealth-=f1; // Subtract the damage from the life of Player One
            playerTwoHealth-=f2; // Subtract the damage from the life of Player Two

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); // Return the name and current health

            //check for victor
            var result = winnerCheck(); // run winnerCheck function to check if winner.
            console.log(result); // Show the result in the console window
            if (result==="no winner")  // Check if there is no winner
            {
                round++; // Auto increment the round
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); // Alert that the round is over and current health for players

            } else{ // If No winner do this.
                alert(result); // Alert the result
                break; // Stop the loop
            };

          };
    };

    function winnerCheck(){ // Declare winnerCheck function
        var result="no winner"; // Set the result to no winner by default
        if (playerOneHealth<1 && playerTwoHealth<1) // Check if both players health is below 1
        {
            result = "You Both Die"; // Set result to both die
        } else if(playerOneHealth<1){ // Check If Player One Health is less than 1
            result =playerTwoName+" WINS!!!" // Set Player Two as the winner
        } else if (playerTwoHealth<1) // Check if Player Two Health
        {
            result = playerOneName+" WINS!!!" // Set Player One as the Winner
        };
       return result; // Return to the result to the original loop
    };

    /*******  The program gets started below *******/
    fight(); // Start the fight

})();