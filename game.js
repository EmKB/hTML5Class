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
    chips:0,
    sword:0,
    map:0
}
var enemy ={
    coins:100,
    health:80

}




Game();

function Game(){
    var wizardNames = ["Bathazar", "Mordac", "Grendor","Oroco"];
    alert("lengend of"+wizardNames[Math.floor(Math.random()* 4)]+"!");
	
	document.write("Pandemic Survival!");
	var playerName = prompt("What is your name?");
	alert("Welcome to Pandemic survival " + playerName);
	
	Prison();

	
function Prison(){
		var prison = prompt("There has been a pandemic they had kept the disease in a town that was fenced, you were a guard of the diseased you didn't know how they had plotted a plan to escape. One day when you were giving the sick food and then they grabbed you and drug you somewhere. You just barley woke up. You have no clue where everyone is. You no longer have your safteysuit from the disease on. You look around adn see a purple,green,balck,mark on your arm, it is the rash of the disease. /n-look around /n-go to the grass").toLowerCase();
    
    
		
		if(prison == "look around" || prison == "look"){
			 var exitprison = prompt(" You sit up from you cot. The door to the room is open. You see vibrant green grass with a lake in the distance.  /n -go to the lake /n -stay in the room a look around the room more"); 
                  
        }
		
			
		else if(prison == "go to the grass" || prison == "grass"){
			alert("You are now outside. You see flowers decerating the edge of the house. To your left you see a giant garden");
            
            var resume = confirm("do you wish to continue");
            if(resume){
                Prison();
            
            }
            else{
                   alert("game over");
            }
            
        }
        
        else if(prison == "castle"){
            Castle();
        }
        else{
            alert("I don't konw what "+prison+" is");
            Prison();
        }
                  
}

 Lake()
 function Lake(){
        var lakeEnv = prompt("This is a huge lake.  \n- go swiming");
        
        
        if(lakeEnv == "go swiming" || lakeEnv == "swim"){
            var lake = prompt("You have swam across the lake. In the distance you see a forsest that is close enough to walk to /n- forest");
            if(lake == "go to the forest" || lake == "forest"){
                var forest = prompt("You entered the forest. The  trees are giant. You traveled all day around trees you are getting cold and you need get some rest /n- cut down trees" );
            }
            else if( lake == "cut down trees" || lake == "cut"){
                alert("You have cut down trees with a ace that you had. you found strong ropes on the gorund. You made a good shelter and safe for the night In the morning you walked futher and found a abanded town with food from a vending machine and you are hungry so you get something.!");
            }
            
            //else{
                //alert("You spent the night in the trees!");
            //}
        }
        else if(lakeEnv == "Swim"){
            
        }
        else{
            alert("I don't understand "+lakeEnv);
            Lake();
        }
      
        }
 }
Store()
function Store(){
            alert("The vending machine is half way full");
            
                var store = prompt("What would youlike to buy? \n-chips \n-peanuts \n-granola bar \n-leave vending machine");
                    if(store == "chips" || store == "chips" && inventory.coins >= 100){
                        var chipsBuy = confirm("Are you sure you want to buy chips");
                            if(chipsBuy){
                                //Adds sword plus one
                                inventory.chips ++;
                                // displays strawberries owned
                                alert("You own "+inventory.chips+" bag of chips.")
                                //takes money out of account for strawberries
                                inventory.coins = inventory.coins -5;
                                //displays coins left in account
                                alert("You have "+inventory.coins+" coins remaining");
                          
                      }
                                
                            }
                        else{
                            alert("have a good day, come back again!");
                            Castle();
                        }
                    }
        
			var resume = confirm("Do you wish to continue");
			
			if(resume){
				Store();
			}
			else{
				alert("Game Over!");
			}
		
            
            
	

  
  Castle();
  function Castle(){
      var insideCastle = prompt(" - upstairs -downstairs -courtyard -balcony -look").toLowerCase();
       
    
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



