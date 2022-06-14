function tableau() {
    var tab = [];
    var n = Number(prompt('donner n'));
    for (var i = 0; i < n; i++) {
        tab[i] = Number(prompt("donner un entier"));
    }
    var s = 0;
    for (var i = 0; i < n; i++) {
        s = tab[i] + s;
    }
    return "la somme est : ".concat(s, " ");
}
console.log(tableau());
