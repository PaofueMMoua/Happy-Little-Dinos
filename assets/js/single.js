// Needed things
// board
// Make 2 boards cause of each dinosaur one for bronto andone for stego.
let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
// let score = 0;
// let temp_points = 0;

const a = document.getElementById('allboards2')
const b = document.getElementById('allboards')
const m = document.getElementById('Bronto')
const n = document.getElementById('Stego')
m.addEventListener("click", function(){
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    b.style.display = 'none';
    a.style.display = 'block';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
});
n.addEventListener("click", function() {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    b.style.display = 'block';
    a.style.display = 'none';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
})
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
        set random(id) { !deck.includes(id) && deck.splice(randIdx(), 0, id) },
        get card() { return deck.pop() },
        get random() { return deck.length ? deck.splice(randIdx(), 1)[0] : undefined },
        ai_hand(ai_hand) { return ai_hand.map(cardId => this.nameCard(cardId)).join(', ') },
        set card(id) { !deck.includes(id) && deck.push(id) },
        set random(id) { !deck.includes(id) && deck.splice(randIdx(), 0, id) },
        get card() { return deck.pop() },
        get random() { return deck.length ? deck.splice(randIdx(), 1)[0] : undefined },
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

let player_hand = deck.handA(deck.drawCards(5)).sort;

// Draw Cards
if (player_hand <= 5) {
    deck.drawCards(1) + player_hand;
}

// playing a point card
let played_cards = [];

// for (let i = 0; i <= 5; i++) {
//     if(player_hand[i] ) {
//         played_cards = player_hand[i];
//         player_hand[i].remove;
//     }
// }

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
    for (let i = 0; i <= 50; i++) {
        if (score = i) {
            let k = calculate(played_cards);
            let j = document.getElementsByClassName('cell' + k);
            // change the board position.
            let row = document.getElementById(j)
            let col = document.getElementById(row.children[0])
            board[row][col];
        }
    }
}

// single player things
// AI
function SR() {
    let ai_hand = deck.drawCards(5);

    if (ai_hand < 5 || ai_hand.length != deck.handA.length) {
        deck.drawCards(1) + ai_hand;
        deck.ai_hand.sort()
    }
}

function test () {
    for(let i=0; i<=4; i++) {
        console.log ("steg-card" + [i + 1]);
    }
}
test();

//cardInHand = [1,5,4,2,3];
//let bv = document.getElementsByClassName("draw-deck");
//bv.addEventListener('click', changeImage);
//
//function changeImage (cardInHand) {
//    for(let i=0; i<=5; i++) {
//        if (cardInHand[i] = 1) {
//            return document.getElementById("steg-card" + [i + 1]).src = "point1.png";
//        } 
//        else if(cardInHand[i] = 2) {
//            return document.getElementById("steg-card" + [i + 1]).src = "point2.png";
//        }
//        else if(cardInHand[i] = 3) {
//            return document.getElementById("steg-card" + [i + 1]).src="point3.png";
//        } 
//        else if(cardInHand[i] = 4) {
//            return document.getElementById("steg-card" + [i + 1]).src="point4.png";
//        } 
//        else if(cardInHand[i] = 5) {
//            return document.getElementById("steg-card" + [i + 1]).src="point5.png";
//        } 
//        else if(cardInHand[i] = 6) {
//            return document.getElementById("steg-card" + [i + 1]).src="point6.png";
//        }
//        else if (cardInHand[i] = "Disaster Insurance") {
//            return document.getElementById("steg-card" + [i + 1]).src="point2.png";
//        }
//    }
//}

let disasters = ["disaster-beach", "disaster-burn", "disaster-cannibal", "disaster-circle", "disaster-cold", "disaster-empty", "disaster-ghosted", "disaster-leaf", "disaster-personal", "disaster-sad", "disaster-shark", "disaster-spa",
"disaster-squirrely", "disaster-stomped", "disaster-trapped"];

disasters = [
    ["disaster-beach", "red"],
    ["disaster-burn", "blue"],
    ["disaster-cannibal", "red"],
    ["disaster-circle", "blue"],
    ["disaster-cold", "green"],
    ["disaster-ghosted", "blue"],
    ["disaster-leaf", "green"],
    ["disaster-personal", "green"],
    ["disaster-sad", "blue"],
    ["disaster-shark", "red"],
    ["disaster-spa", "green"],
    ["disaster-squirrely", "red"],
    ["disaster-stomped", "red"],
    ["disaster-trapped", "green"]
]

cardInHand = [1, 2, 3, 4, 5];
function changeImage() {
    for (let i = 0; i <= 5; i++) {
        if (cardInHand[i] = 1) {
            return document.getElementById("steg-card" + [i]).src = "point1.png";
        }
        else if (cardInHand[i] = 2) {
            return document.getElementById("steg-card" + [i]).src = "point2.png";
        }
    }
}

// https://www.sololearn.com/compiler-playground/W87BXhQSl8Sv/ , https://github.com/guilhermebkel/uno-game/tree/refactor/function-args/.github //
