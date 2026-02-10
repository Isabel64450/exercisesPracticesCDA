let age = "35"
let acces = age >= 18 ? "Autorisé" : "refusé"
console.log(acces)


//--------------------------------------------------------------------------------------------//

let user = prompt(`Vous etes qui?`)
let message =  user ? `Bonjour, ${user}`: "Aucun prenom saisi"
alert(message)


//---------------------------------------------------------------------------------------------//

let nombre = prompt("Entrez un nombre")
let msg = nombre % 2 == 0 ? "Pair" : "Impair" 
alert(msg)