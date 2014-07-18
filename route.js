'use strict';

var route = function( handle, pathname ){
  console.log('Routing '  + pathname);

  if( typeof handle[ pathname ] === 'function' ){
    return handle[ pathname ]();
  } else {
    console.log('Request Handler Not Found for ' + pathname);
    return '404 not found.';
  }
};

exports.route = route;

