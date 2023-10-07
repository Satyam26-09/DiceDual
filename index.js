var t = Math.floor(Math.random()*6)+1;

    document.querySelector(".img1").setAttribute("src","images/dice"+t+".png");

var v = Math.floor(Math.random()*6)+1;

    document.querySelector(".img2").setAttribute("src","images/dice"+v+".png");

if(t>v){
    document.querySelector("h1").innerHTML="⛳ PLAYER 1 WINS!";
}
else if(t<v){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS! ⛳";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}