function tableau() {
    var n;
    var t = [];
    var tp = [];
    var tn = [];
    do {
        n = Number(prompt('donner N'));
    } while ((n < 5) || (n > 20));
    for (var i = 0; i < n; i++) {
        t[i] = Number(prompt('donner un entier'));
    }
    var k = 0;
    var j = 0;
    for (var i = 0; i < n; i++) {
        if (t[i] < 0) {
            tn[j] = t[i];
            j = j + 1;
        }
        else {
            tp[k] = t[i];
            k = k + 1;
        }
    }
    console.log(tp);
    console.log(tn);
}
console.log(tableau());
