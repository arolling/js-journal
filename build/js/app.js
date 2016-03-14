(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
};

exports.Entry.prototype.wordCount = function() {
  var wordArray = this.body.split(' ');
  return wordArray.length;
};

},{}],2:[function(require,module,exports){
exports.Journal = function() {
  this.entries = [];
};

exports.Journal.prototype.addEntry = function(entry) {
  this.entries.push(entry);
};

},{}],3:[function(require,module,exports){
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
      $('#entries').prepend("<p class='small details'>Details: <span class='hideme'>" + entry.wordCount() + "</span></p><hr />");
      $('#entries').prepend("<h3>" + entry.title + "</h3><p>" + entry.body + "</p>");
    });
    $('#entryTitle').val('');
    $('#entryText').val('');

    $('p.details').click(function(event) {
      $(event.target).children().toggle();
    });
  });


});

},{"./../js/entry.js":1,"./../js/journal.js":2}]},{},[3]);
