// Needed things

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
// myfunction2();
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

// Only let users draw cards if they have no cards in their hand or only instant cards
// Should be working? Sometimes it works sometimes it doesn't or I am just going crazy
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
//     //don't forget if statment for if player has a higher card score than player 2 or AI
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

//automates drawing new hand and alerts player when it is drawn
function vivaVida() {
   if(tempCards.length == 0 || !tempCards.includes(1) && !tempCards.includes(2) && !tempCards.includes(3) && !tempCards.includes(4) && !tempCards.includes(5) && !tempCards.includes(6)) {
    alert("drawing new deck");
    myfunction2();
    } 
}


//Play cards in the center (doesn't work)
// I dont know how to write the pc_count/ic_count if statements 
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
    drawing_cards();
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
    drawing_cards();
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
    drawing_cards();
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
    drawing_cards();
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
    drawing_cards();
};

function drawing_cards() {
    if (cardsInHand > 5) {
        let n = myfunction2();
        n.splice(0, (a.length - 1))
        cardsInHand = cardsInHand + n;
    }
}

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

    let ai_avg = (ai_hand[1] + ai_hand[2] + ai_hand[3] + ai_hand[4] + ai_hand[5] + ai_hand[6]) / ai_hand.length;

// single player things
// AI
let ai_hand = deck.ai_hand(deck.drawCards(5));
ai_cardsInHand = []
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
    if (allCards.length > 4) {
        for (let i = 0; i < 5; i++) {
            let number = Math.round(Math.random() * allCards.length - .5);
            let num = allCards[number];
            cardsInHand.push(num);
            let l = allCards.splice(number, 1);
            console.log(allCards);
            console.log(cardsInHand);
        }
    }
    else {
        alert('Shuffling Cards');
        allCards = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
    }
    for (let i = 0; i <= 5; i++) {
        for (j = 0; j <= 10; j++) {
            if (ai_cardsInHand[i] == j) {
                document.getElementById("steg-card" + [i + j]).src = "/assets/cards2/point" + j + ".png";
            }
        }
    }
    return ai_cardsInHandler;
};
let ai_ab = ai_cardsInHand[0];

function ai_playIt_1() {
    if(pc_count < 1 && ic_count < 1 || pc_count < 1 && ic_count >= 1) {
        if(cardsInHand[0] >= 7) {
                // console.log(tempCards);
                document.getElementById("ai_instantCenter").src="/assets/cards2/point" + cardsInHand[0] + ".png";
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
            else if(cardsInHand[0] <= 6){
                // console.log(tempCards);
                document.getElementById("ai_pointCenter").src="/assets/cards2/point" + cardsInHand[0] + ".png";
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
    } 
    check();
};

function ai_playIt_2() {
    if(pc_count < 1 && ic_count < 1 || pc_count < 1 && ic_count >= 1) {
        if(cardsInHand[1] >= 7) {
            document.getElementById("ai_instantCenter").src="/assets/cards2/point" + cardsInHand[1] + ".png";
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
        else if(cardsInHand[1] <= 6){
            document.getElementById("ai_pointCenter").src="/assets/cards2/point" + cardsInHand[1] + ".png";
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
    } 
    check();  
};

function ai_playIt_3() {
    if(pc_count < 1 && ic_count < 1 || pc_count < 1 && ic_count >= 1) {
        if(cardsInHand[2] >= 7) {
            document.getElementById("ai_instantCenter").src="/assets/cards2/point" + cardsInHand[2] + ".png";
            document.getElementById("steg-card3").src="";
            let index = tempCards.indexOf(cardsInHand[2]);
            played.push(cardsInHand[2]);
            tempInstant = cardsInHand[2];
            tempCards.splice(index,1);
            cardsInHand[2] = 0;
            console.log(cardsInHand); 
            ic_count = ic_count + 1;

        }
        else if(cardsInHand[2] <= 6){
            document.getElementById("ai_pointCenter").src="/assets/cards2/point" + cardsInHand[2] + ".png";
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
    }
    check();
};

function ai_playIt_4() {
    if(pc_count < 1 && ic_count < 1 || pc_count < 1 && ic_count >= 1) {
        if(cardsInHand[3] >= 7) {
            document.getElementById("ai_instantCenter").src="/assets/cards2/point" + cardsInHand[3] + ".png";
            document.getElementById("steg-card4").src="";
            let index = tempCards.indexOf(cardsInHand[3]);
            played.push(cardsInHand[3]);
            tempInstant = cardsInHand[3];
            tempCards.splice(index,1);
            cardsInHand[3] = 0;
            console.log(cardsInHand); 
            ic_count = ic_count + 1;
        }
        else if(cardsInHand[3] <= 6){
            document.getElementById("ai_pointCenter").src="/assets/cards2/point" + cardsInHand[3] + ".png";
            document.getElementById("steg-card4").src="";
            console.log("/assets/cards2/point" + cardsInHand[3] + ".png");
            let index = tempCards.indexOf(cardsInHand[3]);
            played.push(cardsInHand[3]);
            tempPoint = cardsInHand[3];
            tempCards.splice(index,1); 
            cardsInHand[3] = 0;
            pc_count = pc_count + 1;
        }
    }
    check();
};


function ai_playIt_5() {
    if(pc_count < 1 && ic_count < 1 || pc_count < 1 && ic_count >= 1) {
        if(cardsInHand[4] >= 7) {
                document.getElementById("ai_instantCenter").src="/assets/cards2/point" + cardsInHand[4] + ".png";
                document.getElementById("steg-card5").src="";
                let index = tempCards.indexOf(cardsInHand[4]);
                played.push(cardsInHand[4]);
                tempInstant = cardsInHand[4];
                tempCards.splice(index,1);
                cardsInHand[4] = 0;
                ic_count = ic_count + 1;
        }
        else if(cardsInHand[4] <= 6){
            document.getElementById("ai_pointCenter").src="/assets/cards2/point" + cardsInHand[4] + ".png";
            document.getElementById("steg-card5").src="";
            console.log("/assets/cards2/point" + cardsInHand[4] + ".png");
            let index = tempCards.indexOf(cardsInHand[4]);
            played.push(cardsInHand[4]);
            tempPoint = cardsInHand[4];
            tempCards.splice(index,1);
            cardsInHand[4] = 0;
            pc_count = pc_count + 1;
        }
    }
    check();
};