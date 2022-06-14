function occurence(): void {
    var oc: number[] = []
    var ch = prompt('donner un caractere');

    for (let i = 0; i <= 25; i++)
    {
        oc[i] = 0
    }

    for (let i = 0; i< ch.length; i++)
    {
        // var l = ch.substring(i, i+1)
        var code = ch.charCodeAt(i) - 65
        oc[code] = oc[code]+1
    }
    console.log(oc);

}
occurence()