function chaine (ch:string):number{
    var j=0
    for (let i = 0; i < ch.length; i++) {
        if ((ch.substring(i, i+1) ==' ')){
            j=j+1
        }
    }
    return(j+1)

}
var ch= prompt('donner une chaine '); 
console.log(chaine(ch))


 