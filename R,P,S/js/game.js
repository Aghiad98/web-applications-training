import { showSelectedImages , markBulletUser ,theResult ,resetBullets ,removeCards ,renderChoices} from "./ui.js";

import {choices} from "./data.js";



let userScoure = 0 ;
let computerScore = 0 ;
  
let userName = "Player";

export function getUserName() {

    const name = prompt("Enter your name:");

    if (!name || name.trim() === "") {
        userName = "Player";
    } else {
        userName = name.trim();
    }

    return userName;
}

function selectComputerChoice() {

    const randomChoice =
        choices[Math.floor(Math.random() * choices.length)];

    return randomChoice;
}

  export  function selectUserChoice(){
        const userCards = document.querySelectorAll('.userArea .card img') ;
        userCards.forEach(card=>{
         card.addEventListener("click", (e) => {

            const userChoice = {
                img: e.target.src,
                value: Number(e.target.dataset.set)
            };
            handleUserChoice(userChoice);
        
        });
         
    });
}

export  function handleUserChoice(userChoice) {
       
        
    const computerChoice =
        selectComputerChoice();
         showSelectedImages(userChoice, computerChoice);
        theScore(userChoice.value,computerChoice.value);

        setTimeout(()=>{
            continueGame()  
        },2000)
}

   function theScore(user,computer){
       
   if (user === computer) {
        return;
    }

    if (
        (user === 1 && computer === 3) ||
        (user === 2 && computer === 1) ||
        (user === 3 && computer === 2)
    ) {

        markBulletUser(
            userScoure,
            "user"
        );

        userScoure++;

    } else {

        markBulletUser(
            computerScore,
            "computer"
        );

        computerScore++;
    }
    if( computerScore == 3 || userScoure == 3 ) {
         if(userScoure>computerScore){
        theResult(userName ,handlePlayAgain)
     }
     else{
        theResult("computer" , handlePlayAgain)
     }
    }
   
   
  

}
function continueGame(){
  
        removeCards();

    renderChoices();

    selectUserChoice();


}

export function handlePlayAgain() {

    resetScore();
    resetBullets();
    removeCards();

    renderChoices();
    selectUserChoice();

    const btn = document.querySelector(".btn");

    if (btn) {
        btn.remove();
    }

    const overlay =
        document.querySelector(".overlay");

    overlay.style.visibility = "hidden";

    const resultArea =
        document.querySelector(".ResultArea");

    if (resultArea) {
        resultArea.remove();
    }
}


function resetScore(){
     userScoure = 0 ;
     computerScore = 0 ;
}