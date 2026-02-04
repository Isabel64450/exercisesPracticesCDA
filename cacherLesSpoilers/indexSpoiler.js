
  let elements = document.getElementsByClassName('spoiler');

for (let i = 0; i < elements.length; i++) {
  elements[i].classList.add('hidden');
}

let buttonCache = document.getElementById('cacheSpoilers');

buttonCache.addEventListener("click", () => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("hidden");
  }

  if (buttonCache.textContent === "Cacher les spoilers") {
    buttonCache.textContent = "Afficher les spoilers";
  } else {
    buttonCache.textContent = "Cacher les spoilers";
  }
});