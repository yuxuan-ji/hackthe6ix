const lib = require('lib');
var username;
var avatar_url;
var github_followers;
var github_following;
var name;
var position;
var long;
var lat;
var uri;
/**
* Get an user
* @param {string} token OAuth token
* @param {string} type 
* @param {string} position 
* @param {string} long Longitude
* @param {string} lat Latitude
* @returns {any}
*/
module.exports = (token, type, position, long, lat, context, callback) => {
    if (type === 'github') {
        lib.testhackerman12['github-lite']['@dev'].get_authenticated_user(
            {token: token},
            function (err, result) {
                if (err) return callback(err);
                username = result.login;
                avatar_url = result.avatar_url;
                github_followers = result.followers;
                github_following = result.following;
                name = result.name;
                position = position;
                long = long;
                lat = lat;
                uri = process.env.MONGO_URI;
                console.log(result);

                lib.testhackerman12['mongodb-lite']['@dev'].select(
                    {
                        uri: uri,
                        collectionName: "users",
                        query: {username: username}
                    },
                    function(err, result) {
                        console.log(result);
                        result = JSON.parse(result);
                        console.log('1 ' + result + ' ' + result.length);
                        if (err) return callback(err);

                        let users = result;
                        if (users.length != 0) {
                            callback(null, users[0]);
                        } else {
                            let data = {
                                            username: username,
                                            avatar_url: avatar_url,
                                            github_followers: github_followers,
                                            github_following: github_following,
                                            name: name,
                                            position: position,
                                            long: long,
                                            lat: lat
                                        };
                            console.log(data);

                            lib.testhackerman12['mongodb-lite']['@dev'].insert(
                                {
                                    uri: uri,
                                    collectionName: "users",
                                    data: data
                                },
                                function(err, result) {

                                }
                            );
                        }
                    }
                );

            }
        ); 
    }
};
