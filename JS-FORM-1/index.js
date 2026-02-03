


const form = document.getElementById('form1');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const prenom = document.getElementById('name').value;
  const nom = document.getElementById('lastName').value;

  alert(`Prénom et Nom: ${nom} ${prenom}`)

  console.log("Prénom :", prenom);
  console.log("Nom :", nom);
});
