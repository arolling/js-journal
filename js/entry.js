var moment = require('moment');

exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
  this.timestamp = moment();
};

exports.Entry.prototype.wordCount = function() {
  var wordArray = this.body.split(' ');
  return wordArray.length;
};
