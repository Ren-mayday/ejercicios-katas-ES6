/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

let nameOfCitiesVisited = cities.map((city) => {
  console.log("Iteración:", city);
  if (city.isVisited === true) {
    console.log(`Nombre original: ${city.name}`);
    return city.name + " (Visitado)";
  } else {
    console.log(`Nombre sin cambios: ${city.name}`);
    return city.name;
  }
});

console.log(nameOfCitiesVisited);
