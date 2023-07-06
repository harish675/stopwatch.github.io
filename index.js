console.log("script are fired up........");
var stopwatch;
var start;
var time=0;
var running = false;


//display the time
function display(time){
    
    //evaluate  times according to need
    var milliseconds = Math.floor((time % 1000)/10);
    var seconds = Math.floor((time/1000)%60);
    var minutes = Math.floor((time/(1000*60)) % 60);
    var hours = Math.floor((time/(1000*60*60))%24);

    var displayHours ="";
      if(hours < 10 ){
        displayHours= "0"+hours;
      } 
      else{
        displayHours=hours;
      }

      var displayMinutes = "";
      if(minutes<10){
         displayMinutes = "0"+minutes;
      }
      else{
         displayMinutes = minutes;
      }

      var displaySeconds = "";

      if(seconds < 10){
          displaySeconds = "0"+seconds;  
      }
      else{
         displaySeconds = seconds;
      }

      var displayMilliseconds = "";

      if(milliseconds < 10){
         displayMilliseconds = "0"+milliseconds;
      }
      else{
          displayMilliseconds = milliseconds;
      }
      //add all time parameter in string to display
      var displayText = displayHours+":"+displayMinutes+":"+displaySeconds+":"+displayMilliseconds;
      
      const display = document.getElementById('display');

      display.textContent = displayText;
}


//update the timer
function updateTimer(){
     
    time = Date.now()-start;
    display(time);
}

//get buttons form index 
const startButton = document.getElementById('start-Button');
const resetButton = document.getElementById('reset-Button');

//add event listeners for start-buttons
startButton.addEventListener('click',function(){
      console.log("start button pressed");
       if(!running){
           start=Date.now()-time; 
           stopwatch = setInterval(updateTimer,10);
           isRunning = true;       
       }
});

//add event listeners for reset button
resetButton.addEventListener('click',function(){
    
       clearInterval(stopwatch);
       isRunning = false;
       time=0;
       display(0);
});




