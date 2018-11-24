// listening to events listeners
const main = document.getElementById("main");

main.addEventListener("click", function(event) {
  alert("I was clicked!");
});

//triggering events listeners
const input = document.querySelector("input");

input.addEventListener("keydown", function(e) {
  console.log(e.which);
});

// preventing default behaviors
const input = document.querySelector("input");

input.addEventListener("keydown", function(e) {
  if (e.which === 71) {
    return e.preventDefault();
  } else {
    console.log(e.which);
  }
});

// stopping propagated behaviors with stopPropagation()
const divs = document.querySelectorAll("div");

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + " bubbled");
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", bubble);
}

// difference between Bubbling and Capturing Events

// bubble
let divs = document.querySelectorAll("div");

function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + " bubbled");
}
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", bubble);
}

// capture

divs = document.querySelectorAll("div");

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + " captured");
}
for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener("click", capture, true);
}
