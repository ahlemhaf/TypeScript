function factorielle(a) {
    var f = 1;
    for (var i = 2; i <= a; i++) {
        f = f * i;
    }
    return (f);
}
var a = 3;
console.log(factorielle(a));
