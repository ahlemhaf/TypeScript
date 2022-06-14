function x() {
    var n = 583676535354;
    var chif = 6;
    var chainen = n.toString();
    var chainechif = chif.toString();
    var pos = -1;
    var pos2 = -1;
    for (var i = 0; i < chainen.length; i++) {
        if (chainen.substring(i, i + 1) == chainechif && pos != -1 && pos2 == -1) {
            pos2 = i;
        }
        if (chainen.substring(i, i + 1) == chainechif && pos == -1) {
            pos = i;
        }
    }
    console.log(pos2);
}
x();
