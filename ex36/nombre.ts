function nombre() {
    var n: number
    var t = []
    do {
        n = Number(prompt("donnez n"))
    } while (n < 2 || n > 20);

    for (let i = 0; i < n ; i++) {
        t[i] = Number(prompt("donnez un entier"))
    }
    var ind: number = 0
    var i: number = -1
    do {
        i = i + 1
    }
    while (t[i] % 2 != 0 && i < n)

    if (t[i] % 2 == 0) {
        ind = i
        console.log("indice du premier nombre pair est:", ind)
    }
}
nombre()