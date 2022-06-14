function codage() {
    var tab: string[] = []
    var n: number

    do {
        n = Number(prompt('donnez n entre 4 et 12'))
    } while (n < 4 && n > 12);

    for (let i = 0; i < n; i++) {
        tab[i] = prompt('donner un chaine')
    }

    for (let i = 0; i < n; i++) {
        var newChaine=""
        for (let j = 0; j < tab[i].length; j++) {
            var letter = tab[i].substring(j,j+1);
            if (letter=="a" || letter=="e"|| letter=="o" || letter=="u" || letter=="i" || letter=="y" 
             || letter=="A" || letter=="E"|| letter=="O" || letter=="U" || letter=="I" || letter=="Y" ){
                 const code=letter.charCodeAt(0);
                 newChaine += letter 
                 newChaine += code

                }else{
                    newChaine += letter
                }
            }
            tab[i]= newChaine ;
    }
    
    console.log(tab);
    
}

codage()