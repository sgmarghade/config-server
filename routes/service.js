/**
 * Created by swapnil on 10/02/16.
 */
'use strict';

var boom = require("boom");
var service = require("../controllers/service");

module.exports = [

    {
        path: "/services",
        method: "GET",
        handler: service.getAll
    },
    {
        path:"/services",
        method:"POST",
        handler: service.create
    },
    {
        path:"/services/{id}",
        method:"GET",
        handler: service.getById
    },
    {
        path:"/services/{id}/configs",
        method:"GET",
        handler: service.getConfigsForId
    }

]