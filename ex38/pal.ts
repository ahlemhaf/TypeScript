function palindrome(): string {
  var ch: string;

  do {
    ch = prompt("donnez une chaine ")
  } while (ch.length > 15);

  var pal = ""
  for (let i =( ch.length-1); i >= 0; i--)
  {  
    pal = pal + ch.substring(i,i+1)
  }
  console.log(pal);
  

  if (pal == ch) {
    return ("c'est un palindrome")
  }
  else {
    return ("n'est pas palindrome ") 
  }
   
}
console.log(palindrome())   