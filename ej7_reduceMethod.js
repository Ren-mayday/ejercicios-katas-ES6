//! 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

let totalgrades = exams.map((exam) => {
  return exam.score;
});

totalgrades = totalgrades.reduce((acc, currentValue) => {
  return acc + currentValue;
}, 0);

console.log(totalgrades);

//! 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().
//el acc. número que se le va sumando por cada vuelta se empieza por 0, la segunda vuelta es 0 + 5
//(que es el valor actual, en mi código es el exam) , la segunda es 5 + 6 = 11, la tercera es 11 + 7 = 18, etc.
//y solamente suma los scores que sean igual o superior que 5 por mi condicional
const totalExamsApproved = exams.reduce((acc, exam) => {
  if (exam.score >= 5) {
    //console.log(exam.score);
    return acc + exam.score; // suma el score sólo si es mayor o igual a 5
  }
  return acc; // Devuelve el acumulador sin cambios si no está aprobado
}, 0);

console.log(totalExamsApproved);

//! 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const sumScores = exams.reduce((acc, currentValue) => {
  return acc + currentValue.score;
}, 0);

console.log(sumScores);

const average = sumScores / exams.length;

console.log(average);
