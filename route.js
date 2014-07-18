'use strict';

var route = function( handle, pathname, response ){
  console.log('Handling routing for '  + pathname);

  if( typeof handle[ pathname ] === 'function' ){
    handle[ pathname ](response);
  } else {
    console.log('Request Handler Not Found for ' + pathname);
    
    response.writeHead(404, {'Content-Type': 'text/plain'} );
    response.write( '404 Not Found.  You are lost bro.' );
    response.end();
  }
};

exports.route = route;

