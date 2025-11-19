var playing = false;
var score;
var timeRemaining;
var action;
var correctAnswer;


        document.getElementById("start").onclick = function () {
  
  if (playing == true) {
    
    location.reload();
  }
  //
  else {
     
    document.getElementById("startgame").pause();
    playing = true;
    score = 0;
    document.getElementById("scoreNumber").innerHTML = score;

    
    document.getElementById("instruction").innerHTML ="නිවැරදි පිළිතුර​ ඔබන්න​";

   
    show("time");

    
    timeRemaining = 300;
    document.getElementById("remainingTime").innerHTML = timeRemaining;

    
    hide("gameover");

    
    document.getElementById("start").innerHTML = "නැවත පටන් ගන්න​";

    
    startCountdown();

    
    generateQA();
  }
};


for (var i = 1; i < 5; i++) {
  document.getElementById("answer" + i).onclick = function () {
    if (playing == true) {
      //if the answer is correct
     // this=document.getElementById("answer1")
      if (this.innerHTML == correctAnswer) {
       



        score++;
        document.getElementById("scoreNumber").innerHTML = score;
        
        document.getElementById("win").play();
        show("right");

        




                       setTimeout(function () {
                         hide("right");
                      }, 1000);
                           hide("wrong");
        
        generateQA();
      } else {
        
        document.getElementById("lost").play();

        
        show("wrong");

        
        setTimeout(function () {
          hide("wrong");
        }, 1000);
        hide("right");
      }
    }
  };
}


const startCountdown = () => {
  action = setInterval(function () {
    timeRemaining -= 1;
    document.getElementById("remainingTime").innerHTML = timeRemaining;
    if (timeRemaining == 0) {
      
           stopCountdown();
              show("gameover");
                document.getElementById("gameover").innerHTML ="<p>වෙලාව ඉවරයි!</p><p>ලකුණු: " + score + "</p>";
      document.getElementById("final").play();
      hide("time");
      hide("right");
      hide("wrong");
      playing = false;
      document.getElementById("start").innerHTML = "පටන් ගන්න​";
    }
  }, 1000);
};


const generateQA = () => {
  
  var randomNumber1 = Math.round(Math.random() * 100);
  var randomNumber2 = Math.round(Math.random() * 10);

  document.getElementById("problem").innerHTML =
    randomNumber1 + " x " + randomNumber2;
  correctAnswer = randomNumber1 * randomNumber2;
  var answerBox = Math.round(Math.random() * 3) + 1;

  
  document.getElementById("answer" + answerBox).innerHTML = correctAnswer;

 
  var answers = [correctAnswer];

  
  for (var i = 1; i < 5; i++) {
    if (i !== answerBox) {
      var wrongAnswer;
      
      do {
        wrongAnswer =
          Math.round(Math.random() * 10) * Math.round(Math.random() * 90);
      } while (answers.indexOf(wrongAnswer) > -1); 

      document.getElementById("answer" + i).innerHTML = wrongAnswer;
      
      answers.push(wrongAnswer);
    }
  }
};


const stopCountdown = () => clearInterval(action);


const hide = (id) => (document.getElementById(id).style.display = "none");


const show = (id) => (document.getElementById(id).style.display = "block");
