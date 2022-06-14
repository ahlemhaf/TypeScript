function triplet(a: number, b: number, c: number): boolean {
  if ((a * a) +(b * b) == (c * c))
  {
    return (true)
  } else {
    return (false)
  }

}
var a = 4
var b = 5
var c = 6
console.log(triplet(a, b, c))