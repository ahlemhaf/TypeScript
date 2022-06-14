function tableau_min(): number {
  var tab: number[] = []
  var n = Number(prompt('donner un numéro'));
  
  for (let i = 0; i <= n - 1; i++) {
    tab[i] = Number(prompt('donner un numéro'));
    
  }
  var val_min = 0

  for (let i = 1; i < tab.length; i++) {
    if (tab[i] < tab[val_min]) {
      val_min = i
    }
    
  }
  return (tab[val_min])
}

console.log(tableau_min())