var player1 = prompt("Player 1's name : ");
var player2 = prompt("Player 2's name : ");

document.querySelectorAll("p")[0].innerHTML = player1.toUpperCase();
document.querySelectorAll("p")[1].innerHTML = player2.toUpperCase();

var button = document.querySelector("button");

button.onclick = function(){
    var randomNumber1 = Math.floor((Math.random() * 6) + 1 );
    var randomDiceImage = "dice"+ randomNumber1 + ".png";
    var imageSource = "images/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",imageSource);
    
    var randomNumber2 = Math.floor((Math.random() * 6) + 1 );
    var randomDiceImage2 = "dice"+ randomNumber2 + ".png";
    var imageSource2 = "images/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",imageSource2);
    
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = player1.toUpperCase()+" wins ";
    }
    else if (randomNumber1 <randomNumber2){
        document.querySelector("h1").innerHTML = player2.toUpperCase()+" wins "; 
    }
    else{
        document.querySelector("h1").innerHTML = "Draw"; 
    }
}
