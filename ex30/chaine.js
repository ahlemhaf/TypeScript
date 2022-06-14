function chaine(ch, x) {
    for (var i = 0; i < ch.length; i++) {
        if (ch.substring(i, i + 1) == x) {
            return true;
        }
    }
    return false;
}
var ch = "bonjour";
console.log(chaine(ch, "a"));
