function tableau() {
    var tab = [5, 3, 6];
    var pg = 0;
    var g = tab[0];
    for (var i = 0; i <= tab.length; i++) {
        if (tab[i] > tab[pg]) {
            g = tab[i];
            pg = i;
        }
    }
    return "le plus grand nombre est ".concat(g, " et se trouve dans la position  ").concat(pg);
}
console.log(tableau());
