const status_text = document.getElementById('status');
const pote = [];
let gameState = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
const humanPots = [0, 1, 2, 3, 4, 5];
const IAPots = [7, 8, 9, 10, 11, 12];
let hasEnded = false;
let contPlay = false;
let IAcontPlay = false;


for (let i = 0; i < 14; i++) {
    pote[i] = document.getElementById(`${i}`);
};

const newGame = () => {
    if (confirm('Start new game? (game in progress will be lost)')) {
        status_text.innerHTML += `New game started! // `;
        gameState = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
        hasEnded = false;
        updateMancala(gameState);
    }
};

const updateMancala = (gameState) => {
    for (let i = 0; i < 14; i++) {
        pote[i].innerHTML = gameState[i];
    }
};

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

const jogada = (pot) => {

    const pecasAmover = gameState[pot];
    contPlay = false;
    let passouMancala = false;
    const potFinal = pot + pecasAmover;
    const pecasNoFinal = gameState[potFinal];

    if (pecasAmover) {


        gameState[pot] = 0;

        for (let i = 1; i <= pecasAmover; i++) {
            if (pot + i > 13) {
                pot -= 14

            };
            gameState[pot + i]++;


            if ((pot + i) == 13) {
                passouMancala = true;
                status_text.innerHTML += `passou pela mancala // `;
            };

        };

        if (passouMancala) {
            gameState[13]--;
            gameState[potFinal + 1]++;
        }

    };

    status_text.innerHTML += `${pecasAmover} pecas movidas do pote ${pot} // `;

    if (humanPots.includes(potFinal) && pecasNoFinal == 0) {
        gameState[6] += gameState[12 - potFinal] + 1;
        status_text.innerHTML += `Capturadas ${gameState[12 - potFinal]} pecas do pote ${12 - potFinal} // `;
        gameState[12 - potFinal] = 0;
        gameState[potFinal] = 0;

    };

    if (potFinal == 6) contPlay = true;
    status_text.innerHTML += `Aditional turn: ${contPlay} // `;

    updateMancala(gameState);

    verifyEnd(gameState);

    if (hasEnded == true) {
        alert('Game over');
    };

    if (!contPlay) {
        do {
            alert('IA will play in 3 seconds');
            setTimeout(jogadaIA, 3000);
            status_text.innerHTML += `IA TO PLAY: ${!contPlay} // `;


        } while (IAcontPlay == true);
    };

};

const jogadaIA = () => {

    let p = Math.floor(Math.random() * (6) + 7);
    do {
    } while (gameState[p] == 0);

    const IApecasAmover = gameState[p];
    let IAcontPlay = false;
    let IApotFinal = p + IApecasAmover;
    let passouMancala = false;

    if (IApotFinal > 13) {
        IApotfinal -= 14;
    };

    const IApecasNoFinal = gameState[IApotFinal];

    if (IApecasAmover) {

        gameState[p] = 0;

        for (let i = 1; i <= IApecasAmover; i++) {
            if (p + i > 13) p -= 14;
            gameState[p + i]++;

            if ((p + i) == 6) {
                passouMancala = true;
                status_text.innerHTML += `passou pela mancala // `;
            };

        };

        if (passouMancala) {
            gameState[6]--;
            gameState[IApotFinal + 1]++;
        }

    };
    status_text.innerHTML += `${IApecasAmover} pecas movidas do pote ${p} // `;

    if (IAPots.includes(IApotFinal) && IApecasNoFinal == 0) {
        gameState[13] += gameState[12 - IApotFinal] + 1;
        status_text.innerHTML += `Capturadas ${gameState[12 - IApotFinal]} pecas do pote ${12 - IApotFinal} // `;
        gameState[12 - IApotFinal] = 0;
        gameState[IApotFinal] = 0;

    };

    if (IApotFinal == 13) {
        IAcontPlay = true;
    };

    status_text.innerHTML += `Aditional IA turn: ${IAcontPlay} // `;

    updateMancala(gameState);

    verifyEnd(gameState);

    if (hasEnded == true) {
        alert('Game over');
    };

};


updateMancala(gameState);
