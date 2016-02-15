/**
 * Created by swapnil on 10/02/16.
 */
'use strict';

var boom = require('boom');
module.exports = {

    getAll: function (request, reply) {
        reply(request.models.config.findAll({include: [request.models.environment, request.models.service]}));
    },

    create: function (request, reply) {
        request.models.config.create(request.payload).then(function (savedInstance) {
            reply(savedInstance).created("/configs/" + savedInstance.id);
        }).catch(function (err) {
            reply(boom.badRequest(err));
        })
    },

    getById: function (request, reply) {
        reply(request.models.config.find({
            where: {id: request.params.id},
            include: [request.models.environment, request.models.service]
        }));
    },

    updateConfig: function (request, reply) {
        request.models.config.findById(request.params.id).then(function (actualModel) {
            actualModel.data = request.payload.data;
            reply(actualModel.save());
        });
    },

    getConfigHistories: function (request, reply) {
        reply(request.models.config.find({where: {id: request.params.id}, include: [{all: true}]}));
    },

    getConfigHistory: function (request, reply) {
        reply(request.models.config.find(
            {
                where: {id: request.params.id},
                include: [{model: request.models.configHistory, where: {id: request.params.configHistoryId}}]
            }
            )
        );
    },

    getConfigData: function (request, reply) {

        request.models.config.find(
            {
                where: {
                    name: request.params.configName
                },
                include: [
                    {
                        model: request.models.environment,
                        where: {
                            name: request.params.environmentName
                        },
                        required: true
                    },
                    {
                        model: request.models.service,
                        where: {
                            name: request.params.serviceName
                        },
                        required: true
                    }
                ]
            }
        ).then(function(model){
           reply(model.data).type("application/json");
        });

    }

}