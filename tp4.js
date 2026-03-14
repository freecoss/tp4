function triangle1(){
    const n = Number(prompt("Un motif  de taille = "))
    let i = 1
    while (i <= n) {
        let ligne = ""
        let j = 1
        while (j <= i) {
            ligne += "*"
            j++
        }
        console.log(ligne)
        i++
    }
}

function triangle2(){
    const n = Number(prompt("Un motif  de taille = "))
    for (let i = 1; i <= n; i++) {
        let ligne = ""
        for (let j = 1; j <= i; j++) {
            ligne += "*"
        }
        console.log(ligne)
    }
}

function motifPyramide(){
    const n = Number(prompt("Un motif  de taille = "))
    for (let i = 1; i <= n; i++) {
        let ligne = ""
        // Ajouter les espaces
        for (let j = 1; j <= n - i; j++) {
            ligne += " "
        }
        // Ajouter les étoiles
        for (let k = 1; k <= i * 2 - 1; k++) {
            ligne += "*"
        }
        console.log(ligne)
    }
}