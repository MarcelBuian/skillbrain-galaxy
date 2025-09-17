let bani = 0;
 // vreau 10 lei
const tinta = 10;

while (true) {
  console.log("Am " + bani + " lei, mai adaug 1 leu.");
  bani++;

  if (bani >= tinta) {
    break;
  }
}

do {
  console.log("Am " + bani + " lei, mai adaug 1 leu.");
  bani++;

} while (bani < tinta);


console.log("Am ajuns la " + bani + " lei! 🎉");