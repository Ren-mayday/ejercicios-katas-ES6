//! 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const olderAges = ages.filter((age) => {
  console.log("Iteración:", age);
  return age > 18;
});

console.log(olderAges);

/*const olderAges = ages.filter((age) => age > 18);
console.log(olderAges);*/
