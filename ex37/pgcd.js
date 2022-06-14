function pgcd(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b;
        }
        else {
            b = b - a;
        }
    }
    return (a);
}
var a = 3;
var b = 5;
console.log(pgcd(a, b));
