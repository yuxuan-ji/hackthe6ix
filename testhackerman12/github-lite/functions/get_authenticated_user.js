const request = require("request");
/**
* Get the current authenticated user
* @param {string} token OAuth token
* @returns {any}
*/
module.exports = (token, context, callback) => {
    var auth = 'token ' + token;
    request(
        {
            url: 'https://api.github.com/user',
            json: true,
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
    );
};
