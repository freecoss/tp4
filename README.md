# Travaux Pratiques - JavaScript

Ce dépôt contient une série d'exercices de programmation en JavaScript couvrant les concepts fondamentaux.

## 📋 Liste des TPs

### TP1 - Conversion de température
**Fichier:** `tp1.js`

**Fonction:** `degreC()`

Convertit une température de Fahrenheit en Celsius en utilisant la formule : `C = (5/9) × (F - 32)`

**Utilisation:**
- L'utilisateur saisit une température en Fahrenheit
- Le programme affiche la température équivalente en Celsius (arrondie à 1 décimale)

**Code:**
```javascript
function degreC(){
    let tempF = prompt("Une temperaure en Fahrenheit :");
    let tempC = (5/9)*(tempF - 32);
    alert("Cette température équivaut a "+tempC.toFixed(1)+" degrés Celsius ");
}
```

---

### TP2 - Conversion de durée
**Fichier:** `tp2.js`

**Fonction:** `hjms()`

Convertit une durée en secondes en jours, heures, minutes et secondes.

**Utilisation:**
- L'utilisateur saisit une durée en secondes
- Le programme affiche la durée décomposée (ex: "2 jours 3 heures 45 minutes 30 secondes")

**Code:**
```javascript
function hjms(){
    let numbrSecondes = prompt("Une durée en secondes : ")
    let n = 24*60*60
    let jours = numbrSecondes / n
    let heures = (numbrSecondes%n)/(60*60)
    let minutes = (numbrSecondes%(60*60))/60
    let seconds = numbrSecondes%60
    alert("cette durée équivaut à "+ (Math.floor(jours) ? (Math.floor(jours)+" jours ") : "") +(Math.floor(heures) ? (Math.floor(heures)+" heures ") : "")+(Math.floor(minutes) ? (Math.floor(minutes)+" minutes ") : "")+(Math.floor(seconds) ? (Math.floor(seconds)+" seconds ") : ""))
}
```

---

### TP3 - Tri de nombres
**Fichier:** `tp3.js`

**Fonction:** `troisNombres()`

Demande 3 nombres à l'utilisateur et les affiche dans l'ordre croissant.

**Utilisation:**
- L'utilisateur saisit 3 nombres successivement
- Le programme affiche ces nombres triés par ordre croissant

**Code:**
```javascript
function troisNombres(){
    let listNum = []
    for (let i = 0; i < 3; i++) {
        let num = Number(prompt((i+1)+" nombre"))
        listNum.push(num)
    }
    listNum.sort((a,b)=>a-b)
    alert("les nombres dans l'ordre croissant : "+listNum.join(" "))
}
```

---

### TP4 - Affichage de motifs
**Fichier:** `tp4.js`

**Fonctions:**
- `triangle1()` - Triangle avec boucles `while`
- `triangle2()` - Triangle avec boucles `for`
- `motifPyramide()` - Pyramide centrée

Affiche des motifs géométriques en étoiles (*) sans utiliser la fonction `repeat()`.

**Exemples de sortie:**

Triangle (taille 5):
```
*
**
***
****
*****
```

Pyramide (taille 5):
```
    *
   ***
  *****
 *******
*********
```

**Code:**
```javascript
// Triangle avec while
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

// Triangle avec for
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

// Pyramide
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
```

---

### TP5 - Nombre premier
**Fichier:** `tp5.js`

**Fonction:** `premier()`

Vérifie si un nombre est premier et affiche ses diviseurs s'il ne l'est pas.

**Utilisation:**
- L'utilisateur saisit un entier positif
- Le programme indique si le nombre est premier
- Si non premier, affiche tous ses diviseurs

**Code:**
```javascript
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
```

---

### TP6 - Suite de Fibonacci
**Fichier:** `tp6.js`

**Fonctions:**
- `Fibo1()` - Affiche les n premiers termes de la suite de Fibonacci
- `Fibo2()` - Trouve le premier terme supérieur à n et son index

**Suite de Fibonacci:** Chaque terme est la somme des deux précédents (0, 1, 1, 2, 3, 5, 8, 13...)

**Utilisation:**
- `Fibo1()`: Saisir n → affiche les n premiers termes
- `Fibo2()`: Saisir n → affiche le premier terme > n et sa position

**Code:**
```javascript
// Affiche les n premiers termes
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

// Trouve le premier terme > n
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
```

---

### TP7 - Calcul de racine carrée
**Fichier:** `tp7.js`

**Fonction:** `Raca1()`

Calcule la racine carrée d'un nombre en utilisant la méthode de Newton-Raphson (méthode itérative).

**Algorithme:**
- Formule: `u(n+1) = 0.5 × (u(n) + A/u(n))`
- Continue jusqu'à ce que `|u² - A| < 10⁻⁵`

**Utilisation:**
- L'utilisateur saisit un nombre entre 1 et 100
- Le programme calcule et affiche sa racine carrée

**Code:**
```javascript
function Raca1(){
    A = Number(prompt("Saisir un nombre entre 1 et 100"))
    u = A/2
    while (Math.abs(u*u - A) > 10**-5){
        u = 0.5*(u+(A/u))
    }
    alert(u)
}
```

---

## 🚀 Comment utiliser

1. Ouvrir `index.html` dans un navigateur
2. Ouvrir la console du navigateur (F12)
3. Appeler la fonction souhaitée dans la console, par exemple:
   ```javascript
   degreC()
   troisNombres()
   motifPyramide()
   ```

## 📝 Notes techniques

- Tous les exercices utilisent `prompt()` pour la saisie utilisateur
- Les résultats sont affichés via `alert()` ou `console.log()`
- Les exercices couvrent: boucles (for/while), conditions, calculs mathématiques, algorithmes classiques
