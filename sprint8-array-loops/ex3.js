let mereGasite = false;
let incercari = 0;

do {
  incercari++;
  console.log("Intru în magazin să caut mere. Încercarea " + incercari);
  
  // Simulăm că abia la a 3-a încercare găsești mere
  const expr = incercari === 3;
  if (expr) {
    mereGasite = true;
  }
} while (!mereGasite);
// } while (mereGasite === false);

console.log("Am găsit mere proaspete după " + incercari + " încercări! 🍎");