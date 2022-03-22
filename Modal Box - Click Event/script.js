"use strict";
const buttonOPen = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const buttonClose = document.querySelector(".close-modal");
const displayModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const removeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < buttonOPen.length; i++) {
  buttonOPen[i].addEventListener("click", displayModal);
}
buttonClose.addEventListener("click", removeModal);
overlay.addEventListener("click", removeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      removeModal();
    }
  }
});
