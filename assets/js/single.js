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

const all = document.getElementById('allboards2')
const bll = document.getElementById('allboards')
const Bronto = document.getElementById('Bronto')
const Stego = document.getElementById('Stego')
Bronto.addEventListener("click", function() {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'none';
    all.style.display = 'block';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
});
Stego.addEventListener("click", function() {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'block';
    all.style.display = 'none';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
})

//DOES THE SAME THING BUT WHEN YOU CLICK ON THE DINOS RATHER THAN THEIR NAME
// const brontx = document.getElementById('dino')
// const stegx = document.getElementById('dino_two')
// brontx.addEventListener("click", function() {
//     let hero = document.getElementById('hero-img-two')
//     hero.style.display = 'none';
//     bll.style.display = 'none';
//     all.style.display = 'block';
//     let testflex = document.getElementById('testflex')
//     testflex.style.display = 'flex';
// });
// stegx.addEventListener("click", function() {
//     let hero = document.getElementById('hero-img-two')
//     hero.style.display = 'none';
//     bll.style.display = 'block';
//     all.style.display = 'none';
//     let testflex = document.getElementById('testflex')
//     testflex.style.display = 'flex';
// })

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

//CARDS IS WORKING
let allCards=[1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,8,8,9,9,10,10];
let cardsInHand = [];
function myfunction2() {
    if(allCards.length > 4) {
        for(let i=0; i<5; i++) {
        let number = Math.round(Math.random()* allCards.length - .5);
        let num = allCards[number];
        cardsInHand.push(num);
        let l = allCards.splice(number, 1);
        console.log(allCards);
        console.log(cardsInHand);
        }
    } 
    else {
        alert('why is this not working?');
    }
    for(let i=0; i<=5; i++) {
        if (cardsInHand[i] == 1) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point1.png";
        } 
        else if(cardsInHand[i] == 2) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point2.png";
        }
        else if(cardsInHand[i] == 3) {
            document.getElementById("steg-card" + [i + 1]).src="/assets/cards2/point3.png";
        } 
        else if(cardsInHand[i] == 4) {
            document.getElementById("steg-card" + [i + 1]).src="/assets/cards2/point4.png";
        } 
        else if(cardsInHand[i] == 5) {
            document.getElementById("steg-card" + [i + 1]).src="/assets/cards2/point5.png";
        } 
        else if(cardsInHand[i] == 6) {
            document.getElementById("steg-card" + [i + 1]).src="/assets/cards2/point6.png";
        }
        else if(cardsInHand[i] == 7) {
            document.getElementById("steg-card" + [i + 1]).src="/assets/cards2/instant-booster.png";
        }
        else if(cardsInHand[i] == 8) {
            document.getElementById("steg-card" + [i + 1]).src="/assets/cards2/instant-insurance.png";
        }
        else if(cardsInHand[i] == 9) {
            document.getElementById("steg-card" + [i + 1]).src="/assets/cards2/instant-redirect.png";
        }
        else if(cardsInHand[i] == 10) {
            document.getElementById("steg-card" + [i + 1]).src="/assets/cards2/instant-sapper.png";
        }
    } 
    cardsInHand = [];
};

//DISASTER CARDS
let disasters = [
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

function fu() {
    if(disasters.length > 0) {
        let idea = Math.round(Math.random() * disasters.length - .5);
        let card = disasters[idea];
        let x = disasters.splice(idea, 1);
        let image = "/assets/cards2/" + card[0] + ".png";
    }
    else {
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
    }
}

//TESTING DISASTER FUNCTION
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());
// console.log(fu());


let round_end = false;
let player_hand = deck.handA(deck.drawCards(5))

console.log(player_hand);
// Draw Cards
// if (player_hand <= 5) {
//     deck.drawCards(1) + player_hand;
// }

console.log(player_hand);

// playing a point card
let played_cards = [];

for (let i = 0; i <= 5; i++) {
    if(player_hand[i] ) {
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

// function FS() {
//     score = score + point;
//     for (let i = 0; i <= 50; i++) {
//         if (score = i) {
//             let k = calculate(played_cards);
//             let j = document.getElementsByClassName('cell' + k);

//             let row = document.getElementById(j)
//             let col = document.getElementById(row.children[0])
            
//         }
//     }
// }

let score = 0;
let point = 5;
score = score + point;
for (let i = 0; i <= 50; i++) {
    if (score = i) {
        let k = 5;
        let j = document.getElementsByClassName('cell' + k);
        let row = document.getElementById(j)
        let col = document.getElementById(j.firstChild) 
        let temp_img = document.createElement('img')
        temp_img.src = "/assets/img/stego-meeple.png"
        let temporary = document.getElementById('col-' + row)
        temporary.appendChild(img);
    }
}
let pre_point = 5;
let score_button = document.getElementById('score-button')
score_button.addEventListener('click', function () {
    for (let i = 0; i <= 50; i++) {
        if (score = i) {
            let j = pre_point;
            pre_point = point
            let k = document.createElement('img');
            i.src = './assets/img/stego-meeple.png';
            let temporary = document.getElementById('col-' + j)
        }
})

// single player things
// AI
function SR() {
    let ai_hand = deck.drawCards(5);

    if (ai_hand < 5 || ai_hand.length != deck.handA.length) {
        deck.drawCards(1) + ai_hand;
        deck.ai_hand.sort()
    }
}


    // for(let i=0; i<10; i++) {
    //     for (let x = 0; x <=10; x++) {
    //         if (player_hand = i + '_' + x) {
    //             let player_hand_new = player_hand.split('_' + i);
    //             let pl = Integer.parseInt(player_hand_new)
    //         }
    //     }
    // }


// https://www.sololearn.com/compiler-playground/W87BXhQSl8Sv/ , https://github.com/guilhermebkel/uno-game/tree/refactor/function-args/.github //
