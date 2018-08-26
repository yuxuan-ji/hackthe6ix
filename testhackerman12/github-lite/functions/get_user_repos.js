const request = require("request");
/**
* Get an user
* @param {string} token OAuth token
* @param {string} target Username of the user you wish to query
* @returns {any}
*/
module.exports = (token, target, context, callback) => {
    var auth = 'token ' + token;
    request(
        {
            url: 'https://api.github.com/users/' + target + '/repos',
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
