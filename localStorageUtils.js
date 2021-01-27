const POKESTATS = 'POKESTATS';
import pokemon from './data.js';
import { findByUnderscoreId } from './utils.js';




export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    }
    return stats;
}

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}

export function incrementSeen(_id) {
    const stats = getPokeStats();

    const poke = findByUnderscoreId(stats, _id);
    console.log(stats);
    if (!poke) {
        const dataPokemon = findByUnderscoreId(pokemon, _id);

        const newStat = {
            name: dataPokemon.pokebase,
            _id: _id,
            seen: 1,
            caught: 0
        };

        stats.push(newStat);
    } else {
        poke.seen++;
    }

    setPokeStats(stats);
}

export function incrementCaught(_id) {
    const stats = getPokeStats();
    const poke = findByUnderscoreId(stats, _id);

    poke.caught++;


    setPokeStats(stats);
}