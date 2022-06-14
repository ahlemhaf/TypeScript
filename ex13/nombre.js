function nombre() {
    // var pos=0 ,i=0, nb_sup=a
    // while ((a>0) || (a<0)) 
    // return(a);
    // if (a>nb_sup)
    // return (nb_sup=a)
    // pos=i
    // i=i+1 
    var a = Number(prompt('donner un numéro'));
    var position = 0;
    var nb_sup = a;
    var i = 0;
    while (a != 0) {
        a = Number(prompt('donner un numéro'));
        if (a > nb_sup) {
            nb_sup = a;
            position = i;
        }
        i++;
    }
    return "le max est : ".concat(nb_sup, " et se trouve dans la position ").concat(position);
}
console.log(nombre());
