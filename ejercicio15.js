/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (array, index1, index2) => {
  // Paso 1: Guardar temporalmente el valor del primer índice
  const temp = array[index1];

  // Paso 2: Asignar el valor del segundo índice al primer índice
  array[index1] = array[index2];

  // Paso 3: Asignar el valor temporal al segundo índice
  array[index2] = temp;

  // Paso 4: Retornar el array modificado
  return array;
};
console.log(swap(fantasticFour, 2, 0));
