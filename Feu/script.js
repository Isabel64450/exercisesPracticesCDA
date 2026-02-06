function setFeu() {

  const feux = document.querySelectorAll(".feu");
  let index = 0;

  function feuTricolore() {

    
    for (let i = 0; i < feux.length; i++) {
      feux[i].classList.remove("active");
      feux[i].classList.add("hidden");
    }

    if (index < feux.length) {
      feux[index].classList.remove("hidden");
      feux[index].classList.add("active");
    }

    index++;

    
    if (index >= feux.length) {
      index = 0;
    }
  }

  feuTricolore();
  setInterval(feuTricolore, 2000);
}

setFeu();

