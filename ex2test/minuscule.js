function min() {
    var ch = "bonjour TT LE MONDE";
    var occ = 0;
    for (var i = 0; i < ch.length; i++) {
        if (ch.charCodeAt(i) >= 97 && ch.charCodeAt(i) <= 122) {
            occ = occ + 1;
        }
    }
    alert("occurence est:" + occ);
}
min();
