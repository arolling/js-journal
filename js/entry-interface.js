var Entry = require('./../js/entry.js').Entry;
var Journal = require('./../js/journal.js').Journal;

$(document).ready(function(){
  var journal = new Journal();

  $('#addEntry').submit(function(event) {
    event.preventDefault();
    var title = $("#entryTitle").val();
    var body = $("#entryText").val();
    var entry = new Entry(title, body);
    journal.addEntry(entry);
    journal.entries.forEach(function(entry) {
      $('#entries').append("<h3>" + entry.title + "</h3><p>" + entry.body + "</p><hr />");
    });
  });
});
