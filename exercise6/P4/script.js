const Counter = document.querySelectorAll(".counter");
const section = document.querySelector(".section-hero-counter");
 function setCounter(){
  Counter.forEach(count=>{
    const target = +(count.dataset.target)
  const increment = Math.ceil(target/100)
        let current =0
   const timer= setInterval(()=>{
       
        if(current>target){
            current=target
            count.textContent=
            current + "K+"
            clearInterval(timer);
        }else{
            if(target>100){
                current+=increment
                count.textContent=
                current + "K+"
            }else{
                current+=1
                count.textContent=
                current + "K+"
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