function nombre():string{
 
    var a = Number(prompt('donner un numéro'));
    var position = 0
    var nb_sup = a;
    var i = 0;
    while(a!=0) {
        a = Number(prompt('donner un numéro'))
        
        if (a > nb_sup) {
            nb_sup = a;
            position = i
        }
        i++;
    }

    return `le max est : ${nb_sup} et se trouve dans la position ${position}`
}

console.log(nombre());


    

