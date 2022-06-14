function moyenne() {
    var tab = [];
    var n = Number(prompt('donner n'));
    var s = 0;
    var ns = 0;
    var moy = 0;
    for (var i = 0; i <= n - 1; i++) {
        tab[i] = Number(prompt('donner n'));
    }
    for (var i = 0; i <= n - 1; i++) {
        s = s + tab[i];
    }
    moy = s / n;
    for (var i = 0; i <= n - 1; i++) {
        if (tab[i] > moy) {
            ns = ns + 1;
        }
    }
    return (ns);
}
console.log(moyenne());
