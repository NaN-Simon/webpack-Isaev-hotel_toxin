const leftStarsRate = document.querySelector(".left-stars-rate");
const rightStarsRate = document.querySelector(".right-stars-rate");
const rateStarL = document.querySelectorAll(".left-stars-rate .rate-star")
const rateStarR = document.querySelectorAll(".right-stars-rate .rate-star")

leftStarsRate.addEventListener('click',()=>{
  setRate(event,leftStarsRate,rateStarL)
}) 
rightStarsRate.addEventListener('click',()=>{
  setRate(event,rightStarsRate,rateStarR)
}) 
function setRate(e,currentStarsRate,sideRate){
  const currentIndex = Array.from(sideRate).lastIndexOf(e.target);
  for (let i = 0;i<sideRate.length;i++){
    currentStarsRate.childNodes[i].innerHTML = 'star_border'
  }
  for (let i = 0;i<currentIndex+1;i++){
    currentStarsRate.childNodes[i].innerHTML = 'star'
  }
}
