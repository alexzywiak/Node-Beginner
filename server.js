'use strict';

var http = require('http'),
    url  = require('url'),
    port = 8888;

function start( route, handle ) {

  var onRequest = function(request, response){
    var pathName = url.parse( request.url ).pathname;
    console.log( 'Roger Roger on wavelength ' + pathName );
    route( handle, pathName, response, request );
  };

  http.createServer( onRequest ).listen( port );
  console.log('It has begun on port ' + port + '...');
}

exports.start = start;