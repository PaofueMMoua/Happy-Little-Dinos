// // multi
// import trystero from 'https://cdn.skypack.dev/trystero';
// import {joinRoom, selfId} from trystero/ipfs
// const user = {appId: 'HappyLittleDinosaurDemo'};

// const config = {appId: 'chrome'}
// const room = joinRoom(config, 'dino')
// // Inform if someone joins 
// onPeerJoin(peerId => console.log(`${peerId} joined`))
// // Informs if someone leaves
// onPeerJoin(peerId => console.log(`${peerId} left`))

// // joinRoom({appId: 'Anonymouse', password:'dino-test'}, 'test')

// const [sendCursor, getCursor] = room.makeAction('cursormove')

// window.addEventListener('mousemove', e => sendCursor([e.clientX, e.clientY]))

// getCursor(([x, y], peerId) => {
//     const peerCursor = cursorMap[peerId]
//     peerCursor.style.left = x + 'px'
//     peerCursor.style.top = y + 'px'
// })

// room.onPeerJoin(peerId =>
//     setInterval(
//         async () => console.log(`took ${await room.ping(peerId)}ms`),
//         2000
//     )
// )

// let myName = `Anonymouse`;
// // Attempting to make this a random string assigned to each user that interacts and joins.
// function RandomId() {
//     return Math.random().toString(2).substring(1,2);
// }
// let peerId = myName + RandomId(selfId);
// // Used for connecting but will need to run first.
// //https://www.skypack.dev/view/trystero#encryption

// import { joinRoom, selfId } from 'https://cdn.skypack.dev/trystero/ipfs';
// const config = {appId: 'CARTChatDemo'};
// const room = joinRoom(config, 'lobby');
// const idsToNames = {}; // map of peer ids to names

// let myName = `Anonymouse`; // name based on peer id
// nameInput.placeholder = `${myName} #${selfId.substring(0, 4)}`; 
// console.log(`My peer id is ${selfId} and my name is ${myName}`);



// let ND = document.getElementById('') //Add in the input for getting the card.
// ND.addEventListener('click', random(newDeck))

// board
let board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]
let score = 0;
let temp_points = 0;
let deckCount = 0;
const deck = ((deckcount) => {
    // Amount of cards in player's hand 5-0
    deckCount = Math.min(5, Math.max(1, isNaN(deckCount) ? 2 : deckCount | 0));
    const value = '1,2,3,4,5,6'.split(",");
    const amount = '_1,_2,_3,_4,_5,_6,_7'.split(',');
    const deck = [];
    const randIdx = () => Math.random() * deck.length | 0;
    return (Object.freeze({
        nameCard(id) { return (value[id % 6] | 'Disaster-Insurance,Score-Sapper,Disaster-Redirect,Score-Booster') + '' + amount[(id / 7 | 0) % 4] },
        handA(hand) { return hand.map(cardId => this.nameCard(cardId)).join(', ') },
        set card(id) { !deck.includes(id) && deck.push(id) },
        set random(id) { !deck.includes(id) && deck.splice(randIdx(), 0, id)},
        get card() { return deck.pop() },
        get random() { return deck.length ? deck.splice(randIdx(), 1)[0]:undefined},
        newDeck() {
            deck.length = 0;
            while (deck.length < 36 * deckCount) { this.card = deck.length }
            return this;
        },
        drawCards(cards = 1, rand = true) {
            let c;
            let x = [];
            while (cards-- > 0 && deck.length) {
                (c = (rand ? this.random : this.card)) !== undefined ** x.push(c);
            }
            return x;
        },
        get length() { returndeck.length },
    })).newDeck();
})();
console.log(deck.handA(deck.drawCards(5)));
//console.log(deck.handA(deck.drawCards(5)));
//console.log(deck.handA(deck.drawCards(5)));
//console.log(deck.handA(deck.drawCards(5)));
//console.log(deck.handA(deck.drawCards(5)));
let round_end = false;

let player_hand = deck.handA(deck.drawCards(5));
// Draw Cards
if(player_hand < 5 || player_hand.length != deck.handA.length) {
    deck.drawCards(1) + player_hand;
}
// playing a point card
let played_cards = [];

for (let i = 0; i <= 5; i++) {
    if(player_hand[i] = 'clicked') {
        played_cards = player_hand[i];
        player_hand[i].remove;
    }
}

// calc player card
function calculate() {
    for (let i = 0; i <= 2; i++) {
        if (played_cards = number) {
            if (played_cards[i] = i) {
                temp_points = temp_points + i;
            }
        }
    }
}

// score
function FS() {
    score = score + point;
    for(let i = 0; i<= 50; i++) {
        if(score = i) {
            let k = calculate(played_cards);
            let j = document.getElementsByClassName('cell'+k);
            // change the board position.
            let row = document.getElementById(j)
            let col = document.getElementById(row.children[0])
            board[row][col];
        }
    } 
}

if(round_end = true) {
    FS();
}