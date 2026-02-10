let note = prompt(`Entrez une ciffre entre 0 et 20`)
let message = (note >= 16) ? "Excelent" : (note >= 12) ? "Moyen" : (note >= 10)  ? "Bien" : "Insuffisant"

alert(message)


//-----------------------------------------------------------------------------------------------//


let nombres = [2 , -5 , -9 , 7, 0, 0 , 8 , 10]
let newNombres = nombres.map((x) =>   (x > 0) ? "+" : (x < 0) ? "-" : "0")
console.log(newNombres)


//--------------------------------------------------------------------------------------------//


let pairs = nombres.filter((x)=> x  % 2 == 0  )
console.log(pairs)

//--------------------------------------------------------------------------------------------//

let mots = ["pulvériser", "élite", "exubérant", "destruction", "présent"]

let motLongues = mots.filter((x) => x.length <= 5)

console.log(motLongues)

//-------------------------------------------------------------------------------------------//


let personnes = [ {nom: "Alice" , age: 22},
    { nom: "Bob" , age: 17},
    {nom: "Charlie", age : 30}
]

let majeures = personnes.filter((x) => x.age > 18)
console.log(majeures)


//---------------------------------------------------------------------------------------------------//

const toto =[1 , 2 ,3 ,4 ,5]

console.log(toto.reduce((total, num) => total + num, 0))


const produitDesNombres =[1 , 2 ,3 ,4 ,5]

console.log(produitDesNombres.reduce((total, num) => total * num, 1))


//-----------------------------------------------------------------------------------------------------//

let motUser = prompt("rentrez un mot")

const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

let nombreDeVoyelles = motUser.split().reduce((compte, lettre) => {return voyelles.includes(lettre) ? compte + 1 : compte },0 )

alert(`Nombre de voyelles : ${nombreDeVoyelles}`)








