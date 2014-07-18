'use strict';

var route = function( handle, pathname ){
  console.log('Routing '  + pathname);

  if( typeof handle[ pathname ] === 'function' ){
    handle[ pathname ]();
  } else {
    console.log('Request Handler Not Found for ' + pathname);
  }
};

exports.route = route;

