//Defining storyline
var storyline = [
  ["Chapter 1: Your First Post - A Global Pandemic"],
	
  ["The beginning of 2020 brings something unprecedented. The world now grapples with a global health crisis caused by a mysterious virus known as ViruX. Amid the chaos and uncertainty surrounding ViruX, misinformation spreads rapidly across the digital landscape. As an aspiring influencer, you find yourself at the forefront of a critical battle – one that could mean life or death for many. Your mission: to make choices that prioritize responsible information sharing and combat the dangers of spreading ViruX-related misinformation."], 

 //ViruX
 ["As ViruX quickly becomes a trending topic, you strategically decide to make your first post based on this. Carefully pick the content and hashtag for your first post. Remember- your words hold power!", "Breaking news! Insider info reveals that ViruX is a government plot to control us all. Brace yourselves for the shocking truth! #ViruXConspiracy", "Let's rely on facts and expert guidance to combat ViruX. Follow safety measures like mask-wearing, social distancing, and vaccination to protect yourself and others. Together, we can overcome this! #ViruXFacts", 1],
 [{text: "You decided to promote misinformation. Your popularity received an immediate boost due to the sensationalist nature of your post. Unfortunately your risk of being cancelled also increased.", risk: 25, popularity: 10},
  {text: "Good job! You chose to base your ViruX-related content on scientifically verified and accurate information. You gained some popularity through responsible information sharing", risk: -10, popularity: 15}, 0, 2],
				 
  ["You made your first post. You decide to continue posting.", 
   "Shocking stats show that ViruX has a 99% survival rate! Why all the fuss? #ViruXStats", 
   "While some survival rates are high, it's crucial to consider the broader context of ViruX. Let's rely on verified information and expert guidance to make informed decisions. #ViruXFacts", 1],
  [{text: " Your popularity increased due to the dramatic claims of your post. Unfortunately you also contributed to fearmongering and misinformation", risk: 5, popularity: 20},
   {text: "Good job! You prioritized fact-checking and correcting any misinformation or misconceptions in comments, fostering a sense of responsibility.", risk: -5, popularity: 10}, 0, 2],
				 
  ["Great, let's keep posting for consistent engagement.",  
   "Let's ensure our graphics are as reliable as our intentions. Share accurate infographics about ViruX that are backed by science and experts. Together, we can combat misinformation! #ViruXAwareness",
   "Miracle Cure!!! Drinking a gallon of vinegar cures ViruX infections in seconds. Share this widely and save lives! #ViruXMiracleCure", 1],
	[{text: "Good job! You chose to share only graphics and visuals that are factually accurate and based on credible sources.", risk: -5, popularity: 10}, {text: "Oh no, your misinformation had a serious consequence. One of your followers gets sick by actually following the cure. Your reputation as an influencer rapidly plummets!", risk: 50, popularity: 0}, 0, 2], 
				 
	["The pandemic has led to increase in discrimination against certain minorities. Carefully make your choice:",  
   "These people are to blame for ViruX! Share to expose them! #ViruXBlame",
   "Let's remember that ViruX doesn't discriminate based on ethnicity. We should unite and educate ourselves about the virus rather than blaming specific communities. #ViruXUnity", 1],
	[{text: "You decided to repost content that targets specific minorities or ethnic groups as responsible for the spread of ViruX.", risk: 30, popularity: 5}, {text: "Good job! You chose to promote inclusivity and refrain from sharing content that targets specific groups unfairly. You focus on sharing accurate information about ViruX.", risk: -10, popularity: 15}, 0, 2], 
				 
	//ViruX Ending
	[""],
  [" ", "", ""],
				 
	//Responding to Climate Change
];

var endings = [
  ["You choose to spread misinformation. People reading your posts ignored vital safety measures, leading to a surge in ViruX cases and overwhelming the healthcare system. Hospitals struggled to cope with the influx of patients, and the death toll soared. Your actions eventually caught up. ",
   "By consistently sharing accurate information about ViruX, you helped your audience make informed decisions in a difficult time. The curve flattened, and the healthcare system remained manageable."],
  ["You contributed to reducing support for climate action. The world continues to face severe climate-related crises, including extreme weather events, food shortages, and environmental degradation. Thanks to you fewer people want to do anything about them.",
   "By consistently sharing accurate information about climate change, you inspired your followers to take action. You became a respected advocate for climate action, and helped make more ecologically conscious societies."],
  ["As you spread false narratives and promoted divisive content, the Equality Quest Movement rapidly lost credibility and support. The world remained deeply divided, and progress toward equality stagnated.",
   "By consistently sharing accurate information and fostering constructive dialogue, you contributed to positive social change. Even if you didn't completely agree with the movement, by spreading verified facts and not misinformation on the topic you ensured that activists of the movement were not unfairly targeted."],
  ["Your relentless spread of false claims and divisive content during the Harmonia elections led to widespread mistrust in the electoral process. Accusations of voter fraud and election rigging created chaos, and peaceful transitions of power became nearly impossible. Good job plunging the country into political turmoil and instability.", 
    "By consistently sharing accurate information about the Harmonia elections, you encouraged civic engagement and informed decision-making. Voter turn-out increased amongst your followers contributed to a better election process!"],
  ["You promoted false narratives and conspiracy theories surrounding the unrest. More riots took place causing extensive damage and loss of life. Public trust in the government and institutions eroded.", 
    "By consistently sharing accurate information about the unrest, you contributed to a better understanding of the events. You emerged as a responsible voice for unity and reconciliation, helping to heal the nation and rebuild trust in its institutions."],
]

var good_choice_counter = 0;
var chapter_endings = [10, 16, 24, 32, 40, 48];
var chapter = 0;

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
//check for ending 	
if (chapter_endings.includes(i)) {
  document.getElementById("wrapper").style.display = "none";
  document.getElementById("wrapper2").style.display = "none";
  document.getElementById("nextButton").style.display = "inline";
  document.getElementById("nextButton").innerHTML = "NEXT CHAPTER";
  var performance = (good_choice_counter - 2) * 100 / 2;
  if (performance > 75) {
    document.getElementById('text').innerHTML = endings[chapter][0]; 
  } else {
    document.getElementById('text').innerHTML = endings[chapter][1]; 
  }
  good_choice_counter = 0; //reset counter
  chapter++; //increment chapter
}

  //if x = 1, then display choice description and buttons for choices
else if (x == 1 & choice == 1) {
  document.getElementById("nextButton").style.display = "none";
  document.getElementById("wrapper").style.display = "inline";
  document.getElementById("wrapper2").style.display = "inline";
document.getElementById("card_body").innerHTML = storyline[i][1];
    document.getElementById("card_body2").innerHTML = storyline[i][2];
  }

//if x = 2, a choice has been made; for first choice do this
  else if (x == 2 & choice == 2) {
  document.getElementById("wrapper").style.display = "none";
  document.getElementById("wrapper2").style.display = "none";
  document.getElementById("nextButton").style.display = "inline";
  document.getElementById("nextButton").innerHTML = "NEXT"; 
    y = storyline[i][0].text;
    difVariable.risk = difVariable.risk + storyline[i][0].risk;
    difVariable.popularity = difVariable.popularity + storyline[i][0].popularity;   
    good_choice_counter = good_choice_counter + (storyline[i][0].risk < 0 ? 1 : 0);   
  }

//if x = 2, a choice has been made; for second choice do this
else if (x == 2 & choice == 3) {
  document.getElementById("wrapper").style.display = "none";
  document.getElementById("wrapper2").style.display = "none";
   document.getElementById("nextButton").style.display = "inline";
    document.getElementById("nextButton").innerHTML = "NEXT";
    y = storyline[i][1].text;
    /**Displaying text for button 2, displaying text located at storyline[i][2] */
    difVariable.risk = difVariable.risk + storyline[i][1].risk;
    difVariable.popularity = difVariable.popularity + storyline[i][1].popularity; 
    good_choice_counter = good_choice_counter + (storyline[i][1].risk < 0 ? 1 : 0);  
  }

//else proceed normally with text
else {
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("wrapper2").style.display = "none";
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