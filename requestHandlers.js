'use strict';

var start = function(){
  console.log('Starting!');
  return 'From the Moon to the Starts...';
};

var upload = function(){
  console.log('Uploading!');
  return 'Upload this!';
};

exports.start = start;
exports.upload = upload;