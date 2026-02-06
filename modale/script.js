const container = document.getElementById("container")
const modaleEnDure = document.getElementById("modale") 
const buttonShowModale= document.createElement("button")  
buttonShowModale.textContent = "Voir Modale"

container.appendChild(buttonShowModale)

function modaleEvent(){
    modale.innerHTML = ""
    const modaleContainer = document.createElement("div")
    modaleContainer.classList.add('modale-modaleContainer')
    const titre = document.createElement("p")
    titre.textContent= "ceci le titre de ma modale"
    const description = document.createElement("article")
    description.textContent = "ceci est la description de la modale"
    const croix = document.createElement("span")
    croix.textContent = "x"
    modaleContainer.appendChild(titre)
    modaleContainer.appendChild(description)
    modaleContainer.appendChild(croix)
    modale.appendChild(modaleContainer)
    
    croix.addEventListener("click", () => {
    modale.classList.remove("active")
    })

    modale.addEventListener("click", () => {
    modale.classList.remove("active")
    })

     modaleContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    })


     modale.classList.add("active") 

}

buttonShowModale.addEventListener("click", modaleEvent)