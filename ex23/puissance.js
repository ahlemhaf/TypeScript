function puissance(a, n) {
    var produit = 1;
    for (var i = 1; i <= n; i++) {
        produit = produit * a;
    }
    return (produit);
}
var a = 2;
var n = 4;
console.log(puissance(a, n));
