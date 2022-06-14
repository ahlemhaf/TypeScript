function tableau(): number {


    var tab1: number[] = [1, 3, 6]
    var tab2: number[] = [7, 3, 1]
    var s = 0


    for (let i = 0; i < tab1.length; i++) {
        for (let j = 0; j < tab2.length; j++) {
            s = s + tab1[i] * tab2[j]
        }
    }


    return (s);
}


console.log(tableau());