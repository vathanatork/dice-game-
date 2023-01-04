
let img1=document.querySelector(".dice img.img1");
let img2=document.querySelector(".dice img.img2");
let h1 = document.querySelector("div.container h1");


let player1 = (Math.random()*6)+1;
player1 = Math.floor(player1);
let player2 = (Math.random()*6)+1;
player2 = Math.floor(player2);


if(player1===player2){
    h1.innerHTML = "Draw";
}
else if(player1 > player2){
    h1.innerHTML = "Player1 Win";
}
else h1.innerHTML = "Player2 Win";


function replaceDice(player1,player2){
        img1.setAttribute("src","/images/dice"+player1+".png");
        img2.setAttribute("src","/images/dice"+player2+ ".png");
}
replaceDice(player1,player2);