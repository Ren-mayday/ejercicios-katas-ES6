/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array 
cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función: */
function findArrayIndex(array, text) {
  const index = array.findIndex((arrayString) => arrayString === text);
  return index;
}

//Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Rey"));

/*
Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente. */

const removeItems = (array, text) => {
  const index = findArrayIndex(array, text);
  // Comprobar si el índice es válido, si index es (-1), no es válido, no se encuentra el texto
  if (index === -1) {
    console.log(`El elemento ${text} no se encontró en el array`);
    return array; // devuelve el array sin cambios
  }

  // Eliminar el elemento con splice
  array.splice(index, 1);
  return array;
};

console.log(removeItems(mainCharacters, "Luke"));
console.log(removeItems(mainCharacters, "Jabba el Hutt"));
