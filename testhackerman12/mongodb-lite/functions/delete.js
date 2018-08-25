const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let cache = null;

/**
* @param {string} uri [description]
* @param {string} collectionName [description]
* @param {array} ids
* @returns {any}
*/
module.exports = (uri, collectionName, ids, context, callback) => {
  ids = ids.map(id => new mongodb.ObjectID(id));

  try {
    if (cache === null) {
      MongoClient.connect(uri, (error, db) => {
        if (error) {
          console.log(error['errors']);
          return callback(error);
        }
        cache = db;
        deleteData(db, collectionName, ids, callback);
      });
    } else {
      deleteData(cache, collectionName, ids, callback);
    }
  } catch (error) {
    console.log(error);
    return callback(error);
  }
};

const deleteData = (db, collectionName, ids, callback) => {
  db.collection(collectionName).deleteMany({ _id: { $in: ids } }, (error, results) => {
    if (error) {
      console.log(error);
      return callback(error);
    }
    return callback(null, results);
  });
};
