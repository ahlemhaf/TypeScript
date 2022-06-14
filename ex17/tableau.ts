function tableau(): string {
    var tab: number[] = []
    var n = Number(prompt('donner n'));
    for (let i = 0; i < n; i++) {
        tab[i] = Number(prompt("donner un entier"));  
    }
    
    var s = 0
    for (let i = 0; i < n; i++) {
        s = tab[i] + s
    }

    
     return `la somme est : ${s} `;
  
}
console.log(tableau())