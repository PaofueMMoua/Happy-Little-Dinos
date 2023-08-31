import {joinRoom, seldId} from 'https://cdn.skypack.dev/trystero/ifps';
let joinroom;
let prevarr;
let cookie = document.cookie;

let original_player;
let second_player;

window.onload = (event) => {
    prevarr = cookie.split(' ');
    joinroom = prevarr[0];
    playername = prevarr[2];
    room = joinroom;
    if (prevarr[1] == 'origin') [
        original_player = true
    ]
    if (prevarr[1] == 'untrue') {
        original_player = false
    }
}

const config = {appId: 'happy-dinos'};
let room = joinRoom(config, `${joinroom}`);

let onjoincondition = false;
let [sendplayers, getplayers] = room.makeAction('dinos');

room.onPeerJoin(peerId => (console.log(`${peerId} joined the room`, sendplayers({players: `${playername}`})), onjoincondition = peerId));
room.onPeetLeave(peerId => (console.log(`${peerId} left the room`)));

onjoin();

function onjoin() {
    if (onjoincondition === false) {
        windows.setTimeout(onjoin, 1000);
    }
    else {
        document.getElementById('join').remove();
        return;
    }
}


let player2;


// Essentially single player after but will need some changes to make it work.

let score = 0;
let temp_points = 0;
let points = 0;

const all = document.getElementById('allboards2')
const bll = document.getElementById('allboards')
const Bronto = document.getElementById('Bronto')
const Stego = document.getElementById('Stego')
let playerOne = '';
let playerTwo = '';
const gone = document.getElementById('gone')

//Switch board position when click on dinosaur name
Bronto.addEventListener("click", function () {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'none';
    all.style.display = 'block';
    gone.style.display = 'none';
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
    gone.style.display = 'none';
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
    if(opp_hand.length == 0 || !opp_hand.includes(1) && !opp_hand.includes(2) && !opp_hand.includes(3) &&!opp_hand.includes(4) && !opp_hand.includes(5) && !opp_hand.includes(6)) {
        opp_myfunction2();
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

// shuffling and distributing cards to player two aka the ai or opponent
function opp_myfunction2() {
    opp_hand = [];
    if(allCards.length > 4) {
        for(let i=0; i<5; i++) {
            let number = Math.round(Math.random() * allCards.length - .5);
            let num2 = allCards[number];
            opp_hand.push(num2);
            allCards.splice(number, 1);
            console.log("opponent's hand " + opp_hand);
        }
    }
    else {
        alert('Shuffling Cards');
        allCards = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, , 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]; 
        for(let i=0; i<5; i++) {
            let number = Math.round(Math.random() * allCards.length - .5);
            let num2 = allCards[number];
            opp_hand.push(num2);
            allCards.splice(number, 1);
            console.log("opponent's hand " + opp_hand);
        }
    }
}

//Determines what opponent/ai places down in the center when users press the play button - called in calculatePoint
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
        // opp_tempInstant = highNum.splice(highIndex, 1);
        v = highNum.splice(highIndex, 1);
        opp_tempInstant = v[0];
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
    instantSubtract = 0;
    opp_instantSubtract = 0;
    opp_tempTotal = opp_totalPoints;
    tempTotal = totalPoints;
    if(pc_count >= 1) {
        opp_play(); 
        instantCalc();
        opp_instantCalc();
        // pc_count = 0;
        // ic_count = 0;
        tempPoints = tempPoints + instantPoints - instantSubtract 
        opp_tempPoints = opp_tempPoints[0] + opp_instantPoints - opp_instantSubtract;
        console.log( "opp " + opp_tempPoints);
        console.log("urs " + tempPoints);
        totalPoints = totalPoints + tempPoints;
        opp_totalPoints = opp_totalPoints + opp_tempPoints;
        setTimeout(directDisaster, 1000);
        setTimeout(disposeCards, 3100);
    } else {
        alert("Place a point card to play");
    }
    
}
let instantSubtract = 0;
let opp_instantSubtract = 0;

//determines if opponent/ai should add 2 points to their score or subtract 2 points from user score depending on the instant card they play - called in calculatePoint
function opp_instantCalc() {
    if (opp_tempInstant == 7) {
        opp_instantPoints =  2;
        instantSubtract = 0;
    }
    else if (opp_tempInstant == 10) {
        instantSubtract = 2;
        opp_instantPoints = 0;
    } 
    else {
        instantSubtract = 0;
        opp_instantPoints = 0;
    }
}

// checks if instant cards will affect player one's results for the round - called in function calculatePoint()
function instantCalc() {
    if (tempInstant == 7) {
        instantPoints = 2;
        opp_instantSubtract = 0;
    }
    else if (tempInstant == 10) {
        opp_instantSubtract = 2;
        instantPoints = 0;
    } 
    else {
        opp_instantSubtract = 0;
        instantPoints = 0;
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
// Play another instant card
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
        play.style.color = 'black';
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
        x.style.color = "black";
    }
    else {
        x.style.display = 'hidden';
    }

}

//play button changes color to red when hovered out - called in HTML #playButton
function hoverOut(x) {
        x.style.backgroundColor = '#F27F77';
        x.style.color = "black";
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
    if(opp_tempInstant == 9 && tempInstant == 8 || opp_tempInstant == 8 && tempInstant == 9) {
        alert("Disaster card is discarded");
        totalPoints = totalPoints - tempPoints;
        opp_totalPoints = opp_totalPoints - opp_tempPoints;
        tempPoints = 0;
        opp_tempPoints = 0;
        fu();
    }
    
    else if (opp_tempInstant == 9 && tempInstant == 9) {
        totalPoints = totalPoints - tempPoints;
        opp_totalPoints = opp_totalPoints - opp_tempPoints;
        tempPoints = 0;
        opp_tempPoints = 0;
        alert("Disaster card is discarded");
        fu();
    }
    
    else if(tempInstant == 9 && opp_tempInstant != 9) {
        win();
        // opp_Meeple_Move();
        // Meeple_Move();
    }
    
    else if(opp_tempInstant == 9 && tempInstant != 9) {
        lose();
        // opp_Meeple_Move();
        // Meeple_Move();
    }
    
    else {
        if (tempPoints < opp_tempPoints) {
            if(tempInstant == 8) {
                totalPoints = totalPoints - tempPoints;
                opp_totalPoints = opp_totalPoints - opp_tempPoints;
                tempPoints = 0;
                opp_tempPoints = 0;
                alert("Disaster card is discarded");
                fu();
            }
            else {
                lose();
                // opp_Meeple_Move();
                // Meeple_Move();
            }
        }
        
        else if(tempPoints > opp_tempPoints) {
            if(opp_tempInstant == 8) {
                totalPoints = totalPoints - tempPoints;
                opp_totalPoints = opp_totalPoints - opp_tempPoints;
                tempPoints = 0;
                opp_tempPoints = 0;
                alert("Disaster card is discarded");
                fu();
            }
            else {
                win();
                // opp_Meeple_Move();
                // Meeple_Move();
            }
        } 
        
        else if(tempPoints == opp_tempPoints) {
            alert("tie");
            totalPoints = totalPoints - tempPoints;
            opp_totalPoints = opp_totalPoints - opp_tempPoints;
            tempPoints = 0;
            opp_tempPoints = 0;
            fu();
        } 
    }
    vivaVida();
}

// Moves the player meeple along the board according to their total points - called in lose() and win()
function Meeple_Move() {
    console.log("Meeple_Move " + totalPoints);
    if(totalPoints <= 49) {
       if (playerOne == "bronto") {
            let f = document.getElementsByClassName('meeple_class_bb' + totalPoints)[0];
            f.src = "/assets/img/bronto-meeple.png";
            f.style.display = 'block'
            if(tempTotal >= 1) {
                document.getElementsByClassName('meeple_class_bb' + tempTotal)[0].style = 'hidden'; 
            }
        }
        
        else if (playerOne == "stego") {
            let f = document.getElementsByClassName('meeple_class_b' + totalPoints)[0];
            f.src = "/assets/img/stego-meeple.png";
            f.style.display = 'block'
            if(tempTotal >= 1) {
                document.getElementsByClassName('meeple_class_b' + tempTotal)[0].style = 'hidden'; 
            }
        } 
        
    }
     else if (totalPoints > 49) {
        if(playerOne == "bronto") { 
            document.getElementsByClassName("meeple_class_bb50").src = "/assets/img/bronto-meeple.png";
        }
         
        else if (playerOne == "stego") { 
            document.getElementsByClassName("meeple_class_b50").src = "/assets/img/stego-meeple.png";
        }
        alert("You escaped!");
        location.reload();
    }
}
// } 

// Moves opponent meeple according to their total points - called in lose() and win()
function opp_Meeple_Move() {
    console.log("opp_Meeple_Move " + opp_totalPoints);
    if(opp_totalPoints <= 49) {
        if (playerTwo == "bronto") {
            let f = document.getElementsByClassName('meeple_class_a' + opp_totalPoints)[0];
            f.src = "/assets/img/bronto-meeple.png";
            f.style.display = 'block'
            if(opp_tempTotal >= 1) {
                document.getElementsByClassName('meeple_class_a' + opp_tempTotal)[0].style = 'hidden'; 
            }
            
        }
        
        else if (playerTwo == "stego") {
            let f = document.getElementsByClassName('meeple_class_aa' + opp_totalPoints)[0];
            f.src = "/assets/img/stego-meeple.png";
            f.style.display = 'block'
            if(opp_tempTotal >= 1) {
                document.getElementsByClassName('meeple_class_aa' + opp_tempTotal)[0].style = 'hidden'; 
            }
        }
        
    }
     
    else if(opp_totalPoints > 49) {
        if(playerTwo == "bronto") { 
            document.getElementsByClassName("meeple_class_a50").src = "/assets/img/bronto-meeple.png";
        }
         
        else if (playerTwo == "stego") { 
            document.getElementsByClassName("meeple_class_aa50").src = "/assets/img/stego-meeple.png";
        }
        alert("Your opponent escaped!");
        location.reload();
    }
        
}
// } 

let disasterTrack = [];
let opp_disasterTrack = [];
//If player one loses disaster card will be assigned to player one - called in function directDisaster()
function lose() {
    if (playerOne == "bronto") {
        for(let i = 0; i < 6; i++) {
            if(player_disCount == i) {
                document.getElementById("brontoDisaster" + (i + 1)).src = "/assets/img/" + color + "-disaster.png";
                disasterTrack.push(color);
                console.log(disasterTrack);
            }
        }
        player_disCount = player_disCount + 1;

    }
    
    else if(playerOne == "stego") {
        for(let i = 0; i < 6; i++) {
            if(player_disCount == i) {
                document.getElementById("stegoDisaster" + (i + 1)).src = "/assets/img/" + color + "-disaster.png";
                disasterTrack.push(color);
                console.log(disasterTrack);
            }
        } 
        player_disCount = player_disCount + 1;
    }
    Meeple_Move();
    opp_Meeple_Move();
    fu();
    checkLoseGame();
}

//If player one wins disaster card will be assigned to player two - called in function directDisaster()
function win() {
    if (playerOne == "stego") {
        for(let i = 0; i < 6; i++) {
            if(opp_disCount == i) {
                document.getElementById("oppBronto" + (i + 1)).src = "/assets/img/" + color + "-disaster.png";
                opp_disasterTrack.push(color);
                console.log(opp_disasterTrack);
            }
        }
        opp_disCount = opp_disCount + 1;

    }
    
    else if(playerOne == "bronto") {
        for(let i = 0; i < 6; i++) {
            if(opp_disCount == i) {
                document.getElementById("oppSteg" + (i + 1)).src = "/assets/img/" + color + "-disaster.png";
                opp_disasterTrack.push(color);
                console.log(opp_disasterTrack);
            }
        } 
        opp_disCount = opp_disCount + 1;
    }
    Meeple_Move();
    opp_Meeple_Move();
    fu();
    checkWinGame();
}

// removed the cards that are currently on the playing section
function disposeCards() {
    pc_count = 0;
    ic_count = 0;
    tempInstant = 0;
    opp_tempInstant = 0;
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

// checking if the player has lost the game
function checkLoseGame() {
    let red = [];
    let blue = [];
    let green = [];
    for(i=0; i < disasterTrack.length; i++) {
        if(disasterTrack[i] === 'red') {
            red.push(disasterTrack[i]);
        }
        
        else if(disasterTrack[i] === 'blue') {
            blue.push(disasterTrack[i]);
        }
        
        else if(disasterTrack[i] === 'green') {
            green.push(disasterTrack[i]);
        }
    }

    if(red.length == 4 || blue.length == 4 || green.length == 4) {
        alert("you lose!");
        location.reload();
    }
    
    else if(red.length == 2 && blue.length == 2 && green.length == 2) {
        alert("you lose!");
        location.reload();
    }
    setTimeout(checkDisaster, 1500);
}

// checking if the player has won the game
function checkWinGame() {
    let redTwo = [];
    let blueTwo = [];
    let greenTwo = [];
    for(i=0; i < opp_disasterTrack.length; i++) {
        if(opp_disasterTrack[i] === 'red') {
            redTwo.push(opp_disasterTrack[i]);
        }
        
        else if(opp_disasterTrack[i] === 'blue') {
            blueTwo.push(opp_disasterTrack[i]);
        }
        
        else if(opp_disasterTrack[i] === 'green') {
            greenTwo.push(opp_disasterTrack[i]);
        }
    }

    if(redTwo.length == 4 || blueTwo.length == 4 || greenTwo.length == 4) {
        alert("you win!");
        location.reload();
    }
    
    else if(redTwo.length == 2 && blueTwo.length == 2 && greenTwo.length == 2) {
        alert("you win!");
        location.reload();
    }
    setTimeout(opp_checkDisaster, 1500);  
}

// check if user lost the game according to what they have in their disaster area - called in checkLoseGame
function checkDisaster() {
    if(player_disCount == 6 && playerOne == "bronto") { 
        alert("Lucky dino! You survived all the disasters. Move forward 5 spaces! Disaster board will reset...");
        document.getElementById("brontoDisaster1").src = "";
        document.getElementById("brontoDisaster2").src = "";
        document.getElementById("brontoDisaster3").src = "";
        document.getElementById("brontoDisaster4").src = "";
        document.getElementById("brontoDisaster5").src = "";
        document.getElementById("brontoDisaster6").src = "";
        disasterTrack = [];
        player_disCount = 0;
        tempTotal = totalPoints;
        totalPoints = totalPoints + 5;
        Meeple_Move();
    }
     
    else if(player_disCount == 6 && playerOne == "stego") { 
        alert("Lucky dino! You survived all the disasters. Move forward 5 spaces! Disaster board will reset...");
        document.getElementById("stegoDisaster1").src = "";
        document.getElementById("stegoDisaster2").src = "";
        document.getElementById("stegoDisaster3").src = "";
        document.getElementById("stegoDisaster4").src = "";
        document.getElementById("stegoDisaster5").src = "";
        document.getElementById("stegoDisaster6").src = "";
        disasterTrack = [];
        player_disCount = 0;
        tempTotal = totalPoints;
        totalPoints = totalPoints + 5;
        Meeple_Move();
    }
}

//check if opponent has lost the game according to what they have in their disaster area - called in checkWinGame
function opp_checkDisaster() {
    if(opp_disCount == 6 && playerTwo == "bronto") { 
        alert("Your opponent survived all the disasters. They will forward 5 spaces.");
        document.getElementById("oppBronto1").src = "";
        document.getElementById("oppBronto2").src = "";
        document.getElementById("oppBronto3").src = "";
        document.getElementById("oppBronto4").src = "";
        document.getElementById("oppBronto5").src = "";
        document.getElementById("oppBronto6").src = "";
        opp_disasterTrack = [];
        opp_disCount = 0;
        opp_tempTotal = opp_totalPoints;
        opp_totalPoints = opp_totalPoints + 5;
        opp_Meeple_Move();
    }
     
    else if(opp_disCount == 6 && playerTwo == "stego") { 
        alert("Your opponent survived all the disasters. They will forward 5 spaces.");
        document.getElementById("oppSteg1").src = "";
        document.getElementById("oppSteg2").src = "";
        document.getElementById("oppSteg3").src = "";
        document.getElementById("oppSteg4").src = "";
        document.getElementById("oppSteg5").src = "";
        document.getElementById("oppSteg6").src = "";
        opp_disasterTrack = [];
        opp_disCount = 0;
        opp_tempTotal = opp_totalPoints;
        opp_totalPoints = opp_totalPoints + 5;
        opp_Meeple_Move();
    }
}