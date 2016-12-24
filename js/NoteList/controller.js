var model = require('../model')
var NoteListView = require('./view')
var NoteContentView = require('../NoteContent/view')
var NoteEditView = require('../NoteEdit/view')

var bindEvt = function () {
  NoteListView.$noteList.addEventListener('click', function (e) {
    var target = e.currentTarget
    console.log(target)
    if (target.className === 'note-name') {
      var notes = model.getNotes()
      for (var index in notes) {
        var item = notes[index]
        if (item.name === target.firstChild.innerText) {
          model.setCurrentNote(item)
          NoteEditView.clear()
          NoteContentView.render(item)
          break
        }
      }
    }
  })

  NoteListView.$newNoteButton.addEventListener('click', function (e) {
    NoteContentView.clear()
    NoteEditView.render()
  })
}

module.exports = {
  init: function () {
    bindEvt()
  }
}
