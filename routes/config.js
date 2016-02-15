'use strict'
var config = require('../controllers/config');
var boom = require('boom');

module.exports = [

    {
        path: "/configs",
        method: "GET",
        handler: config.getAll
    },
    {
        path: "/configs",
        method: "POST",
        handler: config.create

    },
    {
        path:"/configs/{id}",
        method:"GET",
        handler: config.getById
    },
    {
        path:"/configs/{id}",
        method:"POST",
        handler: config.updateConfig
    },
    {
        path:"/configs/{id}/histories",
        method:"GET",
        handler: config.getConfigHistories
    },
    {
        path:"/configs/{id}/histories/{configHistoryId}",
        method:"GET",
        handler:config.getConfigHistory
    },
    {
        path:"/services/{serviceName}/environments/{environmentName}/configs/{configName}",
        method:"GET",
        handler:config.getConfigData
    }

]