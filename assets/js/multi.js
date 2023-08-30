// Needed things

import { joinRoom, selfId } from 'https://cdn.skypack.dev/trystero/ipfs';
const config = { appId: 'HLD' };

let mainMenuRoom;
let queueRoom;
let gameRoom;

// const room = joinRoom(config, 'lobby');
// const [sendPlayedCards, getPlayedCards] = room.makeAction('name');

// const idsToNames = [];
// const nameInput = document.getElementById('')

queueRoom.leave();

gameRoom = joinRoom(config, firstPlayer + secondPlayer);

function leave(pressedBack = true) {
    ending = true;

    if (pressedBack) {
        clearTimeout(removeTimeout);
        clearInterval(countdownInterval);
        toggleNuclear(false);
    }

    gameRoom.leave();

    remove.removeEventListener('click', clickReset);
    remove.classList.toggle('reset-used', false);

    youPieceSpin.classList.toggle('piece-spin', true);
    enemyPieceSpin.classList.toggle('piece-spin', true);

    toggleGrid(false);
    resetGrid();

    joinMainMenu();

    hideModal();

    showStart();

    ended = true;
}

let score = 0;
let temp_points = 0;
let points = 0;

const all = document.getElementById('allboards2')
const bll = document.getElementById('allboards')
const Bronto = document.getElementById('Bronto')
const Stego = document.getElementById('Stego')
Bronto.addEventListener("click", function () {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'none';
    all.style.display = 'block';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
});
Stego.addEventListener("click", function () {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'block';
    all.style.display = 'none';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
})

//DOES THE SAME THING BUT WHEN YOU CLICK ON THE DINOS RATHER THAN THEIR NAME
const brontx = document.getElementById('dino')
const stegx = document.getElementById('dino_two')
brontx.addEventListener("click", function () {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'none';
    all.style.display = 'block';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
});
stegx.addEventListener("click", function () {
    let hero = document.getElementById('hero-img-two')
    hero.style.display = 'none';
    bll.style.display = 'block';
    all.style.display = 'none';
    let testflex = document.getElementById('testflex')
    testflex.style.display = 'flex';
})

// Cards
let deckCount = 0;
//CARDS IS WORKING
let allCards = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
let cardsInHand = [];
let tempCards = [];
function myfunction2() {
    cardsInHand = [];
    tempCards = [];
    let f = document.getElementById("reveal")
    f.style.display = 'none';
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
    
    for (let i = 0; i <= 5; i++) {
        if (cardsInHand[i] == 1) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point1.png";
        }
        else if (cardsInHand[i] == 2) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point2.png";
        }
        else if (cardsInHand[i] == 3) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point3.png";
        }
        else if (cardsInHand[i] == 4) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point4.png";
        }
        else if (cardsInHand[i] == 5) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point5.png";
        }
        else if (cardsInHand[i] == 6) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point6.png";
        }
        else if (cardsInHand[i] == 7) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point7.png";
        }
        else if (cardsInHand[i] == 8) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point8.png";
        }
        else if (cardsInHand[i] == 9) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point9.png";
        }
        else if (cardsInHand[i] == 10) {
            document.getElementById("steg-card" + [i + 1]).src = "/assets/cards2/point10.png";
        }
    }
    // return cardsInHand && tempCards;
};

// Only let users draw cards if they have no cards in their hand or only instant cards - WORKING
function testas() {
    console.log(tempCards);
    if(!tempCards.includes(1) && !tempCards.includes(2) && !tempCards.includes(3) && !tempCards.includes(4) && !tempCards.includes(5) && !tempCards.includes(6)) {
        myfunction2(); 
    }
    else {
        alert("You cannot draw cards at the moment");
        console.log("trash");
    }
}

//automates drawing new hand and alerts player when it is drawn - WORKING
function vivaVida() {
    if(tempCards.length == 0 || !tempCards.includes(1) && !tempCards.includes(2) && !tempCards.includes(3) && !tempCards.includes(4) && !tempCards.includes(5) && !tempCards.includes(6)) {
     alert("drawing new deck");
     myfunction2();
     } 
 }

//USERS WILL BE ABLE TO PLAY CARDS
let pc_count = 0;
let ic_count = 0;
let totalPoints = 0;
let tempPoints = 0;
let pointPoint = 0;
let played = [];
let tempInstant = 0;
let play = document.getElementById("playButton");

// function calculatePoint() {
//     //don't forget if statement for if player has a higher card score than player 2 or AI
//     let instantPoints = 0;
//     if(tempInstant == 7) {
//         instantPoints = 2
//     }
//     else {
//         instantPoints = 0
//     }
//     tempPoints =  tempPoints + instantPoints;
//     totalPoints = totalPoints + tempPoints;
//     console.log(tempPoints);
//     console.log(totalPoints);

// }

function calculatePoint() {
    pc_count=0;
    ic_count=0;
    document.getElementById("instantCenter").src="/assets/cards2/main-empty.png";
    document.getElementById("pointCenter").src="/assets/cards2/main-empty.png";
    vivaVida();
}

//Play cards in the center - WORKING 
function playIt_1() {
    if(cardsInHand[0] >= 7) {
        if(ic_count == 0) {
            // console.log(tempCards);
            document.getElementById("instantCenter").src="/assets/cards2/point" + cardsInHand[0] + ".png";
            document.getElementById("steg-card1").src="";
            let index = tempCards.indexOf(cardsInHand[0]);
            tempCards.splice(index,1);
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
    else if(cardsInHand[0] <= 6){
        if(pc_count == 0) {
            // console.log(tempCards);
            document.getElementById("pointCenter").src="/assets/cards2/point" + cardsInHand[0] + ".png";
            document.getElementById("steg-card1").src="";
            console.log("/assets/cards2/point" + cardsInHand[0] + ".png");
            let index = tempCards.indexOf(cardsInHand[0]);
            played.push(cardsInHand[0]);
            tempPoint = cardsInHand[0];
            tempCards.splice(index,1);
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

function playIt_2() {
    if(cardsInHand[1] >= 7) {
        if(ic_count == 0) {
            document.getElementById("instantCenter").src="/assets/cards2/point" + cardsInHand[1] + ".png";
            document.getElementById("steg-card2").src="";
            let index = tempCards.indexOf(cardsInHand[1]);
            played.push(cardsInHand[1]);
            tempInstant = cardsInHand[1];
            tempCards.splice(index,1);
            cardsInHand[1] = 0;
            console.log(cardsInHand);  
            ic_count = ic_count + 1;
            console.log(ic_count);
        }
        else {
            alert("you cannot play another instant card");
        }
    }
    else if(cardsInHand[1] <= 6){
        if(pc_count == 0) {
            document.getElementById("pointCenter").src="/assets/cards2/point" + cardsInHand[1] + ".png";
            document.getElementById("steg-card2").src="";
            console.log("/assets/cards2/point" + cardsInHand[1] + ".png");
            let index = tempCards.indexOf(cardsInHand[1]);
            played.push(cardsInHand[1]);
            tempPoint = cardsInHand[1];
            tempCards.splice(index,1);
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

function playIt_3() {
    if(cardsInHand[2] >= 7) {
        if(ic_count == 0) {
            document.getElementById("instantCenter").src="/assets/cards2/point" + cardsInHand[2] + ".png";
            document.getElementById("steg-card3").src="";
            let index = tempCards.indexOf(cardsInHand[2]);
            played.push(cardsInHand[2]);
            tempInstant = cardsInHand[2];
            tempCards.splice(index,1);
            cardsInHand[2] = 0;
            console.log(cardsInHand); 
            ic_count = ic_count + 1;
        }
        else {
            alert("you cannot play another instant card");
        }     
    }
    else if(cardsInHand[2] <= 6){
        if(pc_count == 0) {
            document.getElementById("pointCenter").src="/assets/cards2/point" + cardsInHand[2] + ".png";
            document.getElementById("steg-card3").src="";
            console.log("/assets/cards2/point" + cardsInHand[2] + ".png");
            let index = tempCards.indexOf(cardsInHand[2]);
            played.push(cardsInHand[2]);
            tempPoint = cardsInHand[2];
            tempCards.splice(index,1);
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

function playIt_4() {
        if(cardsInHand[3] >= 7) {
            if(ic_count == 0) {
                document.getElementById("instantCenter").src="/assets/cards2/point" + cardsInHand[3] + ".png";
                document.getElementById("steg-card4").src="";
                let index = tempCards.indexOf(cardsInHand[3]);
                played.push(cardsInHand[3]);
                tempInstant = cardsInHand[3];
                tempCards.splice(index,1);
                cardsInHand[3] = 0;
                console.log(cardsInHand); 
                ic_count = ic_count + 1;
            }
            else {
                alert("you cannot play another instant card");
            } 
        }
        else if(cardsInHand[3] <= 6){
            if(pc_count == 0) {
                document.getElementById("pointCenter").src="/assets/cards2/point" + cardsInHand[3] + ".png";
                document.getElementById("steg-card4").src="";
                console.log("/assets/cards2/point" + cardsInHand[3] + ".png");
                let index = tempCards.indexOf(cardsInHand[3]);
                played.push(cardsInHand[3]);
                tempPoint = cardsInHand[3];
                tempCards.splice(index,1); 
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

function playIt_5() {
        if(cardsInHand[4] >= 7) {
            if(ic_count == 0) {
                document.getElementById("instantCenter").src="/assets/cards2/point" + cardsInHand[4] + ".png";
                document.getElementById("steg-card5").src="";
                let index = tempCards.indexOf(cardsInHand[4]);
                played.push(cardsInHand[4]);
                tempInstant = cardsInHand[4];
                tempCards.splice(index,1);
                cardsInHand[4] = 0;
                ic_count = ic_count + 1; 
            }
            else {
                alert("you cannot play another instant card");
            }
        }
        else if(cardsInHand[4] <= 6){
            if(pc_count == 0) {
                document.getElementById("pointCenter").src="/assets/cards2/point" + cardsInHand[4] + ".png";
                document.getElementById("steg-card5").src="";
                console.log("/assets/cards2/point" + cardsInHand[4] + ".png");
                let index = tempCards.indexOf(cardsInHand[4]);
                played.push(cardsInHand[4]);
                tempPoint = cardsInHand[4];
                tempCards.splice(index,1);
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

// function drawing_cards() {
//     if (cardsInHand > 5) {
//         let n = myfunction2();
//         n.splice(0, (a.length - 1))
//         cardsInHand = cardsInHand + n;
//     }
// }

//play button functions (change color when hover + appear when player plays a point card)
function check() {
    if(pc_count == 1) {
        play.style.backgroundColor = '#F27F77';
        play.style.cursor = 'pointer';
    }
}

function hoverIn(x) {
    if (pc_count == 1) {
        x.style.backgroundColor = '#16d26a'; 
        play.style.cursor = 'pointer'; 
    }
    else {
        x.style.backgroundColor = 'black';
    }
    
}

function hoverOut(x) {
    if (pc_count == 1) {
        x.style.backgroundColor = '#F27F77';
    }
    else {
        x.style.backgroundColor = 'black';
    }
}

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
    if (disasters.length > 0) {
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

let round_end = false;
let player_hand = deck.handA(deck.drawCards(5))

// playing a point card
let played_cards = [];

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


 // calc player card simplified?
 // function calculate(played_cards, number) {
    // let temp_points = 0;
    // for (let i = 0; i <= 2; i++) {
        // if (played_cards[i] === number) {
          //  temp_points += i;
        // }
     // }
    // return temp_points;
 // }

// score modified?
// function FS() {
 //   let score = 0;
   // let point = 1;
   // score += point;
    
   // for (let i = 0; i <= 50; i++) {
   //     if (score === i) {
  //          let k = calculate(played_cards);
  //          let j = document.getElementsByClassName('cell' + k)[0];
   //         // change the board position.
  //          let row = document.getElementById(j.id);
   //         let col = row.children[0];
            // do something with board[row][col]
   //     }
   // }
//}

// Card Movement
// let card = document.getElementById("card");
// let isDragging = false;
// let currentX;
// let currentY;
// let initialX;
// let initialY;
// let xOffset = 0;
// let yOffset = 0;

// card.addEventListener("mousedown", dragStart);
// card.addEventListener("mouseup", dragEnd);
// card.addEventListener("mousemove", drag);

// function dragStart(event) {
  // initialX = event.clientX - xOffset;
  // initialY = event.clientY - yOffset;

  // if (event.target === card) {
    // isDragging = true;
  // }
// }

// function dragEnd(event) {
  // initialX = currentX;
  // initialY = currentY;

  // isDragging = false; 
// }

// function drag(event) {
  // if (isDragging) {
    // event.preventDefault();

    // currentX = event.clientX - initialX;
    // currentY = event.clientY - initialY;

    // xOffset = currentX;
    // yOffset = currentY;

    // setTranslate(currentX, currentY, card);
  // }
// }

// function setTranslate(xPos, yPos, el) {
  // el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
// }

// AI Opponent //
// function playOpponent() { 
  // Get the current game state and hand of the AI opponent
  // let gameState = getCurrentGameState();
  // let hand = gameState.opponentHand;
  
  // Select a random card from the hand to play
  // let randomIndex = Math.floor(Math.random() * hand.length);
  // let cardToPlay = hand[randomIndex];
  
  // Play the selected card 
  // playCard(cardToPlay);
  // OK COMPUTER //   
// }
