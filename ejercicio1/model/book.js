const api = require("./api");
const mongo = require("../modules/mongo");
const uuid = require("uuid");

exports.getAll = () => {
  return mongo.collection("books").then( col => {
    return col.find().toArray();
  });
};

exports.getAll = id => {
  return mongo.collection("books").then(col => {
    return col.getByCategoryId({ id }).toArray();
  });
};

exports.getById = id => {
  return mongo.collection("books").then(col => {
    return col.findOne({id});
  });
};

exports.getByCategoryId = id => {
  return mongo.collection("books").then(col => {
    return col.getByCategoryId({ id }).toArray();
  });
}

exports.add = book => {
  return mongo.collection("books").then(col => {
    book.id = uuid.v4();
    return col.insert(book);
  });
};

exports.update = book => {
  return mongo.collection("books").then(col => {
    return col.findOneAndUpdate({id: book.id}, book);
  });
};

exports.remove = id => {
  return mongo.collection("books").then(col => {
    return col.remove({id});
  });
};
