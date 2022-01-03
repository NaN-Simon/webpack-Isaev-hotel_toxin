const customLikeButton = document.querySelectorAll(".custom-like-button");

const toggleOne = document.getElementById("toggle-button-3");
const likeButtonOne = document.querySelector(".like-one");

customLikeButton.forEach((element) => {
  element.addEventListener("click", function () {
    if (toggleOne.checked) {
      likeButtonOne.classList.add("like-button-text-blue");
    } else if (!toggleOne.checked) {
      likeButtonOne.classList.remove("like-button-text-blue");
    }
  });
});

const toggleTwo = document.getElementById("toggle-button-4");
const likeButtonTwo = document.querySelector(".like-two");

customLikeButton.forEach((element) => {
  element.addEventListener("click", function () {
    if (toggleTwo.checked) {
      likeButtonTwo.classList.add("like-button-text-blue");
    } else if (!toggleTwo.checked) {
      likeButtonTwo.classList.remove("like-button-text-blue");
    }
  });
});