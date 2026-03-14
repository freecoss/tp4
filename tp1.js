function degreC(){
    let tempF = prompt("Une temperaure en Fahrenheit :");
    let tempC = (5/9)*(tempF - 32);
    alert("Cette température équivaut a "+tempC.toFixed(1)+" degrés Celsius ");
}