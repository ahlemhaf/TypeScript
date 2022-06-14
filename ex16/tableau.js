function tableau() {
    var nombre_pos = 0;
    var nombre_neg = 0;
    var tab = [1, 2, 6, 9, -9, -5];
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] > 0) {
            nombre_pos = nombre_pos + 1;
        }
        else {
            nombre_neg = nombre_neg + 1;
        }
    }
    return "le nombre de valeurs positives est : ".concat(nombre_pos, " et le nombre de valeurs negatives est ").concat(nombre_neg);
}
console.log(tableau());
