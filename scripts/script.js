



function afficherResultat(score, numbreMotsProposes){

    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} / ${numbreMotsProposes}` 
    spanScore.innerText = affichageScore
}

function afficherproposition(proposition){

    let zoneproposition = document.querySelector(".zoneProposition")

    zoneproposition.innerText = proposition
}

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}


function  validerNom(nom){

    if (nom.length >=2){
        return true
    }

    return false
}

function validerEmail(email){

    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (emailRegExp.test(email)){
        return true
    }
    return flase
}


function lancerJeu() {

    initAddEventListenerPopup()
    let score = 0
    let i = 0
    let listeProposition = listeMots

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherproposition(listeProposition[i])

    //#####################################################
    btnValiderMot.addEventListener("click", () => {
            if (inputEcriture.value === listeProposition[i]){
            score++
            }
            i++
            afficherResultat(score, i)
            inputEcriture.value = ''
            if (listeProposition[i]===undefined) {

                     afficherproposition("Le jeu est fini")
                     btnValiderMot.disabled = true
                     } 
            else     {
                     afficherproposition(listeProposition[i])
                     }
    })
    //#####################################################

    let listeBtnRadio = document.querySelectorAll(".optionSource input")

     //#####################################################
    for (let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change", (event) => {
         
            if (event.target.value === "1") {
                listeProposition = listeMots
            } else {
                // Sinon nous voulons jouer avec la liste des phrases
                listeProposition = listePhrases
            }
            // Et on modifie l'affichage en direct. 
            afficherproposition(listeProposition[i])
        })
    }
    //#####################################################

    let form = document.querySelector("form")

    //#####################################################
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value

        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value

        if (validerNom(nom) && validerEmail(email)) {
            let scoreEmail = `${score} / ${i}`
            afficherEmail(nom, email, scoreEmail)
        } else {
            console.log("Erreur")
        }
        
    })
    //#####################################################
    
    afficherResultat(score, i)
    

    
}