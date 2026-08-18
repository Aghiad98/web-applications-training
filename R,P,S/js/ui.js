
import { choices } from "./data.js";
let computerArea = document.querySelector(".computerArea");
let userArea = document.querySelector(".userArea");


 const Container = document.querySelector(".container")
export function createChoices(container , choices){
        choices.forEach(choice=>{
            const card = document.createElement("div");
            card.className="card" ;
            const img = document.createElement("img") ;
            img.src=choice.img ;
            img.alt=choice.name ;
            img.dataset.set=choice.value ;
            card.appendChild(img) ;
            container.appendChild(card) ;
        })
    }

     function SelectedImg(area, img, player) {
    
        const div =
            document.createElement("div");
    
        div.className =
            `selected_img_${player}`;
    
        const image =
            document.createElement("img");
    
        image.src = img;
    
        div.appendChild(image);
    
        area.appendChild(div);
    }

    
   export  function showSelectedImages(userChoice, computerChoice) {
    
        removeCards();
    
        SelectedImg(
            userArea,
            userChoice.img,
            "user"
        );
    
        SelectedImg(
            computerArea,
            computerChoice.img,
            "computer"
        );
    }

   export function removeCards(){
        userArea.innerHTML =''
        computerArea.innerHTML =''
    }

 export function markBulletUser(index, winner) {

    const bulletsUser =
        document.querySelectorAll(".userScore span");

    const bulletsComputer =
        document.querySelectorAll(".computerScore span");

    if (winner === "user") {
        bulletsUser[index].classList.add("Win");
    }

    if (winner === "computer") {
        bulletsComputer[index].classList.add("Win");
    }
}
   export function createbullets(count){
        const bulletComputer = document.querySelector('.computerScore') ;
        const bulletUser = document.querySelector('.userScore') ;
        bulletComputer.innerHTML='' ;
        bulletUser.innerHTML='' ;
        for(let i=0 ; i<count ; i++){
          const spanComputer =
            document.createElement("span");

        const spanUser =
            document.createElement("span");

        bulletComputer.appendChild(spanComputer);

        bulletUser.appendChild(spanUser)
        }
    }

  export function resetBullets() {

    const bullets =
        document.querySelectorAll(
            ".userScore span, .computerScore span"
        );

    bullets.forEach(bullet => {
        bullet.classList.remove("Win", "Lose");
    });
}

    export  function theResult(name,onPlayAgain){
      const div = document.createElement('div') ;
    div.className="ResultArea" ;
     div.textContent=`${name} Win` ;
       Container.appendChild(div)
        createBtn(onPlayAgain)
       
    const overlay = document.querySelector(".overlay");
    overlay.style.visibility="visible"

}

   function createBtn(onPlayAgain){
    const btn = document.createElement('button');
    btn.className='btn';
    btn.textContent="Play Again";
    Container.appendChild(btn)
    btn.addEventListener('click', onPlayAgain)
  }

 export function renderChoices() {

    createChoices(userArea, choices);

    createChoices(computerArea, choices);
}