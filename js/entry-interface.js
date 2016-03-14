
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
    $('#entries').empty();
    journal.entries.forEach(function(entry) {
      $('#entries').prepend("<h5 class='small details'>Details:<span class='hideme'><br> Word Count: " + entry.wordCount() + "</span><span class='hideme'><br>Posted: " + entry.timestamp.calendar() + "</span></h5><hr />");
      $('#entries').prepend("<h3>" + entry.title + "</h3><h4>" + entry.body + "</h4>");
    });
    $('#entryTitle').val('');
    $('#entryText').val('');

    $('h5.details').click(function(event) {
      $(event.target).children().toggle();
    });
  });


});
