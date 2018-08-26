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
var linkedinProfileName;
/**
* Get an user
* @param {string} token OAuth token
* @param {string} type 
* @param {string} position 
* @param {string} long Longitude
* @param {string} lat Latitude
* @param {string} linkedinProfileName
* @returns {any}
*/
module.exports = (token, type, position='', long='', lat='', linkedinProfileName='', context, callback) => {
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
                long = parseFloat(long);
                lat = parseFloat(lat);
                linkedinProfileName = linkedinProfileName;
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

                        let data = {
                                        username: username,
                                        avatar_url: avatar_url,
                                        github_followers: github_followers,
                                        github_following: github_following,
                                        name: name,
                                        position: position,
                                        loc: {lng: long, lat: lat},
                                        linkedinProfileName: linkedinProfileName
                                    };

                        console.log(data);

                        let users = result;
                        if (users.length != 0) {
                            lib.testhackerman12['mongodb-lite']['@dev'].update(
                                {
                                    uri: uri,
                                    collectionName: "users",
                                    ids: new Array(users[0]['_id']),
                                    data: data
                                },
                                function(err, result) {
                                    callback(err, result);
                                }
                            );
                        } else {

                            lib.testhackerman12['mongodb-lite']['@dev'].insert(
                                {
                                    uri: uri,
                                    collectionName: "users",
                                    data: data
                                },
                                function(err, result) {
                                    callback(err, result);
                                }
                            );
                        }
                    }
                );

            }
        ); 
    }
};
