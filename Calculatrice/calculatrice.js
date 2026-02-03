const form = document.getElementById('calc');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const value1 = document.getElementById('premier-nombre').value;
  const value2 = document.getElementById('deuxieme-nombre').value;

  const result = parseInt(value1)+ parseInt(value2)
  
  const resultat = document.getElementById('resultat')
resultat.textContent = result

  console.log("premier valeur :", value1);
  console.log("deuxieme valeur :", value2);
});
