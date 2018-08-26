const lib = require('lib');
/**
* Get all near users
* @param {string} long 
* @param {string} lat
* @returns {any}
*/
module.exports = (long='', lat='', context, callback) => {
    //TODO: Geolocation query using $near
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
