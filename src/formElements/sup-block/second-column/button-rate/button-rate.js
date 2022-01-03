/* const rateOne = document.querySelectorAll(".button-rate-one");
const buttonRateColor = document.querySelectorAll(".button-rate-color");

  rateOne.forEach((element) => {
    element.addEventListener("click", function (e) {
      console.log(showElement(e));
      element[showElement(e)].innerHTML = 'star'
  })
})
function showElement(e) {
  var t = e.target;
  var checkboxes = t.parentNode.getElementsByClassName("button-rate-color");
  var result = Array.prototype.indexOf.call(checkboxes, t);
  return result;
} */
let firstRate = 4
let parg = document.querySelector(".button-rate-one");
if (parg.hasChildNodes()) {
  let children = parg.childNodes[1].textContent;
  console.log(children)
  for (let i = 0; i<firstRate;i++){
    console.log('go')
    document.querySelector(".button-rate-one").childNodes[i].innerHTML = "star";
  }
  
}

/* console.log(document.getElementsByClassName(".button-rate-one").childNodes[0].innerHTML) */