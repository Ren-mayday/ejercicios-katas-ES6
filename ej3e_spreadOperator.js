//!3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

let colorsCopy = [...colors];
console.log(colorsCopy);

colorsCopy.splice(2, 1);
console.log(colorsCopy);
