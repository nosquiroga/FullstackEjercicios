/*
* Refactor ej1.
*
*1) Crear una funcione (readJSON) para leer y parsear los archivos JSON.
*2) Crear una función (writeJSON) para convenrtir objeto a JSON y grabarlo en un archivo.
*/
const fs = require('fs');
const pathPeople = '../data/people.json';
const pathFilms = '../data/films.json';
const writeFile = 'ej2.json';

function leerJSON(path, callback){
    fs.readFile(path, 'utf-8',(err, data) => {
        if(err){
            throw err;
        }        
        process.nextTick(() => callback(null, JSON.parse(data)));
    });
}
    
function escribirJSON(path, json, callback){
    fs.writeFile(path, json, (err) => {
        if(err){
            throw err;
        }
        process.nextTick(() => callback(null));
    });
}   

console.log('Leyendo people.json...');
leerJSON(pathPeople, (err, people) => {
    if(err){
        return console.log('Hubo un error al leer el archivo');
    }
    
    const peopleLuke = people.find(character => character.id === '1');
    const filmsLuke = peopleLuke.films;
    console.log('Tenemos los id de las pelis de Luke;');

    leerJSON(pathFilms, (err, films, filmsLuke) => {
        const lukeFilms = films.filter(film => peopleLuke.films.includes(film.id)).map(film => film.title);
        console.log('Luke estuvo en: '+ lukeFilms.join(', '));

        console.log('Guardando datos...');
        escribirJSON(writeFile, JSON.stringify(lukeFilms), err => {
            if(err){
                return console.log('Hubo un error al guardar los datos.');
            }

            console.log('Se guardaron los datos correctamente.');
        });
    });
});



