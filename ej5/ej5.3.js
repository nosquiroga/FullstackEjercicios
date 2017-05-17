/*
* En un archivo ej5.json, guardar todas los nombres de los planetas que aparecen en la pelicula "Attack of the Clones"
* 
* 1) Obtener los ids de los planetas leyendo el json del archivo planets.json buscando por id=5
* 2) Obttener los planetas del archivo planets.json
* 3) Escribir el resultado en un nuevo archivo (ej5.json) con el siguiente formato:
* 
* ["planeta1", "planeta2", ...]
*
* Home work: relizar este ejercicio usando las distintas tecnicas vistas en clase
* Guardar las distintas versiones en archivos ej5.1.js, ej5.2.js, ej5.3.js, ej5.4.js
*/
const fs = require("fs");

const planetsFile = "planets.json";
const filmsFile = "films.json";
const ej5_3File = "ej5.3.json";

const readJSON = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(`../data/${filename}`, (err, data) => {
      if (err) {
        const error = new Error(`No se pudo leer el archivo ${filename}`);
        return reject(error);
      }

      let parsed = null;
      try {
        parsed = JSON.parse(data);
      } catch (error) {
        const error = new Error(`No se pudo parsear el archivo ${fileName}`);
        return reject(error);
      }
      return resolve(parsed);
    });
  });
};

const writeJSON = (fileName, dataObject) => {
  const data = JSON.stringify(dataObject);
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${fileName}`, data, err => {
      if (err) {
        const error = new Error(`No se pudo escribir el archivo ${fileName}`);
        return reject(error);
      }
      return resolve(null);
    });
  });
};

console.log("Leyendo archivo films.json...");

let filmPlanets = null;
let planetsFilm = null;

readJSON(filmsFile)
  .then(films => {
    filmPlanets = films.find(film => film.id === "5");
    return readJSON(planetsFile);
  })
  .then(planets => {
    planetsFilm = planets
      .filter(planet => filmPlanets.planets.includes(planet.id))
      .map(planet => planet.name);

    return writeJSON(ej5_3File, planetsFilm);
  })
  .then(() => {
      console.log("Guardado los planetas se han!");
  })
  .catch(err => {
      console.log(err);
  });