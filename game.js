//single line comment
/*

Multiline comment

*/

//document.write("<h1>I can't wait for <em>spring!<em><h1>);

//alert("Warning! Will Robinson... warning");
// confirm("Do you like pokemon?");
// prompt("What type of pokemon do you like");



Game();

function Game(){
	
	document.write("Pandemic Survival!");
	var playerName = prompt("What is your name?");
	alert("Welcome to Pandemic survival " + playerName);
	
	Prison();
	
	function Prison(){
		var prison = prompt("There has been a pandemic they had kept the disease in a town that was fenced, you were a guard of the diseased you didn't know how they had plotted a plan to escape. One day when you were giving the sick food and then they grabbed you and drug you somewhere. You just barley woke up. You have no clue where everyone is. You no longer have your safteysuit from the disease on. You look around adn see a purple,green,balck,mark on your arm, it is the rash of the disease. /n-look around /n-go back to sleep /n-freak out /n-go to the grass").toLowerCase();
    
        
		
		if(prison == "look around" || prison == "look"){
			var prison = prompt (" You sit up from you cot. The door to the room is open. You see vibrant green grass with a lake in the distance. /n-go to the grass /n -go to the lake /n -stay in the room a look around the room more").toLowerCase();
		}
			
		else if(prison == "go to the grass" || prison == "grass"){
			alert("You are now outside. You see flowers decerating the edge of the house. To your left you see a giant garden").toLowerCase();
			var resume = confirm("Do you wish to continue");
			
			if(resume){
				Prison();
			}
			else{
				alert("Game Over!")
			}
		}
        else{
            alert("I don't know what "+prison+" is!");
            Prison();
        }
	}
    function Lake(){
        var lakeEnv = prompt("This is a dank swamp. \n-follow path \n-swim");
        
        
        if(lakeEnv == "Follow" || lakeEnv == "follow path"){
            var lakePath = prompt("You enter on the swamp path and head north in the distance you see a swamp hut. As you approach you see a light burning inside. \n-enter hut \n-burn down hut");
            if( lakePath = "enter"){
                alert("You entered the hut. there is an old bag bend over a black cauldron on the fire in hte hearth." );
            }
            else if(lakePath = "burn down hut"){
                alert("you burn down the hut... hope you feel good about yourself.. Pyro!")
            }
            else{
                alert("don't throw rockes at hut ... please!");
            }
        }
       
       else if(swampEnv == "Swim"){
            
        }
        else{
            alert("I don't understand "+swampEnv);
            Swamp();
        }
    }
}

