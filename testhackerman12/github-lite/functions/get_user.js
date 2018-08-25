const request = require("request");
/**
* Get an user
* @param {string} id Your username
* @param {string} pw Your password
* @param {string} target Username of the user you wish to query
* @returns {any}
*/
module.exports = (id, pw, target, context, callback) => {
    var auth = 'Basic ' + Buffer.from(id + ':' + pw).toString('base64');
    request(
        {
            url: 'https://api.github.com/users/' + target,
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
