function chaine(ch:string):string {
    var ch2 = ""
    for (let i = 0; i <ch.length; i++)
    {
     if(ch.substring(i, i+1)!=" "){
         ch2 = ch2 + ch.substring(i, i+1)
     }
    }
     return ch2
}

console.log(chaine("bonjour tt le monde "));
