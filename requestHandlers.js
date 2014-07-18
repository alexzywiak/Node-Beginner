'use strict';

var start = function(){

  var sleep = function( milliseconds ){
    var startTime = new Date().getTime();
    while( new Date().getTime() < startTime + milliseconds );
  };

  sleep(10000);
  console.log('Starting!');
  return 'From the Moon to the Starts...';
};

var upload = function(){
  console.log('Uploading!');
  return 'Upload this!';
};

exports.start = start;
exports.upload = upload;