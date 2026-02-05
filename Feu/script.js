

function setFeu() {

  const feux = document.getElementsByClassName("feu");
  let index = 0;

  function feuTricolore() {

    for (let i = 0; i < feux.length; i++) {
      feux[i].classList.add("hidden");
    }

    feux[index].classList.remove("hidden");

    index++;
    if (index >= feux.length) {
      index = 0;
    }
  }

  feuTricolore(); 
  setInterval(feuTricolore, 2000);
}

setFeu();