const lib = require('lib');
/**
* Get an user
* @returns {any}
*/
module.exports = (context, callback) => {
    lib.testhackerman12['mongodb-lite']['@dev'].select(
        {
            uri: process.env.MONGO_URI,
            collectionName: "users",
            query: {}
        },
        function(err, res) {
            callback(err, JSON.parse(res));
        }
    );
    
};
