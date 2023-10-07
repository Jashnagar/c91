function adduser()
{
    player_1_name = document.getElementById("player_1_name").value;
    player_2_name = document.getElementById("player_2_name").value;

    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("plaayer_2_name", player_2_name);

    window.location = "quiz_game.html";
}