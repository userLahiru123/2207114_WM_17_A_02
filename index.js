
function shake(){
    test();
}

var player_1 = 0;
var player_2 = 0;
var player_1_width = 0;
var player_2_width = 0;
var player1_count = 0;
var player1_time = 0;
var player2_count = 0;
var player2_time = 0;

function test(){

    var rdm = Math.floor(Math.random()*6)+1;
    var rdm2 = Math.floor(Math.random()*6)+1;

    document.getElementById("cube").style.animation="ani 1s";
    document.getElementById("cube1").style.animation="ani 1s";
    
    setTimeout(()=>{document.getElementById("front").innerHTML=rdm;},999);
    setTimeout(()=>{document.getElementById("front1").innerHTML=rdm2;},999);
    
    if(player_1 == 0 && player_2 == 0){
        player_1_width = player_1_width + rdm + rdm2;
        player_2_width = player_1_width;
        setTimeout(()=>{document.getElementById("player_1").style.width = player_1_width*5+'px';},1200);
        setTimeout(()=>{document.getElementById("player_2").style.width = player_2_width*5+'px';},1200);
        
        player_1 = 1;
        document.getElementById("btn1").innerHTML = "Player 1";
        document.getElementById("btn1").style.color="blue";
    }
    else if(player_1 == 1){
        player_1_width = player_1_width + rdm2 + rdm;
        player1_time++;
        document.getElementById("player_1").style.width = player_1_width*5+'px';
        player_1 = 0;
        player_2 = 1;
        document.getElementById("btn1").innerHTML = "Player 2";
        document.getElementById("btn1").style.color="red";
    }
    else if(player_2 == 1){
        player_2_width = player_2_width + rdm2 + rdm;
        player2_time++;
        document.getElementById("player_2").style.width = player_2_width*5+'px';
        player_1 = 1;
        player_2 = 0;
        document.getElementById("btn1").innerHTML = "Player 1";
        document.getElementById("btn1").style.color="blue";
    }

    if(player1_time == 10 && player2_time == 10){
        var winner = "Player 1";
        var score = player_1_width;
        document.getElementById("btn1").style.visibility = "hidden";
        if(player_2_width > player_1_width){
            winner = "Player 2";
            score = player_2_width;
        }
        document.getElementById("winner_text").innerHTML = winner;
        document.getElementById("score").innerHTML = "Score: "+score;
        document.getElementById("winner_page").style.visibility = "visible";
    }
    
}

function reload(){
    location.reload();
}

function end(){
    window.location = "http://google.com";
}
