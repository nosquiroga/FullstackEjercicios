/**
* Refactor ej2. 
* 
* 1) Cambiar la API de readJSON y writeJSON para retornar promises.
* 2) Modificar el flow principal del programa usando promises en lugar de callbacks anidados
*/
const fs = require('fs');
const pathPeople = './data/people.json';
const pathFilms = './data/films.json';
const writeFile = 'ej3.json';

const promRead = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8',(err, data) => {
            if(err){
                return reject(err);
            }        
            return resolve(JSON.parse(data));
        });
    });
};

const promWrite = (path, json) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, json, (err) => {
            if(err){
                return reject(err);
            }
            return resolve();
        })
    });
};

console.log('Leyendo people.json...');
promRead(pathPeople)
    .then(people => {
        luke = people.find(character => character.id === '1');
        return promRead(pathFilms);
    })
    .then(films => {
        filmsLuke = films.filter(film => luke.films.includes(film.id)).map(film => film.title);
        return promWrite(writeFile, filmsLuke);
    })
    .then(() => {
        console.log('Los films de Luke se cargaron correctamente');
    })
    .catch(err => {
        console.log(err);
    });