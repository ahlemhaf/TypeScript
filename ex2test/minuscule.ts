function min() {
    var ch:string="bonjour TT LE MONDE"
    var occ:number=0
    for(let i=0;i< ch.length ;i++){
        if(ch.charCodeAt(i)>=97 && ch.charCodeAt(i)<=122){
            occ=occ+1
        }
    }
    alert("occurence est:" +occ)
}
min()