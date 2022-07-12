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



//const poke_container = document.getElementById('poke_container');
//const pokemons_number = 150;


// const fetchPokemons = async () => {
//     for (let i = 1; i <= pokemons_number; i++) {
//         await getPokemon(i);
//     }
// };

// const getPokemon = async id => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const res = await fetch(url);
//     const pokemon = await res.json();
//     createPokemonCard(pokemon);
// }

// const createPokemonCard = (pokemon) => {
//     const pokemonEl = document.createElement('div');
//     pokemonEl.classList.add('pokemon');
//     const { id, name, sprites, types } = pokemon;
//     const type = types[0].type.name;
//     const pokeInnerHTML = `
//   <div class="img-container">
//     <img src="${sprites.front_default}" alt="${name}" />
//   </div>
//   <div class="info">
//     <span class="number">${id}</span>
//     <h3 class="name">${name}</h3>
//     <small class="type">Type: <span>${type}</span></small>
//   </div>
//   `;
//     pokemonEl.innerHTML = pokeInnerHTML;
//     poke_container.appendChild(pokemonEl);
// }

// fetchPokemons();