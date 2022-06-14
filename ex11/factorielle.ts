function factorielle(a:number):number{
  var   f=1
    for (let i = 2; i <=a; i++)
    {
f=f*i
    }
    return(f)
}
var
a=3
console.log(factorielle(a));