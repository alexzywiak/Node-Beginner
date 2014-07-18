'use strict';

var http = require('http'),
    url  = require('url'),
    port = 8888;

function start( route, handle ) {
  http.createServer( function( request, response ){
    var pathname = url.parse( request.url ).pathname;
    console.log('Pathname: ' + pathname);

    var content = route(  handle, pathname );

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write( content );
    response.end();
    
  }).listen( port );

  console.log('It has begun on port ' + port + '...');
}

exports.start = start;