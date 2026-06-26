const counters = document.querySelectorAll(".counter");
const section = document.querySelector(".counter-section");

  function setCounter(){
counters.forEach(count => {
    const target =+(count.dataset.set)

        let current = 0 ;
        const increment = Math.ceil(target/100)
       
        const timer = setInterval(()=>{
             current +=increment
            if(current > target){
                 current=target
                clearInterval(timer)
               
            }else{
                if(target>1000){
                count.textContent = current / 1000 + "K";
            }else{
                count.textContent=current
            }
        }
        },20)
  
})
  }
const observer = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {
        setCounter();
        observer.unobserve(section);
    }

}, {
    threshold: 0.5
});

observer.observe(section);







// const counters = document.querySelectorAll(".counter");
// const section = document.querySelector(".counter-section");

// function startCounters() {
//     counters.forEach(counter => {

//         const target = Number(counter.dataset.set);

//         let current = 0;

//         const increment = target / 100;

//         function update() {

//             current += increment;

//             if (current < target) {

//                 if (target >= 1000) {
//                     counter.textContent =
//                         Math.floor(current / 1000) + "K";
                        
//                 } else {
//                     counter.textContent =
//                         Math.floor(current);
//                 }

//                 requestAnimationFrame(update);

//             } else {

//                 if (target >= 1000) {
//                     counter.textContent =
//                         target / 1000 + "K";
//                 } else {
//                     counter.textContent = target;
//                 }
//             }
//         }

//         update();
//     });
// }

// const observer = new IntersectionObserver(entries => {

//     if (entries[0].isIntersecting) {
//         startCounters();
//         observer.unobserve(section);
//     }

// }, {
//     threshold: 0.5
// });

// observer.observe(section);