/* const rateOne = document.querySelectorAll(".button-rate-one");

rateOne.forEach((element) => {
  element.addEventListener("click", function (e) {
    console.log(showElement(e));
  });
});
function showElement(e) {
  var t = e.target;
  var checkboxes = t.parentNode.getElementsByClassName("button-rate-one");
  var result = Array.prototype.indexOf.call(checkboxes, t);
  return result;
}
let firstRate = 4;
let buttonRateOne = document.querySelector(".button-rate-one");
if (buttonRateOne.hasChildNodes()) {
  let children = buttonRateOne.childNodes[0].textContent;
  console.log(children);
  for (let i = 0; i < firstRate; i++) {
    console.log("go");
    document.querySelector(".button-rate-one").childNodes[i].innerHTML = "star";
  }
} */

let buttonRateOne = document.querySelector(".button-rate-one");
