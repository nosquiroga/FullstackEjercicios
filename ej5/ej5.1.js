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
const pathFilms = "../data/films.json";
const pathPlanets = "../data/planets.json";
const ej5_1File = "./ej5.1.json";

fs.readFile(pathFilms, "utf-8", (errf, dataf) => {
  if (errf) {
    return console.log("No se pudo leer el archivo ${pathFilms}");
  }

  let films = null;
  try {
    films = JSON.parse(dataf);
  } catch (error) {
    return console.log("No se pudo parsear el archivo ${pathFilms}");
  }

  const filmPlanets = films.find(film => film.id === "5");

  fs.readFile(pathPlanets, "utf-8", (errp, datap) => {
    if (errp) {
      return console.log("No se pudo leer el archivo ${pathPlanets}");
    }

    let planets = null;
    try {
      planets = JSON.parse(datap);
    } catch (error) {
      return console.log("No se pudo parsear el archivo ${pathPlanets}");
    }

    const planetsFilm = planets
      .filter(planet => filmPlanets.planets.includes(planet.id))
      .map(planet => planet.name);

    fs.writeFile(ej5_1File, JSON.stringify(planetsFilm), err => {
      if (err) {
        return console.log("No se pudo escribir el archivo ${ej5_1File}");
      }
      console.log(
        'Se han guardado los planetas del film "Attack of the Clones"'
      );
    });
  });
});
