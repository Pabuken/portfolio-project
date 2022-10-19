
const switchMode = document.querySelector('input');

switchMode.addEventListener('click', lightMode);

function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }
