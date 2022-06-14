function tableau() {
    var tab = [];
    var n;
    var s = 0;
    var moy = 0;
    do {
        n = Number(prompt('donner n'));
    } while (((n >= 5) && (n <= 20)));
    for (var i = 1; i <= n; i++) {
        tab[i] = Number(prompt('donner un entier'));
    }
    for (var i = 1; i <= n; i++) {
        s = s + tab[i];
    }
    moy = s / n;
    return (moy);
}
console.log(tableau());
