exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
}

exports.Entry.prototype.wordCount = function() {
  var wordArray = this.body.split(' ');
  return wordArray.length;
}
