var numOfWin = 0;
var numOfLoss = 0;
for(var i =0; i<=5; i++){
    var guessNumber = parseInt(prompt("Enter a number: "));
var randomNumber = Math.floor(Math.random()*5)+1;

if(guessNumber == randomNumber){
    console.log("You have won! ");
    numOfWin++;
}
else{
    console.log("You are loss. Your guessing number: "+randomNumber);
    numOfLoss++;
}
}
document.write("Number of won: "+numOfWin+"<br/>");
document.write("Number of loss: "+numOfLoss+"<br/>");
