var http = require('http'),
    url  = require('url'),
    port = 8888;

function start( route, handle ) {
  'use strict';
  http.createServer( function( request, response ){
    var pathname = url.parse( request.url ).pathname;
    console.log('Pathname: ' + pathname);

    route(  handle, pathname );

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('He was going to live forever.  Or die in the attempt.');
    response.end();
  }).listen( port );

  console.log('It has begun on port ' + port + '...');
}

exports.start = start;