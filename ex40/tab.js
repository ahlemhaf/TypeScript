function tableau() {
    var n = Number(prompt("donnez n"));
    var t = [];
    var tv = [];
    var tc = [];
    for (var i = 0; i < n; i++) {
        t[i] = prompt('donner un entier');
    }
    var v = 0;
    var c = 0;
    for (var i = 0; i < n; i++) {
        if ((t[i] == "a") || (t[i] == "u") || (t[i] == "i") || (t[i] == "e") || (t[i] == "y") || (t[i] == "o")) {
            tv[v] = t[i];
            v = v + 1;
        }
        else {
            tc[c] = t[i];
            c = c + 1;
        }
    }
    console.log(t);
    console.log(tc);
    console.log(tv);
}
tableau();
