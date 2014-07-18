'use strict';

var exec = require( 'child_process' ).exec;

var start = function( response ){
  console.log( 'Starting!' );

  exec('ls -lah', function( error, stdout, stderr ){
    response.writeHead( 200, { 'Content-Type': 'text/plain' } );
    response.write( stdout );
    response.end();
  });
};

var upload = function( response ){
  console.log( 'Uploading!' );
  response.writeHead( 200, { 'Content-Type': 'text/plain' } );
  response.write( 'Upload yours!' );
  response.end();
};

exports.start = start;
exports.upload = upload;