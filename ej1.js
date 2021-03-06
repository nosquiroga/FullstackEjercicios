/*
* En un archivo ej1.json, guardar todas los nombres de las peliculas en las que aparece el personaje Luke Skywalker. 
* 
* 1) Obtener los ids de las peliculas leyendo el json del archivo people.json buscando por id=1 
* 2) Obtener las peliculas del archivo people.json
* 3) Escribir el resultado en un nuevo archivo (ej1.json) con el siguiente formato:
*    ["pelicula1", "pelicula2", ...]
*/

const fs = require('fs');
const peopleFile = './data/people.json';
const filmsFile = './data/films.json';
const writeFile = 'ej1.json';

fs.readFile(peopleFile, 'utf-8', (err, dataPeople) => {
  if (err) {
    return console.log(`No se pudo leer el archivo ${peopleFile}`);
  }

  try {
    people = JSON.parse(dataPeople);
  } catch (err) {
    return console.log(`No se pudo parsear el archivo ${peopleFile}`);
  }

  const luke = people.find(character => character.id === '1'); //dentro del file se recorren los objetos y devuelve el objeto. Cuando lo encuentra hace break 
  console.log(luke);
  fs.readFile(filmsFile, 'utf-8', (err, dataFilms) => {
    if (err) {
      return console.log('no se pudo leer el archivo ../data/films.json');
    }
    try {
      filmes = JSON.parse(dataFilms);
    } catch (err) {
      return console.log('esto no es un json');
    }

    const lukeFilms = filmes.filter(film => luke.films.includes(film.id)).map(film => film.title);

    //console.log(lukeFilms.join(', '));

    fs.writeFile(writeFile, JSON.stringify(lukeFilms), (err) => {
      if (err) {
        return console.log("Hubo un error al guardar");
      }

      console.log('Se guardo correctamente.')
    });
  });
});