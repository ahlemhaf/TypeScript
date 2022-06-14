function produit(a:number,b:number):string{
    if(((a>0) && (b>0)) || ((a<0)&&(b<0)))
    return("le produit est positif");
    else 
    return ("le produit est négaif ");
}
var a=2
var b=-5
console.log(produit(a,b));