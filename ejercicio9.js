/*Dado el siguiente javascript usa forof para recorrer el array de películas, 
genera un nuevo array con las categorías de las películas e imprime por 
consola el array de categorías. Ten en cuenta que las categorías no deberían 
repetirse. */

//! Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const movieCategories = [];
// Uso for...of para recorrer cada película, como pide el enunciado
for (let movie of movies) {
  //Uso otro for...of para recorrer cada categoría de la película actual
  for (let category of movie.categories) {
    //console.log(category); // [comedia, aventura, aventura, acción, comedia, thriller, comedia, aventura, animación]
    movieCategories.push(category);
    console.log(`Añadido: "${category}" a movieCategories`);
  }
}

//console.log("Array plano de categorías:", movieCategories);

//console.log(movieCategories);

const categoriesDuplicatesRemove = movieCategories.reduce((acc, category) => {
  if (!acc.includes(category)) {
    acc.push(category);
    //console.log(`"${category}" no está en el acumulador. Se añade.`);
  } else {
    //console.log(`"${category}" ya está en el acumulador. No se añade.`);
  }
  //console.log(`Acumulador después de la iteración: [${acc}]`);
  return acc;
}, []);

console.log(categoriesDuplicatesRemove);
