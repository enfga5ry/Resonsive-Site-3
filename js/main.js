// my-skills section
let skillsSection = document.querySelector(".our-skills");
let skillsMiniBox = document.querySelectorAll(".skills .skill h3 span");
let skillsSpan = document.querySelectorAll(".skills .skill .progress span");

function first() {
  if (window.scrollY >= skillsSection.offsetTop) {
    skillsSpan.forEach((e) => {
      e.style.width = e.dataset.complete;
    });

    skillsMiniBox.forEach((ele) => {
      ele.innerHTML =
        ele.parentElement.nextElementSibling.firstElementChild.dataset.complete;
    });
  }
}

//  states

let statsSection = document.querySelector(".stats");
let boxes = document.querySelectorAll(".stats .box .number");
let starting = false;

function second() {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!starting) {
      boxes.forEach((box) => counter(box));
    }
    starting = true;
  }
}

function counter(box) {
  let goals = box.dataset.goal;
  let count = setInterval((e) => {
    box.textContent++;

    if (box.textContent == goals) {
      clearInterval(count);
    }
  }, 2000 / goals);
}

window.onscroll = function () {
  first();
  second();
};
