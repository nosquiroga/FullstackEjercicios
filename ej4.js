/**
* Refactor ej3. 
*
* 1) Modificar el flow principal del programa usando Promise.All para evitar el uso de variables globales
*/

const fs = require('fs');
const pathPeople = './data/people.json';
const pathFilms = './data/films.json';
const writeFile = 'ej4.json';

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

Promise.all([promRead(pathPeople),promRead(pathFilms)])
    .then(([people, films]) => {
        luke = people.find(character => character.id === '1');
        filmsLuke = films.filter(film => luke.films.includes(film.id)).map(film => film.title);
        return promWrite(writeFile, filmsLuke);
    })
    .then(() => {
        console.log('Las peliculas de Luke se guardaron correctamente!');
    })
    .catch((err) => {
        console.log(err);
    });



/*promRead(pathPeople)
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
    });*/