'use strict';
const Hapi = require('hapi');
const async = require('async');
const routes = require('./routes');
const fs = require('fs');
const server = new Hapi.Server();
const config = JSON.parse(fs.readFileSync('config/config.json','utf8'))[process.env.ENVIRONMENT];

console.log(config);


server.connection({
    host: "localhost",
    port: Number(process.argv[2] || 8082)
});

server.route(routes);

var options = {
    register: require('hapi-sequelize'),
    options: {
        database: config.database,
        user: config.username,
        pass: config.password || '',
        dialect: 'mysql',
        port: 3306,
        models: 'models/*.js',
        sequelize: {
            define: {
                underscoredAll: false

            }
        }
    }
}

async.series([
        function (callback) {
            server.register(options
                , function (err) {
                    if (err) {
                        console.error('failed to load plugin ' + err);
                    }
                    callback(err);
                }
            );
        }
    ],
    function (err) {
        if (!err) {
            server.ext('onPreHandler', function (modelCollections) {
                return function (request, reply) {
                    request.models = modelCollections;
                    console.log(modelCollections);
                    reply.continue();
                }
            }(server.plugins['hapi-sequelize'].db.sequelize.models));

            server.start(function () {
                console.log("server started at  ", server.info);
            });

        }else{
            console.log(err);
        }
    }
);



module.exports = server;