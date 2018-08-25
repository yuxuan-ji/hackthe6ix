const lib = require('lib');
/**
* Get an user
* @param {string} token OAuth token
* @returns {any}
*/
module.exports = (token, context, callback) => {
    lib.testhackerman12['github-lite']['@dev'].get_authenticated_user(
        {token: token},
        function (err, result) {
            if (err) return callback(err);

            return callback(null, result);
        }
    );
};
