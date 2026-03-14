function Fibo1(){
    let n = prompt("n : ")
    let u0 = 0
    let u1 = 1
    let temp
    let listU = []
    for (let i = 0; i < n; i++) {
        listU.push(u0)
        temp = u1
        u1 = u0 + u1
        u0 = temp
    }
    alert(listU)
}


function Fibo2(){
    let n = prompt("n : ")
    let u0 = 0
    let u1 = 1
    let temp
    let listU = []
    let index=0
    while (u0<=n) {
        temp = u1
        u1 = u0 + u1
        u0 = temp
        index++
    }
    alert(u0+" "+index)
}