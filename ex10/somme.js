function somme(a) {
    var s = 0;
    for (var i = 1; i <= a; i++) {
        s = s + i;
    }
    return (s);
}
var a = 5;
console.log(somme(a));
