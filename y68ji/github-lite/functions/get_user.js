const request = require("request");
/**
* Get an user
* @param {string} username
* @param {string} password
* @param {string} user Name of the user you wish to query
* @returns {any}
*/
module.exports = (username, password, user, context, callback) => {
    var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    request(
        {
        url: 'https://api.github.com/users/' + user,
        headers: {
                    "Authorization": auth,
                    "User-Agent": "github-lite"
                }
        },
        function (error, response, body) {
            if (error) {
                callback(error);
            } else if (response) {
                callback(null, body);
            }
        }
    )
};
