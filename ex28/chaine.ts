function chaine(ch1: string,): string {
    var ch2 = ""
    for (let i = 0; i < ch1.length - 1; i++) {
        ch2 = ch1.substring(i+1,i) +  ch2 
    }
    return (ch2)
}
var ch1 = "bonjour"
console.log(chaine(ch1))