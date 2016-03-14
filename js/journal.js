exports.Journal = function() {
  this.entries = [];
};

exports.Journal.prototype.addEntry = function(entry) {
  this.entries.push(entry);
};
