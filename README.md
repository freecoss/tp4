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

---

### TP2 - Conversion de durée
**Fichier:** `tp2.js`

**Fonction:** `hjms()`

Convertit une durée en secondes en jours, heures, minutes et secondes.

**Utilisation:**
- L'utilisateur saisit une durée en secondes
- Le programme affiche la durée décomposée (ex: "2 jours 3 heures 45 minutes 30 secondes")

---

### TP3 - Tri de nombres
**Fichier:** `tp3.js`

**Fonction:** `troisNombres()`

Demande 3 nombres à l'utilisateur et les affiche dans l'ordre croissant.

**Utilisation:**
- L'utilisateur saisit 3 nombres successivement
- Le programme affiche ces nombres triés par ordre croissant

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

---

### TP5 - Nombre premier
**Fichier:** `tp5.js`

**Fonction:** `premier()`

Vérifie si un nombre est premier et affiche ses diviseurs s'il ne l'est pas.

**Utilisation:**
- L'utilisateur saisit un entier positif
- Le programme indique si le nombre est premier
- Si non premier, affiche tous ses diviseurs

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
