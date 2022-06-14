function tableau() {
    var tab1 = [1, 2, 3];
    var tab2 = [2, 3, 4];
    var tab3 = [];
    var n = 3;
    for (var i = 0; i <= n - 1; i++) {
        tab3[i] = tab1[i] + tab2[i];
    }
    return (tab3);
}
console.log(tableau());
