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
const ej5_2File = "ej5.2.json";

const readJSON = (filename, callback) => {
  fs.readFile(`../data/${filename}`, "utf-8", (err, data) => {
    if (err) {
      const error = new Error(`No se pudo leer el archivo ${filename}`);
      
      return callback(error);
    }

    let parsed = null;
    try {
      parsed = JSON.parse(data);
    } catch (error) {
      const error = new Error(`No se pudo parsear el archivo ${fileName}`);
      return callback(error);
    }
    
    callback(null, parsed);
  });
};

const writeJSON = (fileName, dataObject, callback) => {
  const data = JSON.stringify(dataObject);
  fs.writeFile(`./${fileName}`, data, err => {
    if (err) {
      const error = new Error(`No se pudo escribir el archivo ${fileName}`);
      return callback(error);
    }
    callback(null);
  });
};

console.log("Leyendo archivo films.json...");
readJSON(filmsFile, (err, films) => {
  if (err) {
    return console.log(err);
  }

  const filmPlanets = films.find(film => film.id === "5");

  readJSON(planetsFile, (err, planets) => {
    if (err) {
      return console.log(err);
    }
    
    const planetFilms = planets
      .filter(planet => filmPlanets.planets.indexOf(planet.id) >= 0)
      .map(planet => planet.name);

    writeJSON(ej5_2File, JSON.stringify(planetFilms), err => {
        if(err){
            return console.log(`No se pudo escribir el archivo ${ej5_2File}`);
        }
        console.log('Se guardaron los planetas correctamente!');
    })
  });
});
