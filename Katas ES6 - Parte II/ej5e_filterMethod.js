/*Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

// Paso 1: Seleccionar el input del DOM usando querySelector:
const input = document.querySelector(
  'input[data-function="toFilterStreamers"]'
);

// Paso 2: agregar un evento 'input' para escuchar cuando el usuario escribe
input.addEventListener("input", () => {
  // Variable para almacenar el texto ingresado por el usuario, convertido a minúsculas
  const searchText = input.value.toLowerCase(); // Convertimos a minúsculas para hacer la búsqueda case-insensitive

  // Paso 3: Filtrar los streamers cuyo nombre incluye el texto introducido
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(searchText)
  );

  // Paso 4: Mostrar los streamers filtrados en la consola
  console.log("Streamers encontrados;", filteredStreamers);
});
