//! يوجد مشكلة في حال الفوز و الانيمشن , غير محددة بالضبط
//!   لكن يمكن ان تكون واضحة لك في حال تجريب الللعبة كذا مرة في حالات التعادل او حالات الفوز الاكس او الأو

const GameContainer = document.querySelector('.gameContainer');
const XPointsPlaceholder =document.querySelector(".xPoints");
const OPointsPlaceholder =document.querySelector(".oPoints");
const cells = document.querySelectorAll(".gameContainer span");
const resultPlaceholder = document.querySelector(".resultPlaceholder");

let XArray=[];
let OArray=[];
let XOArray=[];
let Xturn= true;
let XPoints =0 ;
let OPoints =0 ;


let clickAudio = new Audio()
let backgroundMusic = new Audio()
backgroundMusic.src = "./Background music 1 minute _D.mp3"
backgroundMusic.volume = 0.1
backgroundMusic.loop = true
// backgroundMusic.play()

let winner= [
    [1,2,3],[1,4,7],[1,5,9],[2,5,8],
    [3,6,9],[3,5,7],[4,5,6],[7,8,9]
]
cells.forEach((cell)=>{
    cell.onclick=(e)=>{
        cell.classList.add("fullCell");
        clickaudio('./Menu Game Button Click Sound Effect.mp3')
        putSign(e)
    }
})
function putSign(e){
    if(Xturn){
    e.target.classList.add('redColor');
        XArray.push(+e.target.getAttribute('data-cell'));
        XOArray.push(+e.target.getAttribute('data-cell'));
    e.target.innerHTML="X"
     Xturn=false
        checkWinner(XArray , "X")
    }else{
        e.target.classList.add("blueColor");
        OArray.push(+e.target.getAttribute('data-cell'));
        XOArray.push(+e.target.getAttribute('data-cell'));
        e.target.innerHTML="O";
        Xturn =true
         checkWinner(OArray , "O")
    }
}
function checkWinner(PlayerArray,sign){
    let isWinner =winner.some(pattern => {
   return pattern.every(num=>PlayerArray.includes(num))
});
    if(isWinner){
                removeXOArray()
                if(sign === "X"){
                    XPoints++
                    XPointsPlaceholder.children[XPoints - 1].style.backgroundColor ="red"
                }
                else{
                    OPoints++
                    OPointsPlaceholder.children[OPoints - 1 ].style.backgroundColor ="blue"
                }
            }else{
             Draw()
               
            }

        if(XPoints === 2 || OPoints ===2){
        GameContainer.style.pointerEvents = "none"
        resultPlaceholder.style.display="block"
        resultPlaceholder.firstElementChild.textContent = `${sign} wins`
        resultPlaceholder.classList.add("fadeToRight")
        }
        function Draw(){
          if(XOArray.length === 9){
            removeXOArray()
            GameContainer.style.pointerEvents = "none"
        resultPlaceholder.style.display="block"
               resultPlaceholder.firstElementChild.textContent = "Draw"
                      resultPlaceholder.classList.add("fadeToRight")
                  setTimeout(()=>{
                    resultPlaceholder.style.display="none"
                  },4000)
           }
        }
}
  function removeXOArray(){
       
        let i =0
        GameContainer.style.pointerEvents = "none"
        let remover = setInterval(()=>{
          
            cells[XOArray[i]-1].innerHTML = ""
            cells[XOArray[i]-1].classList.remove("fullCell")
            cells[XOArray[i]-1].classList.remove("redColor")
            cells[XOArray[i]-1].classList.remove("blueColor")
            if(i === XOArray.length-1){
                GameContainer.style.pointerEvents = "auto"
                clearInterval(remover)
                XOArray.length = 0
                XArray.length = 0
                OArray.length = 0
                Xturn = true
            }
            i++
        },400)
        
    }

   
function clickaudio(url) {
    clickAudio.src = url
    clickAudio.play()
}











