// player 1 dicee random images
var randomNumber = Math.floor(Math.random() * 6) + 1;
var imageSource = "images/dice" + randomNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageSource);
// player 2 dicee random images
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSoure2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSoure2);

// condiction who winner
if(randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML ="Player 1 winner";
}else if (randomNumber <randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 winner";
}else{
  document.querySelector("h1").innerHTML = "Drow";
}
