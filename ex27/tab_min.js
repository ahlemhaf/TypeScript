function tableau_min() {
    var tab = [];
    var n = Number(prompt('donner un numéro'));
    for (var i = 0; i <= n - 1; i++) {
        tab[i] = Number(prompt('donner un numéro'));
    }
    var val_min = 0;
    for (var i = 1; i < tab.length; i++) {
        if (tab[i] < tab[val_min]) {
            val_min = i;
        }
    }
    return (tab[val_min]);
}
console.log(tableau_min());
