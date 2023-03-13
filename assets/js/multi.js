// multi

import trystero from 'https://cdn.skypack.dev/trystero';

import {joinRoom, selfId} from 'trystero/ipfs'
const user = {appId: 'HappyLittleDinosaurDemo'};

const config = {appId: 'chrome'}
const room = joinRoom(config, 'dino')
// Inform if someone joins 
onPeerJoin(peerId => console.log(`${peerId} joined`))
// Informs if someone leaves
onPeerJoin(peerId => console.log(`${peerId} left`))

// joinRoom({appId: 'Anonymouse', password:'dino-test'}, 'test')

const [sendCursor, getCursor] = room.makeAction('cursormove')

window.addEventListener('mousemove', e => sendCursor([e.clientX, e.clientY]))

getCursor(([x, y], peerId) => {
    const peerCursor = cursorMap[peerId]
    peerCursor.style.left = x + 'px'
    peerCursor.style.top = y + 'px'
})

room.onPeerJoin(peerId =>
    setInterval(
        async () => console.log(`took ${await room.ping(peerId)}ms`),
        2000
    )
)

let myName = `Anonymouse`;
// Attempting to make this a random string assigned to each user that interacts and joins.
function RandomId() {
    return Math.random().toString(2).substring(1,2);
}
let peerId = myName + RandomId(selfId);
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



// function PlayerUi() {
//     document.getElementById('user').innerHTML = '';
// }
// https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript