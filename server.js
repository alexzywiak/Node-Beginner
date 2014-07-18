'use strict';

var http = require('http'),
    url  = require('url'),
    port = 8888;

function start( route, handle ) {

  http.createServer( function( request, response ){
    var pathname = url.parse( request.url ).pathname;
    console.log('Pathname: ' + pathname);

    route(  handle, pathname, response );

  }).listen( port );

  console.log('It has begun on port ' + port + '...');
}

exports.start = start;