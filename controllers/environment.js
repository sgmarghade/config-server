/**
 * Created by swapnil on 10/02/16.
 */
'use strict';
var boom = require('boom');
module.exports = {
    getAll: function(request,reply){
        return reply(request.models.environment.findAll());
    },
    create: function (request, reply) {
        request.models.environment.create(request.payload).then(function (savedInstance) {
            reply(savedInstance).created("/environments/" + savedInstance.id);
        }).catch(function (err) {
            reply(boom.badRequest(err));
        });
    },
    getById: function (request, reply) {
        return reply(request.models.environment.findById(request.params.id));
    }
}