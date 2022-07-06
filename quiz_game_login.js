var player1name;
var player2name;
function addUser(){
    player1name=document.getElementById("player1_name").value;
    console.log(player1name);
    localStorage.setItem("player1_name",player1name);
    player2name=document.getElementById("player2_name").value;
    console.log(player2name);
    localStorage.setItem("player2_name",player2name);
    window.location="quiz_game_page.html";  
}