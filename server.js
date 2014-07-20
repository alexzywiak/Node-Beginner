'use strict';

var http = require('http'),
    url  = require('url'),
    port = 8888;

function start( route, handle ) {

  var onRequest = function(request, response){
    var postData = '',
        pathName = url.parse( request.url ).pathname;

    console.log( 'Roger Roger on wavelength ' + pathName );

    request.setEncoding('utf8');

    request.addListener( 'data', function( chunk ){
      postData += chunk;
      console.log( 'How much wood can a woodchunk chunk: ' + chunk);
    });

    request.addListener( 'end', function(){
      route( handle, pathName, response, postData );
    });
  };

  http.createServer( onRequest ).listen( port );

  console.log('It has begun on port ' + port + '...');
}

exports.start = start;