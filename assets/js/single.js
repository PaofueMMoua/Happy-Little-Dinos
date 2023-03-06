let board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

let dino_1 = document.getElementById("dino_one");
dino_1.addEventListener('click', choose())

let choice = false;

if (choice) {
    choice = true;
    let main = document.getElementById("dino_one")
}
else {
    let main = document.getElementById("dino_two");
}

card = [
    ['', 3],
    ['', 4],
    ['', 5],
    ['', 6],
    ['', 3],
    ['', 3],
    ['', 4],
    ['', 4],
    ['', 5],
    ['', 5],
    ['', 6],
    ['', 6]
]

let cards = card.random;

let card_amount = cards.length

function start_turn() {
    if (card_amount != 5) {
        card++
    }
}
