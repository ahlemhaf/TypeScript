function date(jour: number, mois: number, annee: number): number {

  if ((jour = 1) && (jour = 31) && (mois = 1) || (mois = 3) || (mois = 5) || (mois = 7) || (mois = 8) || (mois = 10) || (mois = 12))
    return (1)
  else if ((jour >= 1) && (jour <= 30) && (mois = 4) || (mois = 6) || (mois = 9) || (mois = 11))
    return (1)
  else if ((annee % 4== 0) && (jour <= 29) && (jour >= 1))
  return (1)
    else if ((mois = 2) && (jour <= 29) && (jour >= 1))
    return (1)
    else 
    return (0)


}
var jour = 1
var mois = 89
var annee = 2000
console.log(date(jour, mois, annee))