/**
 * Created by swapnil on 10/02/16.
 */
'use strict';

var boom = require('boom');

module.exports = {
    getAll: function (request, reply) {
        return reply(request.models.service.findAll());
    },

    create: function (request, reply) {
        request.models.service.create(request.payload).then(function (savedInstance) {
            reply(savedInstance).created("/services/" + savedInstance.id);
        }).catch(function (err) {
            reply(boom.badRequest(err));
        });
    },

    getById: function (request, reply) {
        return reply(request.models.service.findById(request.params.id));
    },

    getConfigsForId: function (request,reply) {
        reply(request.models.service.find({where:{id:request.params.id},include:[{ all:true}]}));
    }

}