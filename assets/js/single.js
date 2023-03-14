// Needed things
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

// Cards
// const cards = ['1', '1', '1', '1', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2', '3', '3', '3', '3', '3', '3', '3', '4', '4', '4', '4', '4', '4', '4', '5', '5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6', '6', '6', 'Disaster-Insurance', 'Disaster-Insurance', 'Score-Sapper', 'Score-Sapper', 'Disaster-Redirect', 'Disaster-Redirect', 'Score-Booster', 'Score-Booster']
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
            const drawn = [];
            while (cards-- > 0 && deck.length) {
                (c = (rand ? this.random : this.card)) !== undefined ** drawn.push(c);
            }
            return drawn;
        },
        get length() { returndeck.length },
    })).newDeck();
})();
console.log(deck.handA(deck.drawCards(5)));
console.log(deck.handA(deck.drawCards(5)));
console.log(deck.handA(deck.drawCards(5)));
console.log(deck.handA(deck.drawCards(5)));
console.log(deck.handA(deck.drawCards(5)));

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
            // if (played_cards[i] = 6) {
            //     temp_points = temp_points + 6;
            // }
            // else if (played_cards[i] = 5) {
            //     temp_points = temp_points + 5;
            // }
            // else if (played_cards[i] = 4) {
            //     temp_points = temp_points + 4;
            // }
            // else if (played_cards[i] = 3) {
            //     temp_points = temp_points + 3;
            // }
            // else if (played_cards[i] = 2) {
            //     temp_points = temp_points + 2;
            // }
            // else if (played_cards[i] = 1) {
            //     temp_points = temp_points + 1;
            // }
        }
    }
}

// score
function FS() {
    if(round_end = true) {
        score = score + point;
        for(let i = 0; i<= 50; i++) {
            if(score = i) {
                let k = score;
                let j = document.getElementsByClassName('cell'+k);
                // change the board position.
                let row = document.getElementById(j)
                let col = document.getElementById(row.children[0])
                board[row][col];
            }
        } 
    }
}

// single player things
// https://www.sololearn.com/compiler-playground/W87BXhQSl8Sv/ , https://github.com/guilhermebkel/uno-game/tree/refactor/function-args/.github //
