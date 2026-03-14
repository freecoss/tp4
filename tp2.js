function hjms(){
    let numbrSecondes = prompt("Une durée en secondes : ")
    let n = 24*60*60
    let jours = numbrSecondes / n
    let heures = (numbrSecondes%n)/(60*60)
    let minutes = (numbrSecondes%(60*60))/60
    let seconds = numbrSecondes%60
    alert("cette durée équivaut à "+ (Math.floor(jours) ? (Math.floor(jours)+" jours ") : "") +(Math.floor(heures) ? (Math.floor(heures)+" heures ") : "")+(Math.floor(minutes) ? (Math.floor(minutes)+" minutes ") : "")+(Math.floor(seconds) ? (Math.floor(seconds)+" seconds ") : ""))
}