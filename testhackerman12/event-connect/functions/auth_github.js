const lib = require('lib');
const request = require('request');
/**
* Get all near users
* @param {string} code 
* @returns {any}
*/
module.exports = (code, context, callback) => {
    request.post(
        {
            headers:{"Accept": "application/json"},
            url:'https://github.com/login/oauth/access_token?client_id=519813e63570d699ea25&client_secret=d4c62256b7dae895dbcaca4700b8ca244f29193f&code='+code
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var token= JSON.parse(body).access_token;
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
                console.log(token);
                window.location.replace("http://localhost:4200/signup?type=github&token='+token");
            }
            callback(error, response);
        }
    );
    
};
