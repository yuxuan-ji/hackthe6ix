const request = require("request");
/**
* Get an user
* @param {string} id Your username
* @param {string} pw Your password
* @param {string} target Username of the user you wish to follow
* @returns {any}
*/
module.exports = (id, pw, target, context, callback) => {
    var auth = 'Basic ' + Buffer.from(id + ':' + pw).toString('base64');
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
