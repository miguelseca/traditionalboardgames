const status_text = document.getElementById('status');
const pote = [];
let gameState = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
const humanPots = [0, 1, 2, 3, 4, 5];
const IAPots = [7, 8, 9, 10, 11, 12];
let hasEnded = false;
let contPlay = false;

for (let i = 0; i < 14; i++) {
    pote[i] = document.getElementById(`${i}`);
}

const newGame = () => {
    if (confirm('Start new game? (game in progress will be lost)')) {
        status_text.innerHTML += `New game started! // `;
        gameState = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
        updateMancala(gameState);
    }
}

const updateMancala = (gameState) => {
    for (let i = 0; i < 14; i++) {
        pote[i].innerHTML = gameState[i];
    }
}

const verifyEnd = (gameState) => {

    let sum = 0;
    for (let i = 0; i < 6; i++) {
        sum += gameState[i];
    };
    if (sum == 0) {
        hasEnded = true
    };
    sum = 0;
    for (let j = 7; j < 13; j++) {
        sum += gameState[j];
    };
    if (sum == 0) {
        hasEnded = true
    };
    status_text.innerHTML += `Verify Endgame: ${hasEnded} // `;
}

//* debug function --> conta as pecas todas
const piecesCount = (gameState) => {

    let totalPieces = 0;
    for (let i = 0; i < 14; i++) {
        totalPieces += gameState[i];
    };
    
    status_text.innerHTML += `PC: ${totalPieces} // `;
}

const jogada = (pot) => {

    const pecasAmover = gameState[pot];
    contPlay = false;
    if (pecasAmover) {

        const potFinal = pot + pecasAmover;
        const pecasNoFinal = gameState[potFinal];

        gameState[pot] = 0;

        for (let i = 0; i < pecasAmover; i++) {
            gameState[pot + 1 + i]++;
        };

        status_text.innerHTML += `${pecasAmover} pecas movidas do pote ${pot} // `;

        if (humanPots.includes(potFinal) && pecasNoFinal == 0) {
            gameState[6] += gameState[12 - potFinal] + 1;
            status_text.innerHTML += `Capturadas ${gameState[12 - potFinal]} pecas do pote ${12 - potFinal} // `;
            gameState[12 - potFinal] = 0;
            gameState[potFinal] = 0;
            
        };

        if (potFinal == 6 || potFinal == 13) contPlay = true;
        status_text.innerHTML += `Aditional turn: ${contPlay} // `;

        updateMancala(gameState);
        piecesCount(gameState);

        verifyEnd(gameState);

        if (hasEnded == true) {
            alert('Game over');
        };

        if(!contPlay) AIplay();
        
    }
}



const AIplay = () => {
    let potezinho = Math.floor(Math.random() * 12) + 7;


    status_text.innerHTML += `ITS THE AI TURN!!!!! // `;
    


};

updateMancala(gameState);
