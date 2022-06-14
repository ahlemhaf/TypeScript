function codage() {
    var tab = [];
    var letter = Number(prompt("donnez un caractere"));
    var max = 0;
    var n;
    do {
        n = Number(prompt('donnez n'));
    } while (((n >= 4) && (n <= 12)));
    for (var i = 1; i <= n; i++) {
        tab[i] = Number(prompt('donner un entier'));
    }
    for (var i = 0; i < n; i++) {
        letter = Number(prompt("donnez un caractere"));
        for (var j = 0; j < 25; j++) {
            while (letter = 97, 122)
                ;
        }
    }
    letter[max] = 6;
}
console.log("code");
codage();
