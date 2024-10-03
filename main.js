// Exercice 1
function addition(a, b) {
    const result = a + b 
    return result
  }
  
  console.log(addition(2, 3)); 

  // Exercice 2
function salutation(nom) {
    console.log("Bonjour " + nom)
    return salutation
 }
 
 salutation("Alice")

//  Exercice 3
 function estPair(nombre) {
    if(nombre % 2 === 0){
      return true
    }else{
        return false
    }
}

console.log(estPair(4));
console.log(estPair(9));

// Exercice 4
function aireRectangle(longueur, largeur) {
    return longueur * largeur;
}

console.log(aireRectangle(5, 3));
console.log(aireRectangle(5, 3));

// Exercice 
function estMajuscule(chaine) {
    if( chaine === chaine.toUpperCase()){
      return true
    }else {
      return false
    }
}

console.log(estMajuscule("HELLO"));  
console.log(estMajuscule("Hello"));  
console.log(estMajuscule("1234"));   
console.log(estMajuscule("")); 
