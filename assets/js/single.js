let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let score = 0;
let temp_points = 0;
let points = 0;

const all = document.getElementById('allboards2')
const bll = document.getElementById('allboards')
const Bronto = document.getElementById('Bronto')
const Stego = document.getElementById('Stego')
let playerOne = '';
let playerTwo = '';

//Switch board position when click on dinosaur name
Bronto.addEventListener("click", function () {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'none';
    all.style.display = 'block';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
    playerOne = "bronto";
    playerTwo = "stego";
});
Stego.addEventListener("click", function () {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'block';
    all.style.display = 'none';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
    playerOne = "stego";
    playerTwo = "bronto";
})

//Switch board position when click on dinosuar image
const brontx = document.getElementById('dino')
const stegx = document.getElementById('dino_two')
brontx.addEventListener("click", function () {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'none';
    all.style.display = 'block';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
    playerOne = "bronto";
    playerTwo = "stego";
});
stegx.addEventListener("click", function () {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'block';
    all.style.display = 'none';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
    playerOne = "stego";
    playerTwo = "bronto";
});

// variables for cards
let deckCount = 0;
let allCards = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
let cardsInHand = [];
let tempCards = [];
let opp_hand = [];

//DRAWING A HAND
//automates drawing new hand and alerts player when it is drawn OR alert users when they can draw a new hand - called in function directDisaster()
function vivaVida() {
    if (tempCards.length == 0 || !tempCards.includes(1) && !tempCards.includes(2) && !tempCards.includes(3) && !tempCards.includes(4) && !tempCards.includes(5) && !tempCards.includes(6)) {
        alert("draw a new hand from Main Deck");
        //  alert("drawing new deck");
        //  myfunction2();
    }
}

// function for shuffling and distributing cards to player one - 
function myfunction2() {
    cardsInHand = [];
    tempCards = [];
    //make text "click main deck to reveal your card" disappear when main deck is clicked
    let f = document.getElementById("reveal")
    f.style.display = 'none';
    // establishing player one's hand
    if (allCards.length > 4) {
        for (let i = 0; i < 5; i++) {
            let number = Math.round(Math.random() * allCards.length - .5);
            let num = allCards[number];
            tempCards.push(num);
            cardsInHand.push(num);
            allCards.splice(number, 1);
            console.log(allCards);
            console.log(cardsInHand);
        }
    }
    // If deck is out of cards, create new deck then establish player one's hand
    else {
        alert('Shuffling Cards');
        allCards = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, , 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
        for (let i = 0; i < 5; i++) {
            let number = Math.round(Math.random() * allCards.length - .5);
            let num = allCards[number];
            tempCards.push(num);
            cardsInHand.push(num);
            allCards.splice(number, 1);
            console.log(allCards);
            console.log(cardsInHand);
        }
    }
// Set all images for player one's hand 
    for(let i = 0; i<=5; i++) {
        for(let m=1; m<=10; m++) {
            if(cardsInHand[i] == m) {
                document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point" + m + ".png";
            }
        }
    }
};

let highNum = [];
let lowNum = [];
// This is how you break javascript.
function opp_myfunction2() {
    opp_hand = [];
    if(allCards.length > 4) {
        for(let i=0; i<5; i++) {
            let number = Math.round(Math.random() * allCards.length - .5);
            let num = allCards[number];
            opp_hand.push(num);
            allCards.splice(number, 1);
            console.log("opponent's hand " + opp_hand);
        }
    }
    else {
        alert('Shuffling Cards');
        allCards = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, , 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]; 
        for(let i=0; i<5; i++) {
            let number = Math.round(Math.random() * allCards.length - .5);
            let num = allCards[number];
            opp_hand.push(num);
            allCards.splice(number, 1);
            console.log("opponent's hand " + opp_hand);
        }
    }
}

function opp_play() {
    for(let i=0; i<5; i++) {
        if(opp_hand[i] >= 7 ) {
            highNum[highNum.length] = opp_hand[i];
        }
        else if (opp_hand[i] <= 6) {
            lowNum[lowNum.length] = opp_hand[i];
        }
    }

    console.log(highNum);
    console.log(lowNum);
    let highIndex = Math.round(Math.random() * highNum.length - .5);
    let lowIndex = Math.round(Math.random() * lowNum.length - .5);

    if(lowNum.length < 1) {
        opp_myfunction2();
        highNum = [];
        lowNum = [];
    } else {
        document.getElementById("ai_pointCenter").src = "/assets/cards2/point" + lowNum[lowIndex] + ".png";
        let l = opp_hand.indexOf(lowNum[lowIndex]);
        opp_hand.splice(l, 1);
        opp_tempPoints = lowNum.splice(lowIndex, 1);
        console.log(opp_hand);
    }

    if(highNum.length >= 1) {
        document.getElementById("ai_instantCenter").src = "/assets/cards2/point" + highNum[highIndex] + ".png"
        opp_tempInstant = highNum.splice(highIndex, 1);
        let p = opp_hand.indexOf(highNum[highIndex]);
        opp_hand.splice(p, 1);
        console.log(opp_hand);
    } 
    else {
        document.getElementById("ai_instantCenter").src = "/assets/cards2/main-empty.png"
    }
}

//CALCULATING WINNER 
let totalPoints = 0;
let instantPoints = 0;
let tempInstant = 0;
let tempPoints = 0;
let color
let played = [];
let opp_instantPoints = 0;
let opp_tempPoints = 0;
let opp_totalPoints = 0;
let opp_tempInstant = 0;
let tempTotal = 0;
let opp_tempTotal = 0;

//calculate player one total points for the round - called in HTML #playButton
function calculatePoint() {
    // opp_tempTotal = opp_totalPoints;
    // tempTotal = totalPoints;
    // console.log(opp_tempTotal);
    // console.log(tempTotal);
    opp_play(); 
    // pc_count = 0;
    // ic_count = 0;
    tempPoints = tempPoints + instantCalc() + instantSubtract;
    opp_tempPoints = opp_tempPoints + opp_instantPlay() + opp_instantSubtract;
    console.log(tempPoints);
    console.log(opp_tempPoints);
    // tempPoints = tempPoints + instantPoints + instantSubtract;
    // directDisaster();
    totalPoints = totalPoints + tempPoints;
    opp_totalPoints = opp_totalPoints + opp_tempPoints[0];
    setTimeout(directDisaster, 1000);
    setTimeout(disposeCards, 2000);
}
let instantSubtract = 0;
let opp_instantSubtract = 0;
function opp_instantPlay() {
    if (opp_tempInstant == 7) {
        opp_instantPoints = 2;
    }
    else if (opp_tempInstant == 10) {
        opp_instantSubtract = -2;
        instantPoints = 0;
    } 
    else {
        instantPoints = 0;
    }
}

// checks if instant cards will affect player one's results for the round - called in function calculatePoint()
function instantCalc() {
    if (tempInstant == 7) {
        return instantPoints = 2;
    }
    else if (tempInstant == 10) {
        opp_instantPoints = -2;
        return instantPoints = 0;
    } 
    else {
        return instantPoints = 0;
    }
}

// Only let users draw cards if they have no cards in their hand or only instant cards - Called in html draw-deck
function testas() {
    console.log(tempCards);
    if (!tempCards.includes(1) && !tempCards.includes(2) && !tempCards.includes(3) && !tempCards.includes(4) && !tempCards.includes(5) && !tempCards.includes(6)) {
        myfunction2();
        onlyFirst();
    }
    else {
        alert("You cannot draw cards at the moment");
    }
}

// Set round 1 disaster card to random and set opponent's hand (only used once) - called in testas();
let v = 0;
function onlyFirst() {
    if(v == 0) {
        opp_myfunction2();
        fu();
        v = 1;
    }
}

//PLAY CARDS IN THE CENTER
// Sets center image if player one chooses to play card #1 (furthest to the left)
function playIt_1() {
    if (cardsInHand[0] >= 7) {
        if (ic_count == 0) {
            // console.log(tempCards);
            document.getElementById("instantCenter").src = "/assets/cards2/point" + cardsInHand[0] + ".png";
            document.getElementById("steg-card1").src = "";
            let index = tempCards.indexOf(cardsInHand[0]);
            tempCards.splice(index, 1);
            played.push(cardsInHand[0]);
            tempInstant = cardsInHand[0];
            cardsInHand[0] = 0;
            console.log(cardsInHand);
            ic_count = ic_count + 1;
            console.log(ic_count);
        }
        else {
            alert("you cannot play another instant card");
        }
    }
    else if (cardsInHand[0] <= 6) {
        if (pc_count == 0) {
            // console.log(tempCards);
            document.getElementById("pointCenter").src = "/assets/cards2/point" + cardsInHand[0] + ".png";
            document.getElementById("steg-card1").src = "";
            console.log("/assets/cards2/point" + cardsInHand[0] + ".png");
            let index = tempCards.indexOf(cardsInHand[0]);
            played.push(cardsInHand[0]);
            tempPoints = cardsInHand[0];
            tempCards.splice(index, 1);
            cardsInHand[0] = 0;
            console.log(cardsInHand);
            pc_count = pc_count + 1;
            console.log(pc_count);
        }
        else {
            alert("you cannot play another point card");
        }
    }
    check();
    // drawing_cards();
};

// Sets center image if player one chooses to play card #2
function playIt_2() {
    if (cardsInHand[1] >= 7) {
        if (ic_count == 0) {
            document.getElementById("instantCenter").src = "/assets/cards2/point" + cardsInHand[1] + ".png";
            document.getElementById("steg-card2").src = "";
            let index = tempCards.indexOf(cardsInHand[1]);
            played.push(cardsInHand[1]);
            tempInstant = cardsInHand[1];
            tempCards.splice(index, 1);
            cardsInHand[1] = 0;
            console.log(cardsInHand);
            ic_count = ic_count + 1;
            console.log(ic_count);
        }
        else {
            alert("you cannot play another instant card");
        }
    }
    else if (cardsInHand[1] <= 6) {
        if (pc_count == 0) {
            document.getElementById("pointCenter").src = "/assets/cards2/point" + cardsInHand[1] + ".png";
            document.getElementById("steg-card2").src = "";
            console.log("/assets/cards2/point" + cardsInHand[1] + ".png");
            let index = tempCards.indexOf(cardsInHand[1]);
            played.push(cardsInHand[1]);
            tempPoints = cardsInHand[1];
            tempCards.splice(index, 1);
            cardsInHand[1] = 0;
            console.log(cardsInHand);
            pc_count = pc_count + 1;
            console.log(pc_count);
        }
        else {
            alert("you cannot play another point card");
        }
    }
    check();
    // drawing_cards();
};

// Sets center image if player one chooses to play card #3
function playIt_3() {
    if (cardsInHand[2] >= 7) {
        if (ic_count == 0) {
            document.getElementById("instantCenter").src = "/assets/cards2/point" + cardsInHand[2] + ".png";
            document.getElementById("steg-card3").src = "";
            let index = tempCards.indexOf(cardsInHand[2]);
            played.push(cardsInHand[2]);
            tempInstant = cardsInHand[2];
            tempCards.splice(index, 1);
            cardsInHand[2] = 0;
            console.log(cardsInHand);
            ic_count = ic_count + 1;
        }
        else {
            alert("you cannot play another instant card");
        }
    }
    else if (cardsInHand[2] <= 6) {
        if (pc_count == 0) {
            document.getElementById("pointCenter").src = "/assets/cards2/point" + cardsInHand[2] + ".png";
            document.getElementById("steg-card3").src = "";
            console.log("/assets/cards2/point" + cardsInHand[2] + ".png");
            let index = tempCards.indexOf(cardsInHand[2]);
            played.push(cardsInHand[2]);
            tempPoints = cardsInHand[2];
            tempCards.splice(index, 1);
            cardsInHand[2] = 0;
            console.log(cardsInHand);
            pc_count = pc_count + 1;
        }
        else {
            alert("you cannot play another point card")
        }
    }
    check();
    // drawing_cards();
};

// Sets center image if player one chooses to play card #4
function playIt_4() {
    if (cardsInHand[3] >= 7) {
        if (ic_count == 0) {
            document.getElementById("instantCenter").src = "/assets/cards2/point" + cardsInHand[3] + ".png";
            document.getElementById("steg-card4").src = "";
            let index = tempCards.indexOf(cardsInHand[3]);
            played.push(cardsInHand[3]);
            tempInstant = cardsInHand[3];
            tempCards.splice(index, 1);
            cardsInHand[3] = 0;
            console.log(cardsInHand);
            ic_count = ic_count + 1;
        }
        else {
            alert("you cannot play another instant card");
        }
    }
    else if (cardsInHand[3] <= 6) {
        if (pc_count == 0) {
            document.getElementById("pointCenter").src = "/assets/cards2/point" + cardsInHand[3] + ".png";
            document.getElementById("steg-card4").src = "";
            console.log("/assets/cards2/point" + cardsInHand[3] + ".png");
            let index = tempCards.indexOf(cardsInHand[3]);
            played.push(cardsInHand[3]);
            tempPoints = cardsInHand[3];
            tempCards.splice(index, 1);
            cardsInHand[3] = 0;
            pc_count = pc_count + 1;
        }
        else {
            alert("you cannot play another point card");
        }

    }
    check();
    // drawing_cards();
};

// Sets center image if player one chooses to play card #5 (furthest to the right)
function playIt_5() {
    if (cardsInHand[4] >= 7) {
        if (ic_count == 0) {
            document.getElementById("instantCenter").src = "/assets/cards2/point" + cardsInHand[4] + ".png";
            document.getElementById("steg-card5").src = "";
            let index = tempCards.indexOf(cardsInHand[4]);
            played.push(cardsInHand[4]);
            tempInstant = cardsInHand[4];
            tempCards.splice(index, 1);
            cardsInHand[4] = 0;
            ic_count = ic_count + 1;
        }
        else {
            alert("you cannot play another instant card");
        }
    }
    else if (cardsInHand[4] <= 6) {
        if (pc_count == 0) {
            document.getElementById("pointCenter").src = "/assets/cards2/point" + cardsInHand[4] + ".png";
            document.getElementById("steg-card5").src = "";
            console.log("/assets/cards2/point" + cardsInHand[4] + ".png");
            let index = tempCards.indexOf(cardsInHand[4]);
            played.push(cardsInHand[4]);
            tempPoints = cardsInHand[4];
            tempCards.splice(index, 1);
            cardsInHand[4] = 0;
            pc_count = pc_count + 1;
        }
        else {
            alert("you cannot play another point card");
        }
    }
    check();
    // drawing_cards();
};

//PLAY BUTTON APPEARS
let pc_count = 0;
let ic_count = 0;
let play = document.getElementById("playButton");

//play button functions (change color when hover + appear when player plays a point card) - called in playIt functions
function check() {
    if (pc_count == 1) {
        play.style.backgroundColor = '#F27F77';
        play.style.cursor = 'pointer';
    } 
    else {
        play.style.display = 'hidden';
    }
}

//play button changes color to green when hovered over - called in HTML #playButton
function hoverIn(x) {
    if (pc_count == 1) {
        x.style.backgroundColor = '#16d26a';
        play.style.cursor = 'pointer';
    }
    else {
        x.style.display = 'hidden';
    }

}

//play button changes color to red when hovered out - called in HTML #playButton
function hoverOut(x) {
    if (pc_count == 1) {
        x.style.backgroundColor = '#F27F77';
    }
    else {
        x.style.display = 'hidden';
    }
}

//DISASTER CARDS
let player_disCount = 0;
let opp_disCount = 0;
let card;
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

//randomnize disaster card that shows on screen - called in function onlyFirst(), lose(), win(), directDisaster() 
function fu() {
    if (disasters.length > 0) {
        let idea = Math.round(Math.random() * disasters.length - .5);
        card = disasters[idea];
        color = card[1];
        disasters.splice(idea, 1);
        document.getElementById("emptyDisaster").src = "/assets/cards2/" + card[0] + ".png";
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

//Determines which board the disaster card goes to
// If player one loses the game, the disaster card will be assigned to player one. Visa Versa. - called in function calculatePoint()
function directDisaster() {
    // let opp_totalPoints = Math.round(Math.random() * 10);
    console.log("opp points =" + opp_tempPoints);
    console.log("ur points =" + tempPoints);
    if(opp_tempInstant == 9 && tempInstant == 9) {
        alert("Disaster card is discarded");
    }
    else if(opp_tempInstant == 9) {
        lose();
    }
    else if(tempInstant == 9) {
        win();
    }
    else {
        if (tempPoints < opp_tempPoints) {
            if(tempInstant == 8) {
                alert("Disaster card is discarded");
                fu();
            }
            else {
                lose();
            }
        opp_Meeple_Move();
        }
        else if(tempPoints > opp_tempPoints) {
            if(opp_tempInstant == 8) {
                alert("Disaster card is discarded");
                fu();
            }
            else {
                win();
            }
            Meeple_Move();
        } 
        else if(tempPoints == opp_tempPoints) {
            alert("tie");
            tempPoints = 0;
            opp_tempPoints = [0];
            fu();
        } 
    }
    vivaVida();
}

function Meeple_Move() {
    let t_t_p = totalPoints;
    if (player_disCount < 0) {
        player_disCount = 0;
        t_p = totalPoints - 1;
        if (playerOne = "bronto") {
            let f = document.getElementsByClassName('cell_b_' + t_p);
            let h = document.getElementsByClassName('cell_b_' + t_t_p);
            f.document.createElement('img').src = "./assets/img/bronto-meeple.png";
        }
        else if (playerOne = "stego") {
            let f = document.getElementsByClassName('cell_b_' + t_p);
            let h = document.getElementsByClassName('cell_b_' + t_t_p);
            f.document.createElement('img').src = "./assets/img/stego-meeple.png";
        }
        else {
            alert('error dino')
        }
    } else {
        if (playerOne = "bronto") {
            let f = document.getElementsByClassName('cell_b_' + t_p);
            let h = document.getElementsByClassName('cell_b_' + t_t_p);
            f.document.createElement('img').src = "./assets/img/bronto-meeple.png";
        }
        else if (playerOne = "stego") {
            let f = document.getElementsByClassName('cell_b_' + t_p);
            let h = document.getElementsByClassName('cell_b_' + t_t_p);
            f.document.createElement('img').src = "./assets/img/stego-meeple.png";
        }
        else {
            alert('error dino 2')
        }
    }
    
    player_hand.push();
} 

function opp_Meeple_Move() {
    let opp_temp_tempPoints = opp_totalPoints;
    if (player_disCount < 0) {
        player_disCount = 0;
        opp_totalPoints = opp_totalPoints - 1 ;
    } else {
        if (playerTwo == "bronto") {
            let f = document.getElementsByClassName('cell_a_' + opp_totalPoints);
            const j = document.createElement('img')
            let h = document.getElementsByClassName('cell_a_' + opp_temp_tempPoints);
            j.src = "/assets/img/bronto-meeple.png";
            f.appendChild(j)
        }
        else if (playerTwo == "stego") {
            let f = document.getElementsByClassName('cell_a_' + opp_totalPoints);
            const j = document.createElement('img')
            let h = document.getElementsByClassName('cell_a_' + opp_temp_tempPoints);
            j.src = "/assets/img/stego-meeple.png";
            f.appendChild(j);
        }
    }
} 
//If player one loses disaster card will be assigned to player one - called in function directDisaster()
function lose() {
    if (playerOne == "bronto") {
        for(let i = 0; i < 5; i++) {
            if(player_disCount == i) {
                document.getElementById("brontoDisaster" + (i + 1)).src = "/assets/img/" + color + "-disaster.png";
            }
        }
        player_disCount = player_disCount + 1;

    }
    else if(playerOne == "stego") {
        for(let i = 0; i < 5; i++) {
            if(player_disCount == i) {
                document.getElementById("stegoDisaster" + (i + 1)).src = "/assets/img/" + color + "-disaster.png";
                console.log("stegoDisaster" + (i + 1));
            }
        } 
        player_disCount = player_disCount + 1;
    }
    fu();
}

//If player one wins disaster card will be assigned to player two - called in function directDisaster()
function win() {
    if (playerOne == "stego") {
        for(let i = 0; i < 5; i++) {
            if(opp_disCount == i) {
                document.getElementById("oppBronto" + (i + 1)).src = "/assets/img/" + color + "-disaster.png";
            }
        }
        opp_disCount = opp_disCount + 1;

    }
    else if(playerOne == "bronto") {
        for(let i = 0; i < 5; i++) {
            if(opp_disCount == i) {
                document.getElementById("oppSteg" + (i + 1)).src = "/assets/img/" + color + "-disaster.png";
                console.log("stegoDisaster" + (i + 1));
            }
        } 
        opp_disCount = opp_disCount + 1;
    }
    fu();
}

function disposeCards() {
    pc_count = 0;
    ic_count = 0;
    if(pc_count == 0 && ic_count == 0) {
    document.getElementById("instantCenter").src = "/assets/cards2/main-empty.png";
    document.getElementById("pointCenter").src = "/assets/cards2/main-empty.png";
    document.getElementById("ai_pointCenter").src = "/assets/cards2/main-empty.png";
    document.getElementById("ai_instantCenter").src = "/assets/cards2/main-empty.png";
    }
    else {
        alert("you cannot dispose cards at the moment");
    }  
}

//AI CODE
let round_end = false;
let player_hand = deck.handA(deck.drawCards(5))

// playing a point card
let played_cards = [];

// function drawing_cards() {
//     if (cardsInHand > 5) {
//         let n = myfunction2();
//         n.splice(0, (a.length - 1))
//         cardsInHand = cardsInHand + n;
//     }
// }

// calc player card
// function calculate() {
//     for (let i = 0; i <= 2; i++) {
//         if (played_cards = number) {
//             if (played_cards[i] = i) {
//                 temp_points = temp_points + i;
//             }
//         }
//     }
// }

// score

// Update score and check for cell color change
score += point;
for (let i = 0; i <= 50; i++) {
    if (score === i) {
        let k = 5;
        let j = document.getElementsByClassName('cell' + k);
        let row = document.getElementById(j);
        let col = document.getElementById(j.firstChild);
        let temp_img = document.createElement('img');
        temp_img.src = "/assets/img/stego-meeple.png";
        let temporary = document.getElementById('col-' + row);
        temporary.appendChild(temp_img);
    }
}

// Calculate AI average hand value
let ai_avg = (ai_hand[1] + ai_hand[2] + ai_hand[3] + ai_hand[4] + ai_hand[5] + ai_hand[6]) / ai_hand.length;




// single player things
// AI
let ai_hand = ai_myfunction2();
let ai_cardsInHand = []
function ai_card_choice() {
    for (let i = 0; i <= 2; i++) {
        for (let x = 0; x <= 6; i++) {
            if (ai_cardsInHand[i] == x) {
                ai_played_cards = ai_cardsInHand[i];
                document.getElementById('');
            }
        }
    }
}

function SR() {
    if (ai_hand < 5) {
        deck.drawCards(1) + ai_hand;
        deck.ai_hand.sort()
    }
}

ai_cardsInHand = [];
function ai_myfunction2() {
    let f = document.getElementById("reveal")
    f.style.display = 'none';
    if (ai_allCards.length > 4) {
        for (let i = 0; i < 5; i++) {
            let number = Math.round(Math.random() * ai_allCards.length - .5);
            let num = ai_allCards[number];
            ai_cardsInHand.push(num);
            let l = ai_allCards.splice(number, 1);
            console.log(ai_allCards);
            console.log(ai_cardsInHand);
        }
    }
    else {
        alert('Shuffling Cards');
        ai_allCards = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
        for (let i = 0; i < 5; i++) {
            let number = Math.round(Math.random() * ai_allCards.length - .5);
            let num = allCards[number];
            ai_tempCards.push(num);
            ai_cardsInHand.push(num);
            ai_allCards.splice(number, 1);
            console.log(allCards);
            console.log(cardsInHand);
        }
    }
};

function ai_testas() {
    console.log(tempCards);
    if (!tempCards.includes(1) && !tempCards.includes(2) && !tempCards.includes(3) && !tempCards.includes(4) && !tempCards.includes(5) && !tempCards.includes(6)) {
        ai_myfunction2();
    }
    else {
        alert("You cannot draw cards at the moment");
        console.log("trash");
    }
}


let ai_ab = ai_cardsInHand[0];

let ai_played = [];
let ai_tempCards = [];
let ai_tempInstant = 0;
let ai_ic_count = 0;
let ai_pc_count = 0
let ai_totalPoints = 0;
ai_temppoints = 0;

function ai_playIt() {
    let x = Math.random(1, 5);
        if (ai_cardsInHand[x] >= 7) {
            document.getElementById('ai_instantCenter').src = '/assets/cards2/point' + ai_cardsInHand[x] + '.png';
            document.getElementById('Bronto-card' + x).src = '';
            let index = ai_tempCards.indexOf(ai_cardsInHand[x]);
            ai_tempCards.splice(index, 1);
            ai_played.push(ai_cardsInHand[x]);
            ai_tempInstant = ai_cardsInHand[x];
            ai_cardsInHand[x] = 0;
            ai_ic_count = ai_ic_count + 1;
        }
    else if (ai_cardsInHand[x] <= 6) {
        if (ai_pc_count == 0) {
            document.getElementById("ai_pointCenter").src = "/assets/cards2/point" + ai_cardsInHand[x] + ".png";
            document.getElementById("Bronto-card" + x).src = "";
            console.log("/assets/cards2/point" + ai_cardsInHand[x] + ".png");
            let index = ai_tempCards.indexOf(ai_cardsInHand[x]);
            ai_played.push(ai_cardsInHand[x]);
            ai_tempPoint = ai_cardsInHand[x];
            ai_tempCards.splice(index, 1);
            ai_cardsInHand[x] = 0;
            ai_pc_count = ai_pc_count + 1;
        }
        let m = Math.random(1, 5);
        if (ai_cardsInHand[m] >= 7) {
            document.getElementById('ai_instantCenter').src = '/assets/cards2/point' + ai_cardsInHand[m] + '.png';
            document.getElementById('Bronto-card' + m).src = '';
            let index = ai_tempCards.indexOf(ai_cardsInHand[m]);
            ai_tempCards.splice(index, 1);
            ai_played.push(ai_cardsInHand[m]);
            ai_tempInstant = ai_cardsInHand[m];
            ai_cardsInHand[m] = 0;
            ai_ic_count = ai_ic_count + 1;
        }
    }
};
console.log(ai_cardsInHand);

// Get the meeple and board elements from the DOM 
const meeple = document.getElementById('meeple');


// Set the initial position of the meeple

let cellWidth = 30; 
let cellHeight = 30; 
meeple.style.top = `${y * cellHeight}px`;
meeple.style.left = `${x * cellWidth}px`; 

// Function to move the meeple to a new position
function moveMeeple(newX, newY) {
  // Calculate the new position of the meeple 
    x = newX;
    y = newY;
    meeple.style.top = `${y * cellHeight}px`;
    meeple.style.left = `${x * cellWidth}px`;
    
}

// Example usage: move the meeple to position (2, 3)
moveMeeple(2, 3);



// meeple = document . .. ('cell_' + x );
// x = score + point - temp_disaster_amount + disaster_positive - disaster_negative

