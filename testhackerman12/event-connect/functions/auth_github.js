const lib = require('lib');
const request = require('request');
/**
* authenticate
* @param {string} code 
* @returns {any}
*/
module.exports = (code, context, callback) => {
    console.log('code ' + code);
    request.post(
        {
            headers:{"Accept": "application/json"},
            url:'https://github.com/login/oauth/access_token?client_id=519813e63570d699ea25&client_secret=d4c62256b7dae895dbcaca4700b8ca244f29193f&code='+code
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var token= JSON.parse(body).access_token;
                console.log('token ' + token);
                request(
                    {
                      headers:{"Authorization": "token "+token,
                               "User-Agent":'event-connect'},
                      url:'https://api.github.com/user'
                    },        
                      function (error, response, body) {
                        //console.log(response);
                        if (!error && response.statusCode == 200) {
                            console.log(JSON.parse(body));

                        }
                        else if(error){
                          console.log(JSON.parse(error));
                        }
                    });
                window.location.replace("http://localhost:4200/signup?type=github&token='+token");
            }
            callback(error, response);
        }
    );
    
};
