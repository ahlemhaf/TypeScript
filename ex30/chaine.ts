function chaine(ch: string, x: string): boolean {

  for (let i = 0; i <ch.length; i++) {
    if (ch.substring(i,i+1) == x) {
      return true
    }
  }
  
  return false;
}
var ch = "bonjour"
console.log(chaine(ch, "a"))
