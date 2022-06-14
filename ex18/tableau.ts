function tableau(): number[] {
    var tab1: number[] = [1, 2, 3]
    var tab2: number[] = [2, 3, 4]
    var tab3: number[] = []

    var n = 3
    for (let i = 0; i <= n - 1; i++) {
        tab3[i] = tab1[i] + tab2[i]
    }

    return (tab3)
}

console.log(tableau());





