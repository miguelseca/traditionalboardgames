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
    location.href = 'games/' + g + '.html';

}

const meteo_container = document.getElementById('meteo');

const getMet = async () => {
    const url = `http://api.weatherstack.com/current?access_key=031fe8a75b0a8b89e7721a8743041505&query=Oporto`;
    const res = await fetch(url);
    const result = await res.json();

    let elemento = document.createElement('div');
    elemento.classList.add('temp');

    elemento.innerHTML = `
        
    <img src=${result.current.weather_icons}>
    <h6>${result.current.temperature}ºC</h6>`;

    meteo_container.removeChild(meteo_container.firstChild);
    meteo_container.appendChild(elemento);



}

getMet();

