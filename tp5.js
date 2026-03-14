function premier() {
    const nbr = Number(prompt("Un entier positif  :"))
    divis = []
    for (var i = 2; i < nbr; i++){
        if (nbr % i === 0) {
            divis.push(i)
        }
    }
    if(divis.length!==0){
        alert(nbr + " n'est pas un nombre premier, il est divisible par " + divis.join(" "))
    }else{
        alert(nbr+" est un nombre premier")
    }
}
