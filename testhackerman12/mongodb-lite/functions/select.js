const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let cache = null;

/**
* @param {string} uri uri of the database
* @param {string} collectionName 
* @param {object} query
* @returns {string} Returning array throws JSON non serializable
*/
module.exports = (uri, collectionName, query, context, callback) => {
  try {
    if (cache === null) {
      MongoClient.connect(uri, (error, db) => {
        if (error) {
          console.log(error['errors']);
          return callback(error);
        }
        cache = db;
        selectData(db, collectionName, query, callback);
      });
    } else {
      selectData(cache, collectionName, query, callback);
    }
  } catch (error) {
    console.log(error);
    return callback(error);
  }
};

const selectData = (db, collectionName, query, callback) => {
  let cursor = db.collection(collectionName).find(query);
  let items = [];
  cursor.each((error, item) => {
    if (error) {
      console.log(error);
    }
    if (item == null) {
      return callback(null, JSON.stringify(items));
    }
    items.push(item);
  });
};
