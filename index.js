

document.querySelector("a").addEventListener("click", game);
function game(){
var randomNumber=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber+".png";
var randomStore="images/" + randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomStore);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomStore2="images/" + randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomStore2);
if(randomNumber>randomNumber2)
{
  document.querySelector("h1").innerHTML="🔥player1 wins🔥";
}
else if(randomNumber<randomNumber2){
  document.querySelector("h1").innerHTML="🔥player2 wins🔥"
}
else
{
    document.querySelector("h1").innerHTML="😢Draw😢";
}}
