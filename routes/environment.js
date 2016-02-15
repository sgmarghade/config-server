/**
 * Created by swapnil on 11/02/16.
 */
'use strict';

var boom = require("boom");
var environment = require("../controllers/environment");

module.exports = [

    {
        path: "/environments",
        method: "GET",
        handler: environment.getAll
    },
    {
        path:"/environments",
        method:"POST",
        handler: environment.create
    },
    {
        path:"/environments/{id}",
        method:"GET",
        handler: environment.getById
    }
]