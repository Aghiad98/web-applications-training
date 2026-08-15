
let Container = document.querySelector(".container")
let player1 = document.querySelector('.player1');
  const player2 = document.querySelector('.player2');
// let computer = [
//     {
//         id:1,
//         img:'./img/rock.jpg'
//     },
//      {
//         id:2,
//         img:'./img/paper.jpg'
//     },
//      {
//         id:3,
//         img:'./img/scissor.jpg'
//     }
// ]
// let user = [
//     {
//         id:1,
//         img:'./img/rock.jpg'
//     },
//      {
//         id:2,
//         img:'./img/paper.jpg'
//     },
//      {
//         id:3,
//         img:'./img/scissor.jpg'
//     }
// ]

// function flowPlayer1(){
//     const player1 = document.querySelector('.player1');

 

//     computer.forEach((element,index)=>{
//           const card = document.createElement("div");

//     card.className="card";
    
//         player1.innerHTML+=`

//         <img src=${element.img} class="card-img">
//         `
//         console.log(index)
//         player1.appendChild(card)
//     })
   
// }

// flowPlayer1()


// function flowPlayer2(){
//     const player2 = document.querySelector('.player2');

//     user.forEach((element,index)=>{
//           const card = document.createElement("div");

//     card.className="card";

//         player2.innerHTML+=`
//         <img src=${element.img} class="card-img" data-set=${index}>
//         `
//          player2.appendChild(card)
        
//     })

// }

// flowPlayer2()

const images = document.querySelectorAll(".player2 .card img") ;

function userImage(){
    images.forEach((elment)=>{
        elment.addEventListener("click",selectImageUser)
    })
}

userImage()

function selectImageUser(e){
    // console.log(e.target.src)
    const div = document.createElement('div') ; 
    div.className="selected_img_user" ;
    player2.style.visibility="hidden"
    div.innerHTML=`
    <img src=${e.target.src}> `;
    Container.appendChild(div);
    console.log(e.target.getAttribute('data-set')+"u")
   
    theResult(+e.target.getAttribute('data-set'),selectImageComputer())
    
}
function selectImageComputer(){
  const  randomImage= Math.floor ( Math.random() * images.length ) ;
    const div = document.createElement('div') ; 
    div.className="selected_img_computer" ;
    player1.style.visibility="hidden"
    div.innerHTML=`
    <img src=${images[randomImage].src}> `;
    Container.appendChild(div)
    console.log(+images[randomImage].getAttribute('data-set')+"c")
   return (+images[randomImage].getAttribute('data-set'))
}
function theResult(user,computer){
    const div = document.createElement('div') ;
    div.className="result" ;
    if(user===computer){
        div.textContent="Draw"
    }
   else if(user === 1 && computer === 2 || user === 2 && computer === 3 || user=== 3 && computer === 1){
        div.textContent="you win"
    }else{
        div.textContent="computer win"
    }
    // const btn = document.createElement('button');
    // btn.className='btn';
    // btn.textContent="Play Again"
    // Container.appendChild(btn)
     Container.appendChild(div);
    //  btn.addEventListener("click",restart)
}
// function restart(){
//     console.log("ljlj")
//     userImage()
// }