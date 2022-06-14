function occurence(): number{
    var tab: number[] = []
    var x = Number(prompt('donner un numéro a chercher'))
    var n = Number(prompt('donner un numéro (nombre de case)'))
    var occ = 0

    for (let i = 0; i <= n; i++) {
        tab[i] = Number(prompt('donner un numéro'));
        if (x == tab[i]) {
            occ= occ + 1
        }
    
    }
    return (occ);
}
console.log(occurence())