function Raca1(){
    A = Number(prompt("Saisir un nombre entre 1 et 100"))
    u = A/2
    while (Math.abs(u*u - A) > 10**-5){
        u = 0.5*(u+(A/u))
    }
    alert(u)
}