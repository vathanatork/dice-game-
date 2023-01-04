
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
    switch(player1){
        case 1:img1.setAttribute("src","/images/dice1.png");
        break;
        case 2:img1.setAttribute('src','/images/dice2.png');
        break;
        case 3:img1.setAttribute('src','/images/dice3.png');
        break;
        case 4:img1.setAttribute('src','/images/dice4.png');
        break;
        case 5:img1.setAttribute('src','/images/dice5.png');
        break;
        case 6:img1.setAttribute('src','/images/dice6.png');
        break;
    };
    switch(player2){
        case 2:img2.setAttribute('src','/images/dice2.png');break;
        case 2:img2.setAttribute('src','/images/dice2.png');break;
        case 1:img2.setAttribute('src','/images/dice1.png');break;
        case 3:img2.setAttribute('src','/images/dice3.png');break;
        case 4:img2.setAttribute('src','/images/dice4.png');break;
        case 5:img2.setAttribute('src','/images/dice5.png');break;
        case 6:img2.setAttribute('src','/images/dice6.png');break;
    };
}
replaceDice(player1,player2);