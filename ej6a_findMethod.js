//! 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];

const numberNeeded = numbers.find((number) => {
  return number === 100;
});

console.log(numberNeeded);


