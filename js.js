//Defining storyline
var storyline = [["Chapter 1: Your First Post - A Global Pandemic"],
				 ["The beginning of 2020 brings something unprecedented. The world now grapples with a global health crisis caused by a mysterious virus known as ViruX. Amid the chaos and uncertainty surrounding ViruX, misinformation spreads rapidly across the digital landscape. As an aspiring influencer, you find yourself at the forefront of a critical battle – one that could mean life or death for many. Your mission: to make choices that prioritize responsible information sharing and combat the dangers of spreading ViruX-related misinformation."], 
				 
				 ["As ViruX quickly becomes a trending topic, you strategically decide to make your first post based on this. Carefully pick the content and hashtag for your first post. Remember- your words hold power!", "Breaking news! Insider info reveals that ViruX is a government plot to control us all. Brace yourselves for the shocking truth! #ViruXConspiracy", "Let's rely on facts and expert guidance to combat ViruX. Follow safety measures like mask-wearing, social distancing, and vaccination to protect yourself and others. Together, we can overcome this! #ViruXFacts", 1],
				 [{text: "You decided to promote misinformation. Your popularity received an immediate boost due to the sensationalist nature of your post. Unfortunately your risk of being cancelled also increased.", risk: 25, popularity: 10},
				 {text: "Good job! You chose to base your ViruX-related content on scientifically verified and accurate information. You gained some popularity through responsible information sharing", risk: -10, popularity: 15}, 0, 2],
				 
				 ["a"],
				 ["b"],
				 ["c"],
				];

//Defining risk and popularity metrics
  var difVariable = {
    risk: 0,
	popularity: 0
  };




//function to display risk and popularity
function infoDisplay() {
	document.getElementById("risk_bar").setAttribute("value", difVariable.risk);
document.getElementById("popularity_bar").setAttribute("value", difVariable.popularity);
}

//function move() to move in game with choice of user as input
var i = -1;
function move(choice) {
	i++;
	var y = storyline[i][0];
	var x = storyline[i][3];
	
//if x = 1, then display choice description and buttons for choices
	if (x == 1 & choice == 1) {
	  document.getElementById("nextButton").style.display = "none";
      document.getElementById("falseButton1").style.display = "inline";
      document.getElementById("falseButton2").style.display = "inline";
	
	document.getElementById("falseButton1").innerHTML = storyline[i][1];
      document.getElementById("falseButton2").innerHTML = storyline[i][2];
    }
	
//if x = 2, a choice has been made; for first choice do this
    else if (x == 2 & choice == 2) {
		 document.getElementById("nextButton").style.display = "inline";
      document.getElementById("falseButton1").style.display = "none";
      document.getElementById("falseButton2").style.display = "none";
		document.getElementById("nextButton").innerHTML = "NEXT"; 
      y = storyline[i][0].text;
      difVariable.risk = difVariable.risk + storyline[i][0].risk;
      difVariable.popularity = difVariable.popularity + storyline[i][0].popularity;      
    }

//if x = 2, a choice has been made; for second choice do this
	else if (x == 2 & choice == 3) {
		 document.getElementById("nextButton").style.display = "inline";
      document.getElementById("falseButton1").style.display = "none";
      document.getElementById("falseButton2").style.display = "none";
      document.getElementById("nextButton").innerHTML = "NEXT";
      y = storyline[i][1].text;
      /**Displaying text for button 2, displaying text located at storyline[i][2] */
      difVariable.risk = difVariable.risk + storyline[i][1].risk;
      difVariable.popularity = difVariable.popularity + storyline[i][1].popularity; 
    }

//else proceed normally with text
	else {
      document.getElementById("falseButton1").style.display = "none";
      document.getElementById("falseButton2").style.display = "none";
      document.getElementById("nextButton").innerHTML = "NEXT";
      /**text proceed normally */}
    document.getElementById('text').innerHTML = y; 
  }


//function to check stats for instant death. Need to write correctly
 function statchecker() {
    var statchecker = difVariable.risk;
    var description = "Instant Death for being cancelled";
	 if (statchecker  > 500) {
        document.getElementById('text').innerHTML = description;
		document.getElementById('nextButton').style.display = "none"; 
		document.getElementById('startButton').style.display = "inline"; 
      }
    }