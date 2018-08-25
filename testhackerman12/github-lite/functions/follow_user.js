const request = require("request");
/**
* Get an user
* @param {string} token OAuth token
* @param {string} target Username of the user you wish to follow
* @returns {any}
*/
module.exports = (token, target, context, callback) => {
    var auth = 'token ' + token;
    request(
        {
            method: 'PUT',
            url: 'https://api.github.com/user/following/' + target,
            headers: {
                        "Authorization": auth,
                        "Content-Length": 0,
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
