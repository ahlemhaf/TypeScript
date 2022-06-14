function nombre() {
    var n;
    var t = [];
    do {
        n = Number(prompt("donnez n"));
    } while (n < 2 || n > 20);
    for (var i_1 = 0; i_1 < n; i_1++) {
        t[i_1] = Number(prompt("donnez un entier"));
    }
    var ind = 0;
    var i = -1;
    do {
        i = i + 1;
    } while (t[i] % 2 != 0 && i < n);
    if (t[i] % 2 == 0) {
        ind = i;
        console.log("indice du premier nombre pair est:", ind);
    }
}
nombre();
