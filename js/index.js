// using this file is optional
// you can also load the code snippets in using your browser's console
let main = document.querySelector('#main');

main.addEventListener('click', function(e) {
  alert("i was clicked!");
});

const input = document.querySelector('input');

// prevents 'g'
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault()
  } else {
    console.log(e.which)
  }
});

// DOM events propagate by bubbling
let divs = document.querySelectorAll('div');
function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
};

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
};
