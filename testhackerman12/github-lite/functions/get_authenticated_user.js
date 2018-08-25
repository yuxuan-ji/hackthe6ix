const request = require("request");
/**
* Get the current authenticated user
* @param {string} id Your username
* @param {string} pw Your password
* @returns {any}
*/
module.exports = (id, pw, context, callback) => {
    var auth = 'Basic ' + Buffer.from(id + ':' + pw).toString('base64');
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
