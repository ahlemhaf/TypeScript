function calcul(prix:number,taux:number,nom:number):number {
    return ((prix*nom*taux)+(prix*nom));
 
}
var prix=10
var taux=5
var nom=2
console.log(calcul(prix,taux,nom));