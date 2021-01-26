// import functions and grab DOM elements
import pokemon from './data.js';
import { incrementCaught, incrementSeen } from './localStorageUtils.js';
import { getRandomPokemon } from './utils.js';

// initialize state

let pokeOne = getRandomPokemon();
let pokeTwo = getRandomPokemon();
let pokeThree = getRandomPokemon();


while (pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo._id === pokeThree._id) {

    pokeOne = getRandomPokemon();
    pokeTwo = getRandomPokemon();
    pokeThree = getRandomPokemon();

}

function renderPokeImage(pokemonItem) {
    const image = document.createElement('img');

    image.src = pokemonItem.url_image;
    image.addEventListener('click', () => {
        incrementCaught(pokemonItem._id);
    });
    return image;
}

const img1 = renderPokeImage(pokeOne);
const img2 = renderPokeImage(pokeTwo);
const img3 = renderPokeImage(pokeThree);
console.log(pokeThree);
incrementSeen(pokeOne._id);
incrementSeen(pokeTwo._id);
incrementSeen(pokeThree._id);


const div = document.getElementById('pokemon');

div.append(img1, img2, img3);

// set event listeners to update state and DOM