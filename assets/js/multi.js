// multi

import {joinRoom, selfId } from 'https://cdn.skypack.dev/trystero/ipfs';
const user = {appId: 'HappyLittleDinosaurDemo'};

const config = {appId: 'san_narciso_3d'}

joinRoom({appId: 'Anonymouse', password:'dino-test'}, 'test')

let myName = `Anonymouse`;

function RandomId() {
    return Math.random().toString(2).substring(1,2);
}

// Used for connecting but will need to run first.
//https://www.skypack.dev/view/trystero#encryption

let ND = document.getElementById('') //Add in the input for getting the card.
ND.addEventListener('click', random(newDeck))



//cards within the deck
const values = ['1','2','3','4','5','6','Disaster-Insurance','Score-Sapper','Disaster-Redirect', 'Score-Booster'];
// The ammount of each card
const amount = ['_1', '_2', '_3', '_4', '_5', '_6', '_7'];
// Making the deck an array for the cards to live in.
let deck = new Array();
// deck creation
function newDeck() {
    deck = new Array();
    // Initializing the variable i to go by the amount of the values
    for (let i = 0; i < values.length; i++) {
        // initializing x to be the length of the ammount of cards for easier calculations
        for (let x = 0; x < ammount.length; x++) {
            let instant = parseInt(values[i]);
            // Initializing the instant cards to do different things.
            if ( values[i] == 'Score-Sapper') {
            }
            if (values[i] == 'Disaster-Insurance') {
                disaster_card = 0;
            }
            if (values[i] == 'Disaster-Redirect') {
                disaster_card + opponent_disaster_area;
            }
            if (values[i] == 'Score-Booster') {
                point_area +=2;
            }
            // The calculations for the cards
            let card = {value:values[i], amounts:amount[x], instants:instant};
            deck.push(card)
        }
    }
}
// making random
function random() {
    for(let i = 0; i < 100; i++)
    {
        // Initializing the cards being randomized
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random()) * deck.length);
        let temp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = temp;
    }
}
// Creating the player
let players = new Array();

function newplayers(num){
    players = new Array();
    for(vari=0;i<=num;i++) {
        let hand = new Array();
        let player = {Name: 'User' + i, ID:i, Score: 0, Hand : hand};
        players.push(player);
    }
}

// function PlayerUi() {
//     document.getElementById('user').innerHTML = '';
// }
// https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript