//declaring all the global variables
var numbers = [];
var j;
var k;
var input;
var i;
var l;
var m=0;

//creating a function which activates when a key is pressed

  $(document).on("keypress", function(){
  // alert("start");
  if(m==0)
  {
    m=1;
   j = 0;
   k;
   input;
   i=1;
   l=0;
   m=1;

  showingPattern(i);}

})

// if(m==1)
  userInput();

//function that checks the number and gives id accordingly
function checker(n) {
  switch (n) {
    case 1:
      return "green";
      break;
    case 2:
      return "red";
      break;
    case 3:
      return "yellow";
      break;
    case 4:
      return "blue";
      break;
    default:

  }
}

//function that checks the id and gives number accordingly
function antiChecker(id) {
  switch (id) {
    case 'green':
      return 1;
      break;
    case 'red':
      return 2;
      break;
    case 'yellow':
      return 3;
      break;
    case 'blue':
      return 4;
      break;

  }
}


//function that changes style when a button is pressed
function pressed(pressedButton) {
  $("#" + pressedButton).addClass("pressed");
  var audio = new Audio("sounds/" +
    pressedButton + ".mp3");
  audio.play();
  setTimeout(function() {
    $("#" + pressedButton).removeClass("pressed");
  }, 250);
}

//function takes user input gives result
function userInput(){
  $(".btn").click(function() {
    var id = $(this).attr("id");
    input = antiChecker(id);
    // alert("l="+l);
    
    l++;
    // alert(input);
    pressed(id);
    j = comparer(j);
    if(k==0){
      wrong();
      return 0;
    }

    else if(k==1)
    {
      i++;
      setTimeout(function(){
        showingPattern(i);
      }, 800)
    }

  });

}

//compares user input with pattern
function comparer(j) {
  if (numbers[j] != input) {
    k=0;
    // alert("j="+j+" i="+i+" k="+k);
    return 0;
  }
  else if (j == i-1) {
    k=1;
    // alert("j="+j+" i="+i+" k="+k);
    return 0;
  }
  else if(numbers[j]==input && j<i-1){
    k=2;
    // alert("j="+j+" i="+i+" k="+k);
    j++;

    return j;

  }
}
// function creates random pattern and shows it
function showingPattern(i){
    $("#level-title").text("level "+i);
    var n = Math.floor(Math.random() * 4) + 1;
    numbers.push(n);
    var id = checker(n);
    console.log(numbers);
    setTimeout(function(){
      pressed(id);
    }, 400);


}

//function changes style when wrong button is pressed
function wrong(){
  $("body").addClass("game-over");
  $("#level-title").text("Game Over, Press any key to Restart.");
  var audio= new Audio("sounds/wrong.mp3");
  audio.play();
  m=0;
  setTimeout(function()
  {
    $("body").removeClass("game-over");
  },
  250);
  numbers=[];

}
