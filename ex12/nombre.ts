function nombre(): string {
    var a= Number(prompt('donner un numéro'));
    var nb_sup=0
    var position = 0
    for (let i = 2; i <= 20; i++) {
        let a = Number(prompt('donner un numéro a'))

        if (a > nb_sup) {
            nb_sup = a;
            position = i
        }
    }

    return `le max est : ${nb_sup} et se trouve dans la position ${position}`
}


console.log(nombre());