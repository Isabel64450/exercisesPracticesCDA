let element = document.getElementById("Second")
element.classList.remove('hidden')

element.style.backgroundColor = 'yellow'

function changeCouleur() {
  const paragraphe = document.getElementById("premier");
  paragraphe.style.backgroundColor = 'green';
}

function changeCouleur(element) {
  element.style.backgroundColor = "red";
}