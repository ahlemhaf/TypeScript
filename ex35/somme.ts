function somme(): number {
    var n;
    var somme = 0


    do {
        n = Number(prompt("donnez un nombre n"))
        somme = somme + n
    } while ((n != 0));


    return (somme)
}

console.log(somme())

