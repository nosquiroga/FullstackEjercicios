/**
* Refactor ej2. 
* 
* 1) Cambiar la API de readJSON y writeJSON para retornar promises.
* 2) Modificar el flow principal del programa usando promises en lugar de callbacks anidados
*/
const fs = require('fs');
const pathPeople = '../data/people.json';
const pathFilms = '../data/films.json';
const writeFile = 'ej2.json';

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
        const luke = people.find(character => character.id === '1');
        const filmsLuke = luke.films;
    })