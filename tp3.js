function troisNombres(){
    let listNum = []
    for (let i = 0; i < 3; i++) {
        let num = Number(prompt((i+1)+" nombre"))
        listNum.push(num)
    }
    listNum.sort((a,b)=>a-b)
    alert("les nombres dans l'ordre croissant : "+listNum.join(" "))
}