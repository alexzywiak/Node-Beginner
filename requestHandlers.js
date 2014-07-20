'use strict';

var queryString = require( 'querystring' ),
    fs = require('fs');

var start = function( response, postData ){
  console.log( 'Starting!' );

  var body = '<html><head><meta charset="UTF-8"><title>Upload</title></head><body><form action="/upload"method="post"><textarea name="text"cols="60"rows="20"></textarea><input type="submit"value="SubmitText"></form></body></html>';

  response.writeHead( 200, { 'Content-Type': 'text/html' } );
  response.write( body );
  response.end();

};

var upload = function( response, postData ){
  console.log( 'Uploading! ' + postData );
  response.writeHead( 200, { 'Content-Type': 'text/plain' } );
  response.write( 'Upload yours! ' + queryString.parse(postData).text );
  response.end();
};

var show = function( response ){
  console.log( 'Show me the PNG!' );
  response.writeHead( 200, { 'Content-Type': 'image/png' } );
  fs.createReadStream( 'tmp/test.png' ).pipe( response );
};

exports.start  = start;
exports.upload = upload;
exports.show   = show;