function afficherHeure() {
    var maintenant = new Date();
    var heures = maintenant.getHours().toString().padStart(2, "0");
    var minutes = maintenant.getMinutes().toString().padStart(2, "0");
    var secondes = maintenant.getSeconds().toString().padStart(2, "0");
    var heure = heures + ":" + minutes + ":" + secondes;
    document.getElementById("Horloge").innerText = heure;
}

setInterval(afficherHeure, 1000);

function setAlarme() {
  const temps = document.getElementById("temps").value;
  const message = document.getElementById("messageAlarme");
  const son = document.getElementById("sonAlarme");

  if (temps <= 0) {
    alert("Veuillez entrer un temps valide");
    return;
  }

 
  setTimeout(() => {
    message.classList.remove("hidden");
    son.play();
  }, temps * 1000);
}
function stopAlarme() {
  const message = document.getElementById("messageAlarme");
  const son = document.getElementById("sonAlarme");

  message.classList.add("hidden");
  son.pause();
  son.currentTime = 0;
}