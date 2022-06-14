function tableau(): string {

    var tab: number[] = [5, 3, 6]
    var pg = 0
    var g = tab[0]

    for (let i = 0; i <= tab.length; i++) {
        if (tab[i] > tab[pg]) {
            g = tab[i]
            pg = i
        }
    }

    return `le plus grand nombre est ${g} et se trouve dans la position  ${pg }`;
}


console.log(tableau());