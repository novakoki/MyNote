// Todo: Bind event here
var model = require('./model');
var TagListView = require('./TagList');
var NoteListView = require('./NoteList');
var NoteContentView = require('./NoteContent');

module.exports = {
  init: function () {
    model.init();
    TagListView.init(model.getTags());
    NoteListView.init(model.getNotes(), model.getCurrentTag());
    NoteContentView.init(model.getCurrentNote());
  }
};
