// 1. Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (poželjno je obuhvatiti slučaj kada korisnik ne unese odgovarajuću vrednost).
const a = +prompt("Unesite neki realan broj");
if (isNaN(a)) {
  console.log("Niste uneli broj!");
} else {
  console.log(a * a);
}
// 2.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZ BUZZ");
  }
}
// 3.
let brBr = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 4 === 0 && i % 6 === 0 && brBr < 3) {
    console.log(i);
    brBr++;
  }
}
