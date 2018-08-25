const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let cache = null;

/**
* @param {string} uri database uri
* @param {string} collectionName [description]
* @param {array} ids
* @param {object} data {"key_name":"updated_value"}
* @returns {any}
*/
module.exports = (uri, collectionName, ids, data, context, callback) => {
  ids = ids.map(id => new mongodb.ObjectID(id));

  try {
    if (cache === null) {
      MongoClient.connect(uri, (error, db) => {
        if (error) {
          console.log(error['errors']);
          return callback(error);
        }
        cache = db;
        updateData(db, collectionName, ids, data, callback);
      });
    } else {
      updateData(cache, collectionName, ids, data, callback);
    }
  } catch (error) {
    console.log(error);
    return callback(error);
  }
};

const updateData = (db, collectionName, ids, data, callback) => {
  db
    .collection(collectionName)
    .updateMany(
      { _id: { $in: ids } },
      { $set: data },
      (error, result) => {
        if (error) {
          console.log(error);
          return callback(null, error);
        }
        return callback(null, result);
      }
    );
};
