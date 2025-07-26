console.log("welcome to Tic Tac Toe");

let music = new Audio("music.mp3.mp3");
let audioTurn = new Audio("ting.mp3.mp3");
let gameover = new Audio("gameover.mp3.mp3");
let turn = "X";
let isgameover = false
// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
   let wins = [
    [0, 1, 2, 0, 50, 0],     // top row
    [3, 4, 5, 0, 150, 0],    // middle row
    [6, 7, 8, 0, 250, 0],    // bottom row
    [0, 3, 6, 50, 0, 90],    // left column
    [1, 4, 7, 150, 0, 90],   // middle column
    [2, 5, 8, 250, 0, 90],   // right column
    [0, 4, 8, 0, 0, 45],     // diagonal \
    [2, 4, 6, 0, 0, -45]     // diagonal /
];



    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText +" Won"
            isgameover = true 
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="200px";
            let line = document.querySelector(".line");
            line.style.width = "300px";  // length of the line — adjust if needed
            line.style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`;
            let length = (e[5] === 45 || e[5] === -45) ? 420 : 300;
            line.style.width = `${length}px`;

   
        }
    })
    
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if (!isgameover){
             document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

//Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText =""
        document.querySelector(".line").style.transform = "scaleX(0)";

        
    });
    turn ="X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px"
 
})
