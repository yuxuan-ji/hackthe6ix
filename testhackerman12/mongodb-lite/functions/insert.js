const MongoClient = require('mongodb').MongoClient;

let cache = null;

/**
* @param {string} uri Database uri
* @param {string} collectionName Name of the collection
* @param {object} data Data you wish to insert
* @returns {any}
*/
module.exports = (uri, collectionName, data, context, callback) => {
  let text = context.params.text || '';
  let completed = context.params.completed || false;

  try {
    if (cache === null) {
      MongoClient.connect(uri, (error, db) => {
        if (error) {
          console.log(error['errors']);
          return callback(error);
        }
        cache = db;
        insertData(db, collectionName, data, callback);
      });
    } else {
      insertData(cache, collectionName, data, callback);
    }
  } catch (error) {
    console.log(error);
    return callback(error);
  }
};

const insertData = (db, collectionName, data, callback) => {
  db.collection(collectionName).insertOne(data, (error, result) => {
    if (error) {
      console.log(error);
      return callback(null, error);
    }
    return callback(null, result.insertedId);
  });
};
