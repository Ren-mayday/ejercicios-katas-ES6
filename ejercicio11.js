/*Dado el siguiente javascript usa forof y forin para saber cuantas veces ha 
sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa forin para recoger el nombre 
de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada 
vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a 
la vez un buen reto y oportunidad para comprender que hay muchas formas de 
hacer las cosas en javascript.*/

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

//Creo un objeto llamado soundCounts nuevo que almacenará cuantas veces ese sonido se ha guardado en favoritos

const soundCounts = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    if (soundCounts[sound]) {
      // Si en el objeto, en la iteración existe el sonido súmamos 1. Ej: en la primera iteración sería soundCounts['waves'],
      // la segunda interación soundCounts['rain'], etc.
      soundCounts[sound]++;
    } else {
      // en caso contrario y en la iteración es la primera vez que aparece ese sonido empezamos el contador a 1
      soundCounts[sound] = 1;
    }
  }
}

console.log(soundCounts);
