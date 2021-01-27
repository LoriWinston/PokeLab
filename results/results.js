import { getPokeStats } from '../localStorageUtils.js';
import { makeLabelsArray, makeSeenArray, makeCaughtArray } from './mungeUtils.js';

var ctx = document.getElementById('myChart').getContext('2d');

const pokeStats = getPokeStats();


var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: makeLabelsArray(pokeStats), // LABELS ARRAY GOES HERE
        datasets: [
            {
                label: '# of times seen',
                data: makeSeenArray(pokeStats), // DATA ARRAY GOES HERE
                backgroundColor: 'purple',
                borderColor: 'black',
                borderWidth: 5
            },
            {
                label: '# of times caught',
                data: makeCaughtArray(pokeStats), // DATA ARRAY GOES HERE
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 5
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            // create x axis with step size 1 to show integers instead of ugly decimals
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});
