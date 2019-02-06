//single line comment
/*

Multiline comment

*/

//document.write("<h1>I can't wait for <em>spring!<em><h1>);

//alert("Warning! Will Robinson... warning");
// confirm("Do you like pokemon?");
// prompt("What type of pokemon do you like");

//javascript invintory object for an invintory
var inventory = {
    coins:1000,
    strawberries:0,
    sword:0,
    map:0
}
var enemy ={
    coins:100,
    health:80
}
Game();

function Game(){
	
	document.write("Pandemic Survival!");
	var playerName = prompt("What is your name?");
	alert("Welcome to Pandemic survival " + playerName);
	
	Prison();
	
	function Prison(){
		var prison = prompt("There has been a pandemic they had kept the disease in a town that was fenced, you were a guard of the diseased you didn't know how they had plotted a plan to escape. One day when you were giving the sick food and then they grabbed you and drug you somewhere. You just barley woke up. You have no clue where everyone is. You no longer have your safteysuit from the disease on. You look around adn see a purple,green,balck,mark on your arm, it is the rash of the disease. /n-look around /n-go back to sleep /n-freak out /n-go to the grass").toLowerCase();
    
        
		
		if(prison == "look around" || prison == "look"){
			 var exitprison = prompt(" You sit up from you cot. The door to the room is open. You see vibrant green grass with a lake in the distance.  /n -go to the lake /n -stay in the room a look around the room more").toLowerCase;
		}
			
		else if(prison == "go to the grass" || prison == "grass"){
			alert("You are now outside. You see flowers decerating the edge of the house. To your left you see a giant garden");
            
        store();
            
        function store(){
            alert("the Gardener sees you");
            
                var store = prompt("What would youlike to buy? \n-carrots \n-peas \n-strawberries \n-leave store");
                    if(store == "strawberries" || store == "berries" && inventory.coins >= 100){
                        var strawberriesBuy = confirm("Are you sure you want to buy stawberries");
                            if(strawberriesBuy){
                                //Adds sword plus one
                                inventory.strawberries ++;
                                // displays strawberries owned
                                alert("You own "+inventory.strawberries+" strawberry")
                                //takes money out of account for strawberries
                                inventory.coins = inventory.coins -5;
                                //displays coins left in account
                                alert("You have "+inventory.coins+" coins remaining");
                                
                            }
                        else{
                            alert("have a good day, come back again!");
                            Village();
                        }
                    }
        }
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
    Lake();
    function Lake(){
        var lake = prompt("This is a huge lake.  \n- go swiming");
        
        
        if(lake == "go swiming" || lake == "swim"){
            var lake = prompt("You enter on the swamp path and head north in the distance you see a swamp hut. As you approach you see a light burning inside. \n- enter hut \n- burn down hut");
            if(lake == "enter hut" || lake == "enter"){
                alert("You entered the hut. there is an old bag bend over a black cauldron on the fire in hte hearth." );
            }
            else if( lake = "burn down hut" || lake == "burn"){
                alert("you burn down the hut... hope you feel good about yourself.. Pyro!");
            }
            else{
                alert("don't throw rockes at hut ... please!");
            }
        }
    
       
       else if(lakeEnv == "Swim"){
            
        }
        else{
            alert("I don't understand "+lakeEnv);
            Lake();
            
  function Castle(){
      var insideCastle = prompt(" - upstairs - downstairs - courtyard - balcony - look").tolowerCase();
       
     switch(insideCastle){
         case "upstairs" || "go upstairs":
             var upstairs = prompt("You walk a long flight of stairs to the top floor of the castle.");
             
             Castle();
        break;
        case "downstairs":
            alert("You go down stairs");
             
        break;
        case "courtyard":
            alert("you go to the courtyard");
            Castle();
        break;
        case "balcony":
            alert("you go to the balcony");
            Castle();
        break;
        default:
            alert("I don't know waht "+insideCastle+" is!");
            Castle();
        break;
     }
  }
        }
    }
}

