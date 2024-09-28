//! Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: {
        format: "mp3",
        volume: 50,
      },
      rain: {
        format: "ogg",
        volume: 60,
      },
      firecamp: {
        format: "mp3",
        volume: 80,
      },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: {
        format: "mp3",
        volume: 30,
      },
      shower: {
        format: "ogg",
        volume: 55,
      },
      train: {
        format: "mp3",
        volume: 60,
      },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: {
        format: "mp3",
        volume: 50,
      },
      train: {
        format: "ogg",
        volume: 60,
      },
      firecamp: {
        format: "mp3",
        volume: 80,
      },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: {
        format: "mp3",
        volume: 67,
      },
      wind: {
        format: "ogg",
        volume: 35,
      },
      firecamp: {
        format: "mp3",
        volume: 60,
      },
    },
  },
];

// Para hacer la media necesito el volumen de todos los sonidos y luego dividirlo entre el número de sonidos que hay
let totalVolume = 0;
let soundCount = 0;

for (const user of users) {
  // Recorre todo el array de objetos en el console.log() siguiente se ve
  console.log(user);
  for (const sound in user.favoritesSounds) {
    //recorre el array de objetos extrayendo la propiedad de favouriteSounds
    console.log(sound);
    console.log(user.favoritesSounds);
    totalVolume += user.favoritesSounds[sound].volume;
    soundCount++;
    //console.log(totalVolume);
  }
}

const averageVolume = totalVolume / soundCount;

console.log(averageVolume);
