const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let cache = null;

/**
* @param {string} uri uri of the database
* @param {string} collectionName 
* @returns {array}
*/
module.exports = (uri, collectionName, context, callback) => {
  try {
    if (cache === null) {
      MongoClient.connect(uri, (error, db) => {
        if (error) {
          console.log(error['errors']);
          return callback(error);
        }
        cache = db;
        selectData(db, collectionName, callback);
      });
    } else {
      selectData(cache, collectionName, callback);
    }
  } catch (error) {
    console.log(error);
    return callback(error);
  }
};

const selectData = (db, collectionName, callback) => {
  let cursor = db.collection(collectionName).find();
  let todos = [];
  cursor.each((error, item) => {
    if (error) {
      console.log(error);
    }
    if (item == null) {
      return callback(null, todos);
    }
    todos.push(item);
  });
};
