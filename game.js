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
    crackers:0,
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
    while(!confirm("Are you sure you want "+playerName+" as a name")){
        playerName = prompt("What name do you want?");
    }
	alert("Welcome to Pandemic Survival " + playerName);
    
    
    
  
	
	Prison();

	
function Prison(){
		var prison = prompt("There has been a pandemic. The infected people were kept in a town that was fenced. You were a guard of the diseased. You didn't know that they had planned to escape. One day when you were giving the sick food, they grabbed you and dragged you somewhere. You just barely woke up. You have no clue where everyone is. You no longer have your saftey suit on that protected you from the disease. You look around and see a purple, green and black mark on your arm. It is the rash of the disease. \n-look around \n-go to the grass").toLowerCase();
    
    
		
		if(prison == "look around" || prison == "look"){
			 alert(" You sit up from your cot. The door to the room is open. You see vibrant green grass with a lake in the distance."); 
                  
        }
		
			
		else if(prison == "go to the grass" || prison == "grass"){
			alert("You are now outside. You see flowers decorating the edge of the house. To your left you see a giant garden");
            
            var resume = confirm("do you wish to continue");
            if(resume){
                Prison();
            
            }
            else{
                alert("Game Over");
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
        var lakeEnv = prompt("This is a huge lake.  \n- go swimming");
        
        
        if(lakeEnv == "go swimming" || lakeEnv == "swim"){
            var lake = prompt("You swam across the lake. In the distance you see a forest that is close enough to walk to \n- forest \n -cut down trees");
            if(lake == "go to the forest" || lake == "forest"){
                alert("You entered the forest. The  trees are giant. You traveled all day around trees.  You are getting cold and you need to get some rest. As you wake up you feel hungry and see a vending machine." );
            }
            else if( lake == "cut down trees" || lake == "cut"){
                alert("You have cut down trees with an axe that you had. You found strong ropes on the gorund. You made a good shelter and you are safe for the night. In the morning you walked further and found an abanded town with food from a vending machine and you are hungry so you get something.!");
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
            var crackers = 3;
            var chips = 2;
            alert("The vending machine is half way full");
            
                 let store = prompt("What would you like? \n-chips  \n-leave vending machine");
                
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
                                
                    else if(store == "crackers" || store == cracker){
                        var crackersBuy = prompt("How many crackers would you like to buy?");
                        
                        while(!confirm("Do you really want to buy"+crackersBuy+"crackers for"+crackers+"for each bag?")){
                            crackersBuy = prompt("how many crackers do you want to buy");
                        }
                        for(i = 1; i <= crackersBuy; i++){
                            inventory.crackers ++;
                            console.log("You have"+inventroy.crackers+"crackers");
                        }
                        alert("You have purchased"+crackersBuy+"crackers.");
                        Store();
                    }
                                
                          
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
      var insideCastle = prompt(" You continue along in the forest- north -south -east -west").toLowerCase();
       
    
     switch(insideCastle){
         case "north" || "go north":
             alert("You continue North and run into a brown bear.");
             
             Castle();
        break;
        case "south":
            alert("You travel south and run into a moose. Then see a building and learn that the doctor is there.");
             
        break;
        case "east":
            alert("You travel east and and find a river");
            Castle();
        break;
        case "west":
            alert("you go west and come across two run away infected people.");
            Castle();
        break;
        default:
            alert("I don't know what "+insideCastle+" is!");
            Castle();
        break;
     }
             
 Doctor();
 function Doctor(){
     alert("You have traveled a long distance. You are now going to meet the doctor, but because of his captor, he may not give you the cure. It all depends on his mood.")
     
     var mood = [" a good mood you get the cure"," a bad mood he got hurt recently and decides to not give the cure"];
     alert("he is in"+mood[Math.floor(Math.random()*2)]);
     
     alert("congrats you finished the game!");
     
     QUIT
 }
     
  
}



