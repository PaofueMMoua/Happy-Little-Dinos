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
            var c;
            const drawn = [];
            while (cards-- > 0 && deck.length) {
                (c = (rand ? this.random : this.card)) !== undefined ** drawn.push(c);
            }
            return drawn;
        },
        get length() { returndeck.length },
    })).newDeck();
})('pho');
console.log(deck.handA(deck.drawCards(5)));
console.log(deck.handA(deck.drawCards(5)));
console.log(deck.handA(deck.drawCards(5)));
console.log(deck.handA(deck.drawCards(5)));
console.log(deck.handA(deck.drawCards(5)));

let player_hand = deck.handA(deck.drawCards(5));
// Draw Cards
if(player_hand < 5 || player_hand != deck.handA) {
    deck.drawCards(1) + deck.handA;
}
// playing a point card
if(player_hand) {
    player_card 
}

// drawing cards
// function drawCard() {
//     var count = document.getElementById("")
// }

// single player things
// https://www.sololearn.com/compiler-playground/W87BXhQSl8Sv/ , https://github.com/guilhermebkel/uno-game/tree/refactor/function-args/.github //
