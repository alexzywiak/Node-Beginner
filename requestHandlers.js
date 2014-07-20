'use strict';

var queryString = require( 'querystring' ),
    fs = require('fs'),
    formidable = require('formidable');

var start = function( response ){
  console.log( 'Starting!' );

  var body = '<html><head><meta charset="UTF-8">'+
  '<title>Upload</title></head><body>'+
  '<form action="/upload" method="post" enctype="multipart/form-data">'+
  '<input type="file" name="upload" multiple="multiple">'+
  '<input type="submit" value="Upload File">'+
  '</form></body></html>';

  response.writeHead( 200, { 'Content-Type': 'text/html' } );
  response.write( body );
  response.end();

};

var upload = function( response, request ){
  console.log('Upload this!');

  var form = new formidable.IncomingForm();

  form.parse( request, function( error, fields, files){
    console.log( 'Yall feelin parsed?' );

    fs.rename(files.upload.path, '/tmp/test.png', function( error ){
      if( error ){
        fs.unlink( '/tmp/test.png' );
        fs.rename( files.upload.path, '/tmp/test.png' );
      }
    });
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Received Image:<br>');
    response.write('<img src="/show"/>');
    response.end();
  });
 
};

var show = function( response ){
  console.log( 'Show me the PNG!' );
  response.writeHead( 200, { 'Content-Type': 'image/png' } );
  fs.createReadStream( '/tmp/test.png' ).pipe( response );
};

exports.start  = start;
exports.upload = upload;
exports.show   = show;