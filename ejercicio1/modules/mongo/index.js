const mongodb = require("mongodb"), client = mongodb.MongoClient;

const path = require("path");

const readJSON = require("read-json");

const booksFile = path.resolve(__dirname, "../../data/books.json");
const categoriesFile = path.resolve(__dirname, "../../data/categories.json");

const USER = process.env.MONGO_USER || "admin";
const PSWD = process.env.MONGO_PASSWORD || "admin";
const DOMAIN = process.env.MONGO_DOMAIN || "localhost";
const PORT = process.env.MONGO_PORT || "27017";
const DB = process.env.MONGO_DB || "mongo-db";

const connectionString = `mongodb://${DOMAIN}:${PORT}/${DB}`;

let promise;

let db;

const dbConnector = connectionString => {
  if (promise) {
    return promise;
  }
  console.log(`Mongo connect: ${connectionString}`);
  promise = client.connect(connectionString).then(function(database) {
    db = database;
    return db;
  });

  return promise;
};

const collection = name => {
  return dbConnector(connectionString).then(db => db.collection(name));
};

const fetch = filename => {
  return new Promise((resolve, reject) =>
    readJSON(filename, (error, elements) => {
      if (error) {
        return reject(error);
      }

      resolve(elements);
    })
  );
};

const init = (type, file) => {
  let col = {};
  return collection(type)
    .then(coll => {
      col = coll;
      return col.find().toArray();
    })
    .then(elementsDB => {
      if (!elementsDB.length) {
        console.log(`MongoDB collection (${type}) not found, import...`);
        return fetch(file).then(elements => {
          return col.insertMany(elements);
        });
      }
      console.log(`MongoDB collection (${type}) found...`);
      return Promise.resolve();
    });
};

const initBooks = () => init("books", booksFile);

const initCategories = () => init("categories", categoriesFile);

exports.dbConnector = dbConnector;

exports.collection = collection;

exports.init = () => {
  console.log("MongoDB init...");
  return Promise.all([initBooks(), initCategories()]);
};
