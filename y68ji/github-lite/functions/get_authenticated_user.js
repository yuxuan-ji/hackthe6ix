const request = require("request");
/**
* Get the current authenticated user
* @param {string} username
* @param {string} password
* @returns {any}
*/
module.exports = (username, password, context, callback) => {
    var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    request(
        {
        url: 'https://api.github.com/user',
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
