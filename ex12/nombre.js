function nombre() {
    var a = Number(prompt('donner un numéro'));
    var nb_sup = 0;
    var position = 0;
    for (var i = 2; i <= 20; i++) {
        var a_1 = Number(prompt('donner un numéro a'));
        if (a_1 > nb_sup) {
            nb_sup = a_1;
            position = i;
        }
    }
    return "le max est : ".concat(nb_sup, " et se trouve dans la position ").concat(position);
}
console.log(nombre());
