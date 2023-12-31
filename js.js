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
  [{text: "Your popularity increased due to the dramatic claims of your post. Unfortunately you also contributed to fearmongering and misinformation", risk: 5, popularity: 20},
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

  //Responding to Climate Change
  ["Chapter 2: Responding to Climate Change"],
  ["As summer unfurls its scorching embrace upon the world, the global north, in addition to a pandemic, finds itself in the throes of a climate crisis with record-breaking heat waves gripping nations in a relentless, fiery vice. Against the backdrop of these extreme weather events, you, as an aspiring influencer, must decide how to inform your audience about this issue."],
  
  ["", "Did you know that climate change is just a natural cycle? Don't believe the hype! Nature has always had its ups and downs. #ClimateMyth", "Let's separate fact from fiction: Climate change is real, supported by extensive scientific research. Let's work together for a sustainable future. #ClimateScience", 1],
  [{text: "You decided to share content that questions the validity of climate change, potentially spreading misinformation.", risk: 25, popularity: 10},
  {text: "Good job! You chose to fact-check information before posting and share only scientifically accurate content about climate change.", risk: -10, popularity: 15}, 0, 2],
  
  ["You decide to respond to your followers comments on your recent post.", "No! The end is near! Scientists predict the Earth will become uninhabitable in just 1 year due to climate change. We must panic and take drastic measures NOW! Share this life-saving message with everyone you know! 🌍😱 #ClimateCrisis",
  "Thank you for sharing your concerns. However, it's essential to rely on accurate information. The latest research shows that climate change requires a balanced, science-based approach. Let's discuss the facts.", 1],
  [{text: "You engaged in sensationalism, potentially spreading fear and panic.", risk: 20, popularity: 5},
  {text: "You prioritized fact-checking and provided corrections when necessary, ensuring that your interactions are based on accurate information.", risk: -5, popularity: 10}, 0, 2],
  
  ["You're taking the next step in your influencer journey! You decide to collaborate!", "Thrilled to announce my collaboration with ClimateScientist! Together, we're on a mission to spread awareness about the urgent need for climate action and share credible information backed by science. Stay tuned for eye-opening insights and positive change! 🌍🌿 #ClimateAction",
  "Exciting news! Teaming up with ClimateTruthSeeker, a true climate visionary! Together, we'll expose the so-called 'climate change hoax' and reveal the 'real truth' behind these so-called 'scientists.' Brace yourselves for mind-blowing revelations! 🌍🤯 #ClimateTruth", 1],
  [{text: "You chose to collaborate with activists known for their commitment to scientific accuracy and responsible climate advocacy.", risk: -10, popularity: 20},
  {text: "You collaborated with influencers who spread climate change myths or sensationalize the issue.", risk: 30, popularity: 10}, 0, 2],
  
  ["A follower points out that some of your previous posts have contained inaccuracies. You have the opportunity to set the record straight.", "<< No post. Ignore Risks and Continue Misinformation. >>",
  "I apologize for any inaccuracies in my previous posts. Let's set the record straight and prioritize sharing credible information about climate change. Together, we can make a positive impact.", 1],
  [{text: "You chose to ignore the risks of spreading misinformation and continued posting sensationalized or inaccurate content.", risk: 25, popularity: 5},
  {text: "You acknowledged mistakes, corrected misinformation, and commit to learning and sharing accurate information about climate change.", risk: -10, popularity: 20}, 0, 2],
   
   //Climate Change Ending
  [""],
	//Decision 3: A Social Movement
  ["Chapter 3: A Social Movement"],
  ["As summer goes on, the world witnesses the birth of a powerful social justice movement known as the Equality Quest Movement. This movement advocates for equal rights, justice, and an end to systemic discrimination. However, amidst the surge of social media activism, misinformation about the movement is rampant. As an aspiring influencer, you are in a unique position to shape the narrative. Your mission: make choices that prioritize responsible information sharing and combat the dangers of spreading misinformation related to the Equality Quest Movement."],
  
  ["", "Equality Quest is all about radical ideologies and division! Be wary of their hidden agenda! #EQMisinfo",
  "Equality Quest stands for justice, equality, and ending systemic discrimination. Let's work together for a more just society! #EqualityQuest", 1],
  [{text: "You decided to misrepresent the goals and values of the Equality Quest Movement.", risk: 25, popularity: 5},
  {text: "You chose to accurately represent the goals and values of the Equality Quest Movement.", risk: -10, popularity: 15}, 0, 2],
  
  ["", "Breaking news: Equality Quest leaders caught plotting to overthrow the government! Share for awareness! #EQConspiracy",
  "Let's ensure the information we share is accurate. Misinformation harms the movement's credibility. Let's get the facts straight! #FactsMatter", 1],
  [{text: "You decided to share click-baity news articles that contain false information about the Equality Quest Movement.", risk: 30, popularity: 10},
  {text: "You prioritized fact-checking and correcting any misinformation or misconceptions in posts or comments.", risk: -15, popularity: 15}, 0, 2],
  
  ["", "This image shows an EQ supporter performing an illegal act. Share to show the reality! #AgainstEQ",
  "These verified photos show peaceful protests by EQ supporters. Let's lend our support! #EqualityJourneys", 1],
  [{text: "Oh no, the photo was manipulated. You spread misinformation. Your reputation was harmed.", risk: 30, popularity: 10},
  {text: "You chose to share verified photos related to the Equality Quest Movement, ensuring their authenticity.", risk: -10, popularity: 15}, 0, 2],
  
   ["Your followers have pointed out mistakes in your posts. They demand accountability.", "<< No post. Ignore Critique and Continue Posting. >>",
  "I apologize for any inaccuracies in my previous posts. Let's prioritize sharing credible information about the Equality Quest Movement. Together, we can promote genuine progress and understanding.", 1],
  [{text: "You chose to ignore constructive critique and continued posting without reflection, potentially contributing to the spread of misinformation.", risk: 30, popularity: 5},
  {text: "You acknowledged any mistakes, corrected misinformation, and committed to learning and sharing only accurate information about the Equality Quest Movement.", risk: -30, popularity: 15}, 0, 2],
  

  //EQ Movement Ending
  [""],

  //Decision 4: Elections
  ["Chapter 4: It's Election Time!"],
  ["Three quarters of the year are done and you are slowly establishing yourself as an influencer by consistently posting. Now all eyes are on the Republic of Harmonia as it holds its presidential elections. The election season is marked by intense political polarization and a flood of misinformation. As an aspiring influencer, you are faced with a crucial role in shaping the narrative surrounding these elections. Your mission: make choices that prioritize responsible information sharing and combat the dangers of spreading election-related misinformation."],
  
  ["", "Candidate X is the ONLY choice for Harmonia! Their opponent is a corrupt puppet! #VoteX",
  "Let's examine the positions and records of all candidates. An informed choice is the best choice. #HarmoniaElections", 1],
  [{text: "You decided to endorse a political candidate and promote false claims about their opponent, potentially contributing to a divisive and misleading narrative.", risk: 25, popularity: 5},
  {text: "You chose to share information about political candidates that is accurate, balanced, and free from false claims.", risk: -10, popularity: 15}, 0, 2],
  
  ["", "Supporters of Candidate Y are blind to the truth! They are sheep! #HarmoniaDebates",
  "I appreciate your perspective. Let's discuss our differences respectfully and work towards a better Harmonia together. #HarmoniaUnity", 1],
  [{text: "You engaged in political debates by attacking individuals with differing political beliefs, further polarizing the discourse.", risk: 30, popularity: 10},
  {text: "You engaged in respectful and constructive discussions with those who hold differing political views, aiming to foster understanding and unity.", risk: -15, popularity: 15}, 0, 2],
  
  ["", "Breaking news: Election fraud in Harmonia! The truth must be revealed! #ElectionIntegrity",
  "Let's ensure the information we share is accurate. Misinformation undermines our democracy. Let's get the facts straight! #ElectionFacts", 1],
  [{text: "You decided to share news articles that contain unverified information or conspiracy theories about the elections. Try to not post sensationalist articles!", risk: 30, popularity: 10},
  {text: "You prioritized fact-checking and correcting any misinformation or misconceptions in posts or comments related to the elections.", risk: -10, popularity: 15}, 0, 2],
  
   ["", "This blog post claims voter suppression in Harmonia! Our democracy is at stake! #VoterRights", "Let's make sure every Harmonian has access to accurate voting information. Knowledge is power in our democracy! #VoteHarmonia", 1],
  [{text: "Oh no! The blog post was proven to be false, you did not do your due diligence of fact checking. Your popularity was harmed.", risk: 20, popularity: -30},
  {text: "You chose to encourage voter education and provide accurate information on how to participate in the elections responsibly.", risk: -30, popularity: 15}, 0, 2],
 

  //Elections Ending
  [""],

  //Decision 5: Addressing Riots Exacerbated due to Misinformation
	["Chapter 5: Addressing Riots Exacerbated due to Misinformation"],
  ["The end of 2020 brought great political upheaval. It's early 2021 now, and the world is still reeling from the shocking events of the Freedom Plaza Unrest. A large gathering at Freedom Plaza turned into a chaotic and violent situation, with widespread confusion and rumors circulating on social media. You're faced with the choice of how to approach this critical event marking your first year as an aspiring influencer."],
	
	["", "📚 Fact Check: Unraveling the Truth Behind the Freedom Plaza Riots 🏛️💡 #FactCheck #FreedomRiots",
  "🚨 BREAKING NEWS: Shocking Evidence Suggests Freedom Plaza Riots Were a Set-Up! 🤯🕵️‍♂️ #ConspiracyExposed", 1],
  [{text: "Instead of jumping on the conspiracy bandwagon, you decide to take a more responsible approach. You chose to research and verify the information before posting.", risk: -30, popularity: 15},
  {text: "You decided to post a sensational headline without fact-checking. Not good!", risk: 20, popularity: -10}, 0, 2],
	
	["", "🔍 Verified: Capitol Riots Were Not Staged! Let's Stick to the Facts 🧐📰 #FactCheck #TruthMatters",
  "🤔 The Capitol Riots: Unanswered Questions and Ambiguity 🧩🏛️ #SeekingTruth #CapitolMystery", 1],
  [{text: "You found credible news sources and statements from authorities confirming that the Freedom Plaza riots were not staged. You decided to share this information", risk: -30, popularity: 15},
  {text: "While trying to fact-check, you encountered conflicting reports. You continued to fan the rumours without waiting for an accurate report.", risk: 20, popularity: -10}, 0, 2],
	
	["", "🗣️ Let's Talk: Why It's Crucial to Question, Investigate, and Verify 🔍🤝 #Discussion #FactCheckMatters",
  "📣 Reminder: Responsible Content Sharing is a Must! Let's Prioritize Facts and Accuracy 🙌📰 #ResponsibleInfluence #FactFirst", 1],
  [{text: "Good job! You engaged with your followers in thoughtful discussions about the importance of seeking verified information and the dangers of jumping to conclusions.", risk: -30, popularity: 15},
  {text: "Good job! You emphasized the importance of responsible content sharing and express your commitment to only sharing verified information.", risk: -20, popularity: 10}, 0, 2],
	
	//Riots Ending
	[""],

  [""],

];

var endings = [
  ["You choose to spread misinformation. People reading you and other ViruX conspiracy theorists' posts ignored vital safety measures, leading to a surge in ViruX cases and overwhelming the healthcare system. Hospitals struggled to cope with the influx of patients, and the death toll soared. Your actions eventually caught up. ",
   "By consistently sharing accurate information about ViruX, you helped your audience make informed decisions in a difficult time. The curve flattened, and the healthcare system remained manageable."],
  ["You contributed to reducing support for climate action. The world continues to face severe climate-related crises, including extreme weather events, food shortages, and environmental degradation. Thanks to you fewer people want to do anything about them.",
   "By consistently sharing accurate information about climate change, you inspired your followers to take action. You became a respected advocate for climate action, and helped make more ecologically conscious societies."],
  ["As you and other radical content-creators spread false narratives and promoted divisive content, the Equality Quest Movement rapidly lost credibility and support. The world remained deeply divided, and progress toward equality stagnated.",
   "By consistently sharing accurate information and fostering constructive dialogue, you contributed to positive social change. Even if you didn't completely agree with the movement, by spreading verified facts and not misinformation on the topic you ensured that activists of the movement were not unfairly targeted."],
  ["Your relentless spread of false claims and divisive content during the Harmonia elections led to widespread mistrust in the electoral process. Accusations of voter fraud and election rigging created chaos, and peaceful transitions of power became nearly impossible. Good job plunging the country into political turmoil and instability.", 
    "By consistently sharing accurate information about the Harmonia elections, you encouraged civic engagement and informed decision-making. Voter turn-out increased amongst your followers contributed to a better election process!"],
  ["As you and other antagonists of the movement promoted false narratives and conspiracy theories surrounding the unrest, more riots took place causing extensive damage and loss of life. Public trust in the government and institutions eroded.", 
    "By consistently sharing accurate information about the unrest, you contributed to a better understanding of the events. You emerged as a responsible voice for unity and reconciliation, helping to heal the nation and rebuild trust in its institutions."],
]

FINAL_ENDING = "You have finished the game :) Misinformation poses a significant challenge for our world today. Did you know? In the lead-up to the 2020 U.S. presidential election, Twitter labeled or removed thousands of tweets for election-related misinformation. Facebook removed millions of posts and advertisements for violating its policies related to election misinformation. The WHO called the pandemic an 'infodemic' wherein a vast amount of information and misinformation was collectively shared. By mid-2020, Facebook reported that it had removed more than 7 million posts for sharing false information about COVID-19. This online misinformation had significant real world impacts."

var good_choice_counter = 0;
var chapter_endings = [10, 21, 32, 43, 51];
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

  //if x = 1, then display choice description and buttons for choices
if (x == 1 & choice == 1) {
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
    difVariable.risk = Math.max(difVariable.risk + storyline[i][0].risk, 0);
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
    difVariable.risk = Math.max(difVariable.risk + storyline[i][1].risk, 0);
    difVariable.popularity = difVariable.popularity + storyline[i][1].popularity; 
    good_choice_counter = good_choice_counter + (storyline[i][1].risk < 0 ? 1 : 0);  
  }

//else proceed normally with text
else {
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("wrapper2").style.display = "none";
    /**text proceed normally */}
    if (i == 52) {
      document.getElementById('text').innerHTML = FINAL_ENDING;
      document.getElementById('nextButton').style.display = "none"; 
      document.getElementById('startButton').style.display = "inline"; 
    }
    else if (chapter_endings.includes(i)) {
      document.getElementById("nextButton").innerHTML = "NEXT CHAPTER";
      var performance = (good_choice_counter) * 200 / (i - 3 * chapter -2);
      console.info("Performance", performance);
      if (performance > 75) {
        document.getElementById('text').innerHTML = endings[chapter][1]; 
      } else {
        document.getElementById('text').innerHTML = endings[chapter][0]; 
      }
      good_choice_counter = 0; //reset counter
      chapter++; //increment chapter
    }
    else {
      document.getElementById("nextButton").innerHTML = "NEXT";
      document.getElementById('text').innerHTML = y;
    }
   
}

//function to check stats for instant death. Need to write correctly
 function statchecker() {
    var statchecker = difVariable.risk;
    var description = "Your thirst for social-media popularity caused harm to people in the real world. People finally see through you. You are cancelled!";
	 if (statchecker  > 100) {
        document.getElementById('text').innerHTML = description;
		document.getElementById('nextButton').style.display = "none"; 
		document.getElementById('startButton').style.display = "inline"; 
      }
    }