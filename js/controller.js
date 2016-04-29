// TODO: Model.onchange = trigger(View.update)
// TODO: Bind event here
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
    this.handle();
  },
  handle: function () {
    document.querySelector('.tag-list ul').addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        model.setCurrentTag(e.target.innerText);
        NoteListView.render(model.getNotes(), e.target.innerText);
        model.setCurrentNote(null);
        NoteContentView.render(null);
      }
    });
    document.querySelector('.note-list ul').addEventListener('click', function (e) {
      var target = e.target;
      if (target.tagName === 'H3' || target.tagName === 'P') {
        target = target.parentNode;
      }
      if (target.tagName === 'A') {
        var notes = model.getNotes();
        for (var item of notes) {
          if (item.name === target.firstChild.innerText) {
            model.setCurrentNote(item);
            NoteContentView.render(item);
            break;
          }
        }
      }
    });
    document.querySelector('.new-tag').addEventListener('click', function () {
      var elem = TagListView.newTag('');
      elem.innerHTML = '<input required="required" autofocus="autofocus" onfocus="this.select();" />';
      elem.firstChild.onkeypress = function (e) {
        // TODO: Empty validation
        if (e.keyCode === 13) {
          model.addTag(this.value);
          TagListView.render();
        }
      }
    })
  }
};
