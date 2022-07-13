const games = {
    1: "chess",
    2: "backgammon",
    3: "tictactoe",
    4: "go",
    5: "checkers",
    6: "mancala",
    7: "ninemensmorris",
    8: "tafl",
    9: "mahjong"
};

function getRandomGame() {
    const theGame = Math.floor(Math.random() * 9) + 1;
    const g = games[theGame];
    location.href = g + '.html';

}
function goTo(gameNumber) {
    location.href = games[gameNumber] + '.html';
}


